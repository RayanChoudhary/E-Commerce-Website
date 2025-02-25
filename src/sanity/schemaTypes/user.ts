import { defineType, defineField } from "sanity";

export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(), // Ensure name is required
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required().email(), // Ensure email is required and valid
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "url",
      description: "URL of the user's profile picture",
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(), // Set initial value to current timestamp
    }),
  ],
});
