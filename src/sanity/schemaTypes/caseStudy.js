export default {
  name: 'caseStudy',
  title: 'Case Studies',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Case Study Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required()
    },

    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'caseStudyCategory' }],
      validation: (Rule) => Rule.required()
    },

    {
      name: 'languages',
      title: 'Languages Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' }
    },

    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },

    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: (Rule) => Rule.required()
    },

    // -------------------------------------------------------------
    // ⭐ SECTIONS
    // -------------------------------------------------------------
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        // ⭐ 1 — Full Width Description Section
        {
          type: 'object',
          name: 'fullWidthDescription',
          title: 'Full Width Description Section',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }]  // FIXED
            }
          ],
          preview: { select: { title: 'heading' } }
        },

        // ⭐ 2 — Description + Table
        {
          type: 'object',
          name: 'descriptionTable',
          title: 'Side by Side: Description + Table',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }]  // FIXED
            },
            { name: 'table', title: 'Table', type: 'styledTable' }
          ],
          preview: { select: { title: 'heading' } }
        },

        // ⭐ 3 — Side-by-Side Text + Image
        {
          type: 'object',
          name: 'textImageSection',
          title: 'Side-by-Side: Text + Image',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            {
              name: 'description',
              title: 'Description',
              type: 'array',
              of: [{ type: 'block' }]  // FIXED
            },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
          ],
          preview: { select: { title: 'heading', media: 'image' } }
        },

        // ⭐ 4 — Side-by-Side Table + Image
        {
          type: 'object',
          name: 'tableImageSection',
          title: 'Side-by-Side: Table + Image',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'table', title: 'Table', type: 'styledTable' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
          ],
          preview: { select: { title: 'heading', media: 'image' } }
        },

        // ⭐ 5 — Full Width Table
        {
          type: 'object',
          name: 'fullTableSection',
          title: 'Full Width Table Section',
          fields: [
            { name: 'heading', title: 'Heading', type: 'string' },
            { name: 'table', title: 'Table', type: 'styledTable' }
          ],
          preview: { select: { title: 'heading' } }
        }
      ]
    }
  ]
};
