export default {
  title: 'Product Section Hero',
  name: 'productSectionHero',
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
      title: 'Catalog',
      name: 'catalog',
      type: 'file',
      fields: [
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
      ],
    },
    {
      title: 'Specification',
      name: 'specification',
      type: 'array',
      of: [
        {
          type: 'productSpecificationObject',
        },
      ],
    },
    {
      title: 'Protection Detial',
      name: 'protectionDetial',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      title: 'Protection Level',
      name: 'protectionLevel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Vehicles Images',
      name: 'vehiclesImages',
      type: 'array',
      of: [
        {
          type: 'productSliderImagesObject',
        },
      ],
    },

    {
      title: 'Vehicles Over View',
      name: 'vehiclesOverView',
      type: 'bodyPortableText',
    },
    {
      title: 'Enhancement',
      name: 'enhancement',
      type: 'bodyPortableText',
    },
    {
      title: 'Modification',
      name: 'modification',
      type: 'bodyPortableText',
    },
    {
      title: 'Make/Country',
      name: 'makeCountry',
      type: 'bodyPortableText',
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
