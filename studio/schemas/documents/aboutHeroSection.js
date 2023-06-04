export default {
  title: 'About Hero Section',
  name: 'aboutHeroSection',
  type: 'document',
  fields: [
    {
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Main Heading',
      name: 'mainHeading',
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
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
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
      title: 'identifier',
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
