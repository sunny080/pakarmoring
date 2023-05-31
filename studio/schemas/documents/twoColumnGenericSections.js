export default {
  title: 'Two Column Generic Sections',
  name: 'twoColumnGenericSections',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    },
    {
      title: 'Generic Sections',
      name: 'genericSections',
      type: 'genericSectionFields',
      validation: (Rule) => Rule.required(),
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
