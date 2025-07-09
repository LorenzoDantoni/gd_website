import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const documentType = defineType({
  name: "documento",
  title: "Documento",
  type: "document",
  icon: DocumentIcon,
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
      name: "file",
      title: "File",
      type: "file",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      federation: "federation",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { federation, publishedAt } = selection;

      return {
        ...selection,
        subtitle: `${federation} • ${
          publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"
        }`,
      };
    },
  },
});
