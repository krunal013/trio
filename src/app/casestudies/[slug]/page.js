import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Container from "@/components/ui/Container";
import Cta from "@/components/Cta";

export const revalidate = 60;

// ----------------------------------------
// PortableText Custom Styling (NO LINKS)
// ----------------------------------------
const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-[19px] md:text-[19px]   text-zinc-700 leading-[1.8] mb-4">
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
      <ul className="list-disc ml-6 text-zinc-700 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 text-zinc-700 space-y-2">
        {children}
      </ol>
    ),
  },

  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-medium underline-offset-2 hover:underline"
      >
        {children}
      </a>
    ),
  },



  types: {
    image: ({ value }) => (
      <div className="my-8">
        <Image
          src={value?.asset?.url}
          alt="Case Study Image"
          width={900}
          height={600}
          className="rounded-xl object-cover"
        />
      </div>
    ),
  },
};

// ----------------------------------------
// Table Cell Renderer (Bold + Italic FIXED)
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
              let className = "px-0.5";

              // Strong / Em
              if (child.marks?.includes("strong")) {
                className += " font-semibold";
              }
              if (child.marks?.includes("em")) {
                className += " italic";
              }

              // Color
              const color = block.markDefs?.find(
                (m) => child.marks?.includes(m._key) && m._type === "color"
              );
              if (color) style.color = color.hex;

              const bg = block.markDefs?.find(
                (m) => child.marks?.includes(m._key) && m._type === "bgColor"
              );
              if (bg) style.backgroundColor = bg.hex;

              return (
                <span key={cIdx} style={style} className={className}>
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
// Static Params
// ----------------------------------------
export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "caseStudy"]{ slug }`);
  return slugs.map((s) => ({ slug: s.slug.current }));
}

// ----------------------------------------
// MAIN PAGE
// ----------------------------------------
export default async function CaseStudyPage({ params }) {
  const { slug } = await params;


  const caseStudy = await client.fetch(
    `*[_type == "caseStudy" && slug.current == $slug][0]{
    name,
    category->{title},
    technologies,
    sections[]{
      _type,
      heading,
      description,
      points[]{ title, description },
      image{asset->{url}},
      table{
        rows[]{
          cells[]{
            content[]{..., markDefs[]{...}}
          }
        }
      }
    }
  }`,
    { slug }
  );


  if (!caseStudy) return <div>Not found</div>;

  return (
    <>
      <Container>
        <div className="w-full">

          {/* HEADER */}
          <div className="bg-[#f5f5f5] rounded-xl px-6 lg:px-12 py-5 lg:py-10">
            <span className="text-2xl md:text-4xl lg:text-5xl md:leading-15 text-left font-extrabold text-black">
              {caseStudy.name}
            </span>
            {caseStudy.category?.title && (
              <p className="text-left font-semibold text-lg md:text-xl text-zinc-700 mt-3">
                Case Study on {caseStudy.category.title}
              </p>
            )}

            {caseStudy.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm font-medium bg-white border rounded-full px-4 py-1 text-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}


          </div>

          {/* SECTIONS */}
          <div className="py-10 lg:space-y-16">

            {caseStudy.sections?.map((sec, i) => {

              // 1️⃣ Heading + Description
              if (sec._type === "headingDescription") {
                return (
                  <section key={i} className="max-w-7xl">
                    <h3 className="text-3xl font-semibold mb-4">{sec.heading}</h3>
                    <PortableText value={sec.description} components={ptComponents} />
                  </section>
                );
              }

              // 2️⃣ Cards
              if (sec._type === "pointsCards") {
                return (
                  <section key={i} className="space-y-8 mb-8">
                    <h3 className="text-3xl  font-semibold">{sec.heading}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sec.points?.map((p, idx) => (
                        <div key={idx} className="border rounded-tl-3xl rounded-br-3xl p-6 bg-zinc-50">
                          <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                          <PortableText value={p.description} components={ptComponents} />
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              // 3️⃣ Image + Heading + Description
              if (sec._type === "fullImageWithCaption") {
                return (
                  <section key={i} className="space-y-5">
                    <h3 className="text-3xl text-center font-semibold">{sec.heading}</h3>
                    <Image
                      src={sec.image.asset.url}
                      width={1400}
                      height={800}
                      alt={sec.heading}
                      className="rounded-2xl w-full"
                    />
                    <div className="text-center">
                      <PortableText value={sec.description} components={ptComponents} />
                    </div>
                  </section>
                );
              }

              // 4️⃣ Text / Image
              if (sec._type === "textLeftImageRight" || sec._type === "textRightImageLeft") {
                const reverse = sec._type === "textRightImageLeft";
                return (
                  <section key={i} className={`flex flex-col md:flex-row gap-12 py-5 md:py-0 ${reverse ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-4">{sec.heading}</h3>
                      <PortableText value={sec.description} components={ptComponents} />
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src={sec.image.asset.url}
                        width={800}
                        height={600}
                        alt={sec.heading}
                        className="rounded-xl"
                      />
                    </div>
                  </section>
                );
              }

              // 5️⃣ Text / Table
              if (sec._type === "textLeftTableRight" || sec._type === "textRightTableLeft") {
                const reverse = sec._type === "textRightTableLeft";
                return (
                  <section key={i} className={`flex flex-col md:flex-row gap-6 lg:gap-12 py-8 lg:py-0${reverse ? "lg:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2">
                      <h3 className="text-3xl font-semibold mb-4">{sec.heading}</h3>
                      <PortableText value={sec.description} components={ptComponents} />
                    </div>
                    <div className="md:w-1/2 lg:mt-16">
                    {/* <span className="text-2xl font-semibold text-zinc-500 ">This is Table</span> */}
                      <RenderTable table={sec.table} />
                    </div>
                  </section>
                );
              }

              // 6️⃣ Table / Image
              if (sec._type === "tableLeftImageRight" || sec._type === "tableRightImageLeft") {
                const reverse = sec._type === "tableRightImageLeft";
                return (
                  <section key={i} className={`flex flex-col md:flex-row gap-12 ${reverse ? "md:flex-row-reverse" : ""}`}>
                    <div className="md:w-1/2">
                      <RenderTable table={sec.table} />
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src={sec.image.asset.url}
                        width={800}
                        height={600}
                        alt="Table Illustration"
                        className="rounded-xl"
                      />
                    </div>
                  </section>
                );
              }

              return null;
            })}
          </div>

          {/* TECHNOLOGIES */}
          {/* {caseStudy.technologies?.length > 0 && (
          <div className="bg-zinc-50 py-14 text-center">
            <h3 className="text-2xl font-semibold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {caseStudy.technologies.map((lang, i) => (
                <span key={i} className="bg-white border rounded-full px-6 py-2">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )} */}


        </div>

      </Container>
      <section className=" lg:mt-16 mb-10">
      <Container>
        <div className="w-full">

          {/* TOP ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-4">
            <div>
              <span className="block mb-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-600">
                Collaboration
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-zinc-900 leading-tight">
                Got a project?
                <br />
                Let’s talk.
              </h3>
            </div>

            <div className="flex-shrink-0">
              <button className="rounded-full bg-blue-500 px-7 py-3 text-sm sm:text-base font-bold text-white transition hover:bg-blue-600 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>

          {/* DIVIDER + DESCRIPTION */}
          <div className="border-t border-zinc-300 pt-4">
            <p className="max-w-4xl text-sm sm:text-base lg:text-lg text-zinc-600">
              We're a team of creative tech-enthusiasts who are always ready to
              help businesses unlock their digital potential.
            </p>
          </div>

        </div>
      </Container>
    </section>
    </>
  );
}
