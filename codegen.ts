import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      ["http://localhost:8000/api/graphql"]: {},
    },
  ],
  config: {
    scalars: {
      DateTime: "string",
      Date: "string",
    },
  },
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
        // Disable fragment masking to allow typescript types with fragments: https://github.com/dotansimha/graphql-code-generator/discussions/8859#discussioncomment-4891291
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
