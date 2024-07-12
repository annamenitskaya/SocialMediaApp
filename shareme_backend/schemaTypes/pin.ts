import { defineType, defineField, defineArrayMember } from 'sanity'

export const pin = defineType({
  name: 'pin',
  title: 'Pin',
  type: "document",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: 'string',
    }),
    defineField({
      name: "about",
      title: "About",
      type: 'string',
    }),
    defineField({
      name: "destination",
      title: "Destination",
      type: 'url',
    }),
    defineField({
      name: "category",
      title: "Category",
      type: 'string',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "userID",
      title: "UserID",
      type: 'string',
    }),
    defineField({
      name: "postedBy",
      title: "Posted By",
      type: 'postedBy',
    }),
    defineField({
      name: "save",
      title: "Save",
      type: 'array',
      of: [{ type: 'save' }]
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: 'array',
      of: [{ type: 'comment' }]
    }),
  ],
});

