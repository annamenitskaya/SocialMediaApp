import { defineType, defineField } from 'sanity'

export const comment = defineType({
  type: "document",
  name: "comment",
  title: "Comment",
  fields: [
    defineField({
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    }),
    defineField({
      name: "comment",
      title: "Comment",
      type: "string",
    })
  ],
});

