import { defineType, defineField } from 'sanity'

export const postedBy = defineType({
  type: "reference",
  name: "postedBy",
  title: "PostedBy",
  to: [{ type: 'user' }]
});

