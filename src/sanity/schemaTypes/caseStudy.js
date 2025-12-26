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
  name: 'technologies',
  title: 'Technologies Used',
  type: 'array',
  of: [{ type: 'string' }],
  options: {
    layout: 'tags'
  },
  validation: (Rule) =>
    Rule.unique().min(1).error('Add at least one technology')
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

    // 1️⃣ Heading + Description
    {
      type: 'object',
      name: 'headingDescription',
      title: 'Heading + Description',
      fields: [
        { name: 'heading', type: 'string' },
        {
          name: 'description',
          type: 'array',
          of: [{
            type: 'block',
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
              ],
             annotations: [
  {
    name: 'link',
    type: 'object',
    title: 'Link',
    fields: [
      {
        name: 'href',
        type: 'url',
        title: 'URL'
      }
    ]
  }
]

            }
          }]
        }
      ]
    },

    // 2️⃣ Points Cards
    {
      type: 'object',
      name: 'pointsCards',
      title: 'Points Cards',
      fields: [
        { name: 'heading', type: 'string' },
        {
          name: 'points',
          type: 'array',
          of: [{
            type: 'object',
            fields: [
              { name: 'title', type: 'string' },
              {
                name: 'description',
                type: 'array',
                of: [{
                  type: 'block',
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' }
                    ],
                    annotations: []
                  }
                }]
              }
            ],
            preview: {
              select: { title: 'title' }
            }
          }]
        }
      ]
    },

    // 3️⃣ Image + Heading + Description
    {
      type: 'object',
      name: 'fullImageWithCaption',
      title: 'Image with Heading & Description',
      fields: [
        { name: 'heading', type: 'string' },
        { name: 'image', type: 'image', options: { hotspot: true } },
        {
          name: 'description',
          type: 'array',
          of: [{
            type: 'block',
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' }
              ],
              annotations: []
            }
          }]
        }
      ]
    },

    // 4️⃣ Text Left – Image Right
    {
      type: 'object',
      name: 'textLeftImageRight',
      fields: [
        { name: 'heading', type: 'string' },
        {
          name: 'description',
          type: 'array',
          of: [{ type: 'block', marks: { annotations: [] } }]
        },
        { name: 'image', type: 'image' }
      ]
    },

    // 5️⃣ Text Right – Image Left
    {
      type: 'object',
      name: 'textRightImageLeft',
      fields: [
        { name: 'image', type: 'image' },
        { name: 'heading', type: 'string' },
        {
          name: 'description',
          type: 'array',
          of: [{ type: 'block', marks: { annotations: [] } }]
        }
      ]
    },

    // 6️⃣ Text Left – Table Right
    {
      type: 'object',
      name: 'textLeftTableRight',
      fields: [
        { name: 'heading', type: 'string' },
        {
          name: 'description',
          type: 'array',
          of: [{ type: 'block', marks: { annotations: [] } }]
        },
        { name: 'table', type: 'styledTable' }
      ]
    },

    // 7️⃣ Text Right – Table Left
    {
      type: 'object',
      name: 'textRightTableLeft',
      fields: [
        { name: 'table', type: 'styledTable' },
        { name: 'heading', type: 'string' },
        {
          name: 'description',
          type: 'array',
          of: [{ type: 'block', marks: { annotations: [] } }]
        }
      ]
    },

    // 8️⃣ Table Left – Image Right
    {
      type: 'object',
      name: 'tableLeftImageRight',
      fields: [
        { name: 'table', type: 'styledTable' },
        { name: 'image', type: 'image' }
      ]
    },

    // 9️⃣ Table Right – Image Left
    {
      type: 'object',
      name: 'tableRightImageLeft',
      fields: [
        { name: 'image', type: 'image' },
        { name: 'table', type: 'styledTable' }
      ]
    }
  ]
}


  ]
};
