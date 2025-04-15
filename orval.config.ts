import { defineConfig } from "orval";
import path from "node:path";

export default defineConfig({
  auth: {
    hooks: {
      afterAllFilesWrite: "prettier --write",
    },
    input: {
      target: "https://api.jamendo.com/v3.0/artists/?client_id=e1ba0143",
    },
    output: {
      workspace: "generated/auth",
      baseUrl: "/auth",
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
