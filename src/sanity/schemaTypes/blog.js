const blog = {
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "writer",
      title: "Writer Name",
      type: "string",
      description: "Enter the name of the blog author",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "Select or add a new category for this blog",
      options: {
        disableNew: false, // ✅ allows adding new category directly from dropdown
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "content",
      title: "Content Blocks",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  { name: "href", title: "URL", type: "url" },
                  {
                    name: "blank",
                    title: "Open in new tab?",
                    type: "boolean",
                    initialValue: true,
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
        {
          type: "object",
          name: "section",
          title: "Section",
          fields: [
            {
              name: "heading",
              title: "Section Heading",
              type: "string",
            },
            {
              name: "description",
              title: "Section Description",
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: "Normal", value: "normal" },
                    { title: "H3", value: "h3" },
                    { title: "Quote", value: "blockquote" },
                  ],
                  lists: [
                    { title: "Bullet", value: "bullet" },
                    { title: "Numbered", value: "number" },
                  ],
                  marks: {
                    decorators: [
                      { title: "Bold", value: "strong" },
                      { title: "Italic", value: "em" },
                      { title: "Underline", value: "underline" },
                    ],
                    annotations: [
                      {
                        name: "link",
                        type: "object",
                        title: "Link",
                        fields: [
                          { name: "href", title: "URL", type: "url" },
                          {
                            name: "blank",
                            title: "Open in new tab?",
                            type: "boolean",
                            initialValue: true,
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
            },
          ],
          preview: {
            select: { title: "heading" },
            prepare({ title }) {
              return {
                title: `Section: ${title || "Untitled"}`,
              };
            },
          },
        },
        {
          type: "object",
          name: "tableBlock",
          title: "Table",
          fields: [
            {
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  title: "Row",
                  fields: [
                    {
                      name: "cells",
                      title: "Cells",
                      type: "array",
                      of: [
                        {
                          type: "object",
                          title: "Cell",
                          fields: [
                            { name: "text", title: "Text", type: "string" },
                            {
                              name: "isBold",
                              title: "Bold Text?",
                              type: "boolean",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          preview: { prepare: () => ({ title: "Custom Table Block" }) },
        },
      ],
    },
  ],
};

export default blog;
