export default {
  title: 'Hero Object',
  name: 'heroObject',
  type: 'object',
  fields: [
    {
      title: 'Is Reversed',
      name: 'isReversed',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
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
      title: 'Side Image',
      name: 'sideImage',
      type: 'customImage',
    },
    {
      title: 'Background Image',
      name: 'backgroundImage',
      type: 'customImage',
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
      title: 'heading',
      media: 'backgroundImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
