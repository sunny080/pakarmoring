export default {
  title: 'Our Mission Section',
  name: 'ourMissionSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Cards',
      name: 'cards',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'ourMissionObject'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mobileImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
