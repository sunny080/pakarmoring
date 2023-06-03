export default {
  title: 'Armored Vehicle Pages',
  name: 'armoredVehiclePages',
  type: 'document',
  fields: [
    {
      title: 'SEO Title',
      name: 'seoTitle',
      type: 'string',
    },
    {
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
    },
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
      title: 'Indexed',
      name: 'isIndexed',
      type: 'boolean',
      initialValue: true,
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
    {
      title: 'Is Feautred',
      name: 'isFeautred',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        {
          title: 'Product Section Hero',
          name: 'productSectionHero',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'productSectionHero'}],
        },
        {
          title: 'Featured Cars Section',
          name: 'featuredCarsSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'featuredCarsSection'}],
        },
        {
          title: 'Our Client Section',
          name: 'ourClientSection',
          type: 'reference',
          validation: (Rule) => Rule.required(),
          options: {
            disableNew: true,
          },
          to: [{type: 'ourClientSection'}],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
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
