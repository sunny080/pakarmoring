export default {
  title: 'Ballistic Protection Object',
  name: 'ballisticProtectionObject',
  type: 'object',
  fields: [
    {
      title: 'Protection',
      name: 'protection',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Caliber',
      name: 'caliber',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Ammunition',
      name: 'ammunition',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Mass (g)',
      name: 'mass',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Test Range (m)',
      name: 'testRange',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Bullet Velocity (m.s)',
      name: 'bulletVelocity',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: '# of Strikes',
      name: 'strikes',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Weapon Image',
      name: 'weaponImage',
      type: 'customImage',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'caliber',
      media: 'weaponImage',
    },
    prepare({title = 'No title', media}) {
      return {
        title,
        media,
      }
    },
  },
}
