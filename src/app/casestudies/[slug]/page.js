import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Container from "@/components/ui/Container";

export const revalidate = 60;

// ----------------------------------------
// PortableText Custom Styling
// ----------------------------------------
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[16px] md:text-[17px] text-zinc-700 leading-[1.8] text-justify mb-4">
        {children}
      </p>
    ),

    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-zinc-900 mb-4 mt-6">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-zinc-900 mb-4 mt-5">
        {children}
      </h3>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-600 my-6">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 text-zinc-700 leading-relaxed space-y-2">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal ml-6 text-zinc-700 leading-relaxed space-y-2">
        {children}
      </ol>
    ),
  },

  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={value?.asset?.url}
          alt={value.alt || "Case Study Image"}
          width={900}
          height={600}
          className="rounded-xl object-cover"
        />
      </div>
    ),

    code: ({ value }) => (
      <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto my-6 text-sm">
        <code>{value.code}</code>
      </pre>
    ),
  },
};


// ----------------------------------------
// Table Cell Renderer
// ----------------------------------------
function RenderRichCell({ content }) {
  if (!content) return null;
  return (
    <div>
      {content.map((block, idx) => {
        if (block._type !== "block") return null;

        return (
          <p key={idx} className="text-sm leading-relaxed">
            {block.children?.map((child, cIdx) => {
              let style = {};

              // Text Color
              const m1 = block.markDefs?.find(
                (m) => child.marks?.includes(m._key) && m._type === "color"
              );
              if (m1) style.color = m1.hex;

              // Background Color
              const m2 = block.markDefs?.find(
                (m) => child.marks?.includes(m._key) && m._type === "bgColor"
              );
              if (m2) style.backgroundColor = m2.hex;

              return (
                <span key={cIdx} style={style} className="px-0.5">
                  {child.text}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

// ----------------------------------------
// Table Renderer
// ----------------------------------------
function RenderTable({ table }) {
  if (!table?.rows) return null;

  return (
    <div className="overflow-x-auto border rounded-xl">
      <table className="w-full border-collapse">
        <tbody>
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b">
              {row.cells?.map((cell, cIdx) => (
                <td key={cIdx} className="p-4 border-r align-top">
                  <RenderRichCell content={cell.content} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ----------------------------------------
// Fetch slugs
// ----------------------------------------
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "caseStudy"]{ slug }`);
  return slugs.map((s) => ({ slug: s.slug.current }));
}

// ----------------------------------------
// MAIN PAGE
// ----------------------------------------
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;   // ✅ FIXED

  const caseStudy = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
      name,
      category->{ title },
      languages,
      mainImage{ asset->{url} },
      sections[]{
        _type,
        heading,
        description,
        image{ asset->{url} },
        table{
          rows[]{
            cells[]{
              content[]{
                ...,
                markDefs[]{...}
              }
            }
          }
        }
      }
    }`,
    { slug }
  );

  if (!caseStudy) return <div>Not found</div>;

  return (
    <Container>
    <div className="w-full ">

      {/* -------------------------------------------- */}
      {/* PAGE HEADER */}
      {/* -------------------------------------------- */}
      <div className="bg-[#f5f5f5] rounded-xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 overflow-hidden">
        <span className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
          {caseStudy.name}
        </span>
        {caseStudy.category?.title && (
          <p className="mt-3 sm:mt-4 text-lg text-zinc-700 max-w-3xl">
            Case Study on {caseStudy.category.title}
          </p>
        )}
      </div>

      {/* -------------------------------------------- */}
      {/* SECTIONS */}
      {/* -------------------------------------------- */}
      <div className=" mx-auto py-8 lg:py-16 space-y-24">

        {caseStudy.sections?.map((sec, i) => {
          const isEven = i % 2 === 0;

          // 1️⃣ Full Width Description
          if (sec._type === "fullWidthDescription") {
            return (
              <div key={i} className="text-left  mx-auto">
                {sec.heading && (
                  <h3 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-6">
                    {sec.heading}
                  </h3>
                )}
                <PortableText className="text-xl font-semibold" value={sec.description} components={ptComponents} />
              </div>
            );
          }

          // 2️⃣ Description + Table
          if (sec._type === "descriptionTable") {
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  {sec.heading && (
                    <h3 className="text-3xl font-semibold mb-6">{sec.heading}</h3>
                  )}
                  <PortableText value={sec.description} components={ptComponents} />
                </div>

                <div className="md:w-1/2">
                  <RenderTable table={sec.table} />
                </div>
              </div>
            );
          }

          // 3️⃣ Image + Table
          if (sec._type === "tableImageSection") {
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <RenderTable table={sec.table} />
                </div>

                <div className="md:w-1/2">
                  {sec.image?.asset?.url && (
                    <Image
                      src={sec.image.asset.url}
                      width={700}
                      height={500}
                      alt={sec.heading}
                      className="rounded-xl object-cover"
                    />
                  )}
                </div>
              </div>
            );
          }

          // 4️⃣ Full width table
          if (sec._type === "fullTableSection") {
            return (
              <div key={i}>
                {sec.heading && (
                  <h3 className="text-3xl font-semibold mb-6 text-center">
                    {sec.heading}
                  </h3>
                )}
                <RenderTable table={sec.table} />
              </div>
            );
          }

          // 5️⃣ Existing Image + Description (Beautiful Layout)
          if (sec.image?.asset?.url && sec.description) {
            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src={sec.image.asset.url}
                    width={800}
                    height={600}
                    alt={sec.heading}
                    className="rounded-xl object-cover shadow-sm"
                  />  
                </div>

                {/* Description */}
                <div className="md:w-1/2">
                  {sec.heading && (
                    <h3 className="text-3xl font-semibold mb-6">{sec.heading}</h3>
                  )}
                  <PortableText value={sec.description} components={ptComponents} />
                </div>
              </div>
            );
          }

          // 6️⃣ Only text or only image
          return (
            <div key={i} className="text-center max-w-3xl mx-auto">
              {sec.image?.asset?.url && (
                <Image
                  src={sec.image.asset.url}
                  width={900}
                  height={650}
                  alt="Section"
                  className="rounded-xl mx-auto mb-6 object-cover"
                />
              )}
              {sec.heading && (
                <h3 className="text-3xl font-semibold mb-4">{sec.heading}</h3>
              )}
              {sec.description && (
                <PortableText
                  value={sec.description}
                  components={ptComponents}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* -------------------------------------------- */}
      {/* TECHNOLOGIES */}
      {/* -------------------------------------------- */}
      {caseStudy.languages?.length > 0 && (
        <div className="bg-zinc-50 py-14">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-semibold mb-8">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.languages.map((lang, i) => (
                <span
                  key={i}
                  className="bg-white border rounded-full px-6 py-2 text-zinc-700 shadow-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    </Container>
  );
}
