import { defineConfig } from "orval";

export default defineConfig({
  artists: {
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
    input: {
      target:
        "https://api.jamendo.com/v3.0/artists/?client_id=e1ba0143/openapi.json",
    },
    output: {
      workspace: "generated/artists",
      baseUrl: "/artists",
      clean: true,
      client: "react-query",
      headers: true,
      mock: false,
      mode: "tags",
      schemas: "model",
      target: "endpoints",
      override: {
        useNativeEnums: false,
      },
    },
  },
});
