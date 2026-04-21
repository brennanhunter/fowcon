import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      description: 'Mark this as the featured article pinned at the top of the blog.',
      initialValue: false,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Recommended: 1200×800px (3:2 landscape). Used as the hero at the top of the post and as the card image on the blog listing. Enable the hotspot to control cropping.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt text',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the blog listing page (2–3 sentences).',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      description: 'Override the default SEO values for search engines and social sharing. Leave blank to use the post title and excerpt.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Shown in browser tabs and search results. Keep under 60 characters.',
          validation: (Rule) => Rule.max(60).warning('Over 60 characters may be truncated in search results.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          description: 'Shown in search results below the title. Keep between 140–160 characters.',
          validation: (Rule) =>
            Rule.max(160).warning('Over 160 characters may be truncated in search results.'),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Recommended: 1200×630px (1.9:1 landscape). Shown when shared on Facebook, LinkedIn, Twitter/X, iMessage, and Slack. Falls back to the Main Image if left blank, but a dedicated graphic at exactly 1200×630 gives the best result.',
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Post content. For images inserted into the body, use 1200×675px (16:9).',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text', description: 'Describe the image for accessibility and SEO.' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption', description: 'Optional caption displayed below the image.' }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'publishedAt',
    },
  },
});
