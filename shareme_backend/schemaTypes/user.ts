import { defineType, defineField } from 'sanity'

export const user = defineType({
    type: "document",
    name: "user",
    title: "User",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "userId",
            title: "userId",
            type: "string",
        })
    ],
});

