export default {
  title: 'Technology Section',
  name: 'technologySection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'genericSectionFields'}],
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'genericSections.mobileImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
