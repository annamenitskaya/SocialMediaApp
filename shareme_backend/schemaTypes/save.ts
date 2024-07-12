import { defineType, defineField } from 'sanity'

export const save = defineType({
  type: "document",
  name: "save",
  title: "Save",
  fields: [
    defineField({
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    }),
    defineField({
      name: "userId",
      title: "userId",
      type: "string",
    })
  ],
});

