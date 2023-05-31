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
      title: 'Action',
      name: 'action',
      type: 'string',
      options: {
        list: ['video', 'image'],
      },
      initialValue: 'video',
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
      title: 'Sub Text',
      name: 'subText',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Desktop Image',
      name: 'desktopImage',
      type: 'customImage',
      hidden: ({parent}) => !parent?.action || parent?.action === 'video',
    },
    {
      title: 'Mobile Image',
      name: 'mobileImage',
      type: 'customImage',
      hidden: ({parent}) => !parent?.action || parent?.action === 'video',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'url',
      description: `Add the testimnials Video Url Here`,
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      hidden: ({parent}) => !parent?.action || parent?.action === 'image',
    },
    {
      title: 'Describtion',
      name: 'describtion',
      type: 'bodyPortableText',
      validation: (Rule) => Rule.required(),
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
