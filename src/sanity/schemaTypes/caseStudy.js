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

    // 1️⃣ Only Heading + Description
    {
      type: 'object',
      name: 'headingDescription',
      title: 'Heading + Description',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ],
      preview: { select: { title: 'heading' } }
    },

    // 2️⃣ Points with Descriptions (Cards)
    {
      type: 'object',
      name: 'pointsCards',
      title: 'Points with Descriptions (Cards)',
      fields: [
        { name: 'heading', title: 'Section Heading', type: 'string' },
        {
          name: 'points',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'array',
                  of: [{ type: 'block' }]
                }
              ]
            }
          ]
        }
      ],
      preview: { select: { title: 'heading' } }
    },

    // 3️⃣ Full Width Image + Description at Bottom
    {
      type: 'object',
      name: 'fullImageWithCaption',
      title: 'Full Width Image + Description',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        {
          name: 'caption',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ],
      preview: { select: { media: 'image' } }
    },

    // 4️⃣ Text Left ~ Image Right
    {
      type: 'object',
      name: 'textLeftImageRight',
      title: 'Text Left – Image Right',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
      ],
      preview: { select: { title: 'heading', media: 'image' } }
    },

    // 5️⃣ Text Right ~ Image Left
    {
      type: 'object',
      name: 'textRightImageLeft',
      title: 'Text Right – Image Left',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ],
      preview: { select: { title: 'heading', media: 'image' } }
    },

    // 6️⃣ Text Left ~ Table Right
    {
      type: 'object',
      name: 'textLeftTableRight',
      title: 'Text Left – Table Right',
      fields: [
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        },
        { name: 'table', title: 'Table', type: 'styledTable' }
      ],
      preview: { select: { title: 'heading' } }
    },

    // 7️⃣ Text Right ~ Table Left
    {
      type: 'object',
      name: 'textRightTableLeft',
      title: 'Text Right – Table Left',
      fields: [
        { name: 'table', title: 'Table', type: 'styledTable' },
        { name: 'heading', title: 'Heading', type: 'string' },
        {
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'block' }]
        }
      ],
      preview: { select: { title: 'heading' } }
    },

    // 8️⃣ Table Left ~ Image Right
    {
      type: 'object',
      name: 'tableLeftImageRight',
      title: 'Table Left – Image Right',
      fields: [
        { name: 'table', title: 'Table', type: 'styledTable' },
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }
      ],
      preview: { select: { media: 'image' } }
    },

    // 9️⃣ Table Right ~ Image Left
    {
      type: 'object',
      name: 'tableRightImageLeft',
      title: 'Table Right – Image Left',
      fields: [
        { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
        { name: 'table', title: 'Table', type: 'styledTable' }
      ],
      preview: { select: { media: 'image' } }
    }
  ]
}

  ]
};
