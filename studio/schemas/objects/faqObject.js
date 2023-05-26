export default {
  title: 'Faq Object',
  name: 'faqObject',
  type: 'object',
  fields: [
    {
      title: 'Question',
      name: 'questionText',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Answer',
      name: 'answer',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'questionText',
    },
    prepare({title = 'No title'}) {
      return {
        title,
      }
    },
  },
}
