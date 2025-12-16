import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "784itnbo",
  dataset: "production",
  token: "sk5YSObtVV7Rpb7OnZcO5Mlml3Gay8Ir8mFZdK0BzTKo1qphSPwCCH3SSVbFXdhwnqHpyzmmGpNQbvtIU8t77LnB3cf45rKasMYpr02rJvP1ZKHTD9TqndAEzOo6bmmFGBzEij4VEqGsdsHaGIufFZRCRCbh10smCWlHig4zxDso9za8IfJF", // needs write permission
  apiVersion: "2023-10-01",
  useCdn: false
});

async function migrate() {
  const docs = await client.fetch(`*[_type == "caseStudy"]`);

  for (const doc of docs) {
    const newSections = doc.sections?.map((sec) => {
      // Only process sections with description
      if (!sec.description) return sec;

      // Case 1: description is a STRING → convert to array block
      if (typeof sec.description === "string") {
        return {
          ...sec,
          description: [
            {
              _type: "block",
              style: "normal",
              markDefs: [],
              children: [
                { _type: "span", text: sec.description, marks: [] }
              ]
            }
          ]
        };
      }

      // Case 2: description is an array but contains strings → convert
      if (Array.isArray(sec.description)) {
        return {
          ...sec,
          description: sec.description.map((d) => {
            if (typeof d === "string") {
              return {
                _type: "block",
                style: "normal",
                markDefs: [],
                children: [
                  { _type: "span", text: d, marks: [] }
                ]
              };
            }
            return d;
          })
        };
      }

      // Case 3: invalid object → clean it
      if (typeof sec.description === "object") {
        return {
          ...sec,
          description: [
            {
              _type: "block",
              style: "normal",
              markDefs: [],
              children: [
                { _type: "span", text: "", marks: [] }
              ]
            }
          ]
        };
      }

      return sec;
    });

    // Save patched document
    await client
      .patch(doc._id)
      .set({ sections: newSections })
      .commit();
  }
}

migrate();
