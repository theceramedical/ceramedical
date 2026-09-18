import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      defaultValue: 'editor',
      options: [
        { label: 'Content editor', value: 'editor' },
        { label: 'Content and clinical approver', value: 'approver' },
        { label: 'Administrator', value: 'administrator' },
      ],
      required: true,
    },
  ],
}
