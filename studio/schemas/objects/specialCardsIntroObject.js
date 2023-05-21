export default {
  title: 'Special Cards Intro Object',
  name: 'specialCardsIntroObject',
  type: 'object',
  fields: [
    {
     title: 'Slug',
     description: 'Exclude leading and trailing backslashes',
     name: 'slug',
     type: 'slug',
     validation: (Rule) => Rule.required(),
     options: {
       source: 'title',
     },
   },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'image',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}