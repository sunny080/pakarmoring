export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((label) => (label === undefined ? 'This field must not be empty.' : true)),
    },
    {
      title: 'Variant',
      name: 'variant',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
          {title: 'tertiary', value: 'tertiary'},
          {title: 'Text-link', value: 'text-link'},
        ],
      },
    },
    {
      title: 'Action',
      name: 'action',
      type: 'string',
      validation: (Rule) =>
        Rule.custom((variant) => (variant === undefined ? 'This field must not be empty.' : true)),
      options: {
        list: ['link', 'form'],
      },
    },
    {
      title: 'Link',
      name: 'slug',
      type: 'slug',
      options: {
        isUnique: () => true,
      },
      validation: (Rule) =>
        Rule.custom((slug, {parent}) => {
          if (!slug && parent.action === 'link') {
            return 'slug is required'
          }
          return true
        }),
      // validation: (Rule) => Rule.required().custom((_, { parent }) => parent.action === "link" && false),
      hidden: ({parent}) => !parent?.action || parent?.action === 'form',
    },
    {
      title: 'Form',
      name: 'form',
      type: 'string',
      options: {
        list: ['Contact Us', 'Lead Form'],
      },
      validation: (Rule) =>
        Rule.custom((form, {parent}) => {
          if (!form && parent.action === 'form') {
            return 'slug type is required'
          }
          return true
        }),
      hidden: ({parent}) => !parent?.action || parent?.action === 'link',
    },
  ],
  preview: {
    select: {
      label: 'label',
      slug: 'slug',
    },
    prepare({label = 'No Label', slug = {}}) {
      return {
        title: label,
        slug: `/${slug.current}/`,
      }
    },
  },
}
