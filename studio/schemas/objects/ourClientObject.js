export default {
  title: 'Our Client Object',
  name: 'ourClientObject',
  type: 'object',
  fields: [
    {
      title: 'Client Logo',
      name: 'clientLogo',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'clientLogo.title',
      media: 'clientLogo',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
