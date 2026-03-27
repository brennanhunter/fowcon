import { groq } from 'next-sanity';

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    featured,
    categories[]->{ _id, title }
  }
`;

export const featuredPostQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    categories[]->{ _id, title }
  }
`;

export const nonFeaturedPostsQuery = groq`
  *[_type == "post" && featured != true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    categories[]->{ _id, title }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt,
    categories[]->{ _id, title },
    body,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`;
