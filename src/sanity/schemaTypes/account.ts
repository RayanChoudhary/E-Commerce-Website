import { defineType, defineField } from "sanity";

export const account = defineType({
  name: "account",
  title: "Account",
  type: "document",
  fields: [
    defineField({
      name: "provider",
      title: "Provider",
      type: "string",
      description: "The OAuth provider (e.g., Google, GitHub).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "providerAccountId",
      title: "Provider Account ID",
      type: "string",
      description: "The unique account ID from the provider.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      description: "The account type (e.g., OAuth, email, credentials).",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "userId",
      title: "User ID",
      type: "reference",
      to: [{ type: "user" }],
      description: "Reference to the user this account belongs to.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "accessToken",
      title: "Access Token",
      type: "string",
      description: "The access token provided by the OAuth provider.",
      hidden: true, // Hide sensitive data in the Sanity Studio
    }),
    defineField({
      name: "refreshToken",
      title: "Refresh Token",
      type: "string",
      description: "The refresh token provided by the OAuth provider.",
      hidden: true, // Hide sensitive data in the Sanity Studio
    }),
    defineField({
      name: "expiresAt",
      title: "Expires At",
      type: "datetime",
      description: "The expiration date of the access token.",
    }),
    defineField({
      name: "idToken",
      title: "ID Token",
      type: "string",
      description: "The ID token provided by the provider.",
      hidden: true, // Hide sensitive data in the Sanity Studio
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    }),
  ],
});
