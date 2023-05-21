export default {
  title: 'Intro Section',
  name: 'introSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Generic Two Column',
      name: 'genericTwoColumn',
      type: 'introObject',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'genericTwoColumn.',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
