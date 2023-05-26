export default {
  title: 'Mini Hero Section',
  name: 'miniHeroSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
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
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
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
    {
      title: 'Background Desktop Image',
      name: 'backgroundDesktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Background Mobile Image',
      name: 'backgroundMobileImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'identifier',
      media: 'backgroundMobileImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
