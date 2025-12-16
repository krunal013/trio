export const richCell = {
  name: 'richCell',
  title: 'Cell',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Bold', value: 'strong' },
            { title: 'Italic', value: 'em' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'color',
                title: 'Text Color',
                type: 'object',
                fields: [
                  { name: 'hex', title: 'Hex Color', type: 'string' }
                ],
              },
              {
                name: 'bgColor',
                title: 'Background Color',
                type: 'object',
                fields: [
                  { name: 'hex', title: 'Hex Color', type: 'string' }
                ],
              },
            ],
          },
        },
      ],
    },
  ],
  preview: {
    select: { content: 'content' },
    prepare({ content }) {
      return {
        title: content?.[0]?.children?.[0]?.text || 'Cell',
      };
    },
  },
};

export const styledTable = {
  name: 'styledTable',
  title: 'Styled Table',
  type: 'object',
  fields: [
    {
      name: 'rows',
      title: 'Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'row',
          title: 'Row',
          fields: [
            {
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [{ type: 'richCell' }],
            },
          ],
        },
      ],
    },
  ],
};
