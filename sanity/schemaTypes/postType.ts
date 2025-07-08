import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "federation",
      title: "Federation/Body",
      type: "string",
      options: {
        list: [
          { title: "Regionale", value: "Regionale" },
          { title: "Udine", value: "Udine" },
          { title: "Gorizia", value: "Gorizia" },
          { title: "Pordenone", value: "Pordenone" },
          { title: "Trieste", value: "Trieste" },
          { title: "Commissione di Garanzia", value: "Comm. Garanzia" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Data",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      initialValue: () => new Date().toLocaleDateString(),

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      federation: "federation",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { federation, publishedAt } = selection;
      const federationLabel = federation
        ? federation.charAt(0).toUpperCase() + federation.slice(1)
        : "";

      return {
        ...selection,
        subtitle: `${federationLabel} • ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"}`,
      };
    },
  },
});
