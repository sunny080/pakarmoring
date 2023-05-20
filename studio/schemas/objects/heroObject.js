export default {
  title: 'Hero Object',
  name: 'heroObject',
  type: 'object',
  fields: [
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      options: {
        list: ['left', 'right', 'top', 'bottom'],
      },
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Button',
      name: 'button',
      type: 'button',
      of: [
        {
          type: 'button',
        },
      ],
    },
  ],
  preview: {
    select: {
      questionText: 'questionText',
    },
    prepare({questionText = 'No title'}) {
      return {
        title: questionText,
      }
    },
  },
}
