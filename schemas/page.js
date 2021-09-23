export default {
  title: "Page",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
      },
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 6,
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
