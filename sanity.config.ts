import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "default",
  title: "portfolio",

  projectId: "sh3av32t",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
