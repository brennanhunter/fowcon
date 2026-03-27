import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { fowconTheme } from './sanity/lib/theme';

export default defineConfig({
  name: 'fowcon-construction',
  title: 'Fowcon Construction',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  theme: fowconTheme,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: 'v2023-05-03' }),
  ],
  schema: {
    types: schemaTypes,
  },
});
