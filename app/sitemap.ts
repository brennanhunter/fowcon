import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fowconinc.com';

  // Priority pages - kitchen & bathroom remodeling
  const priorityPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/construction/remodeling`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/construction/remodeling/kitchens`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/construction/remodeling/bathrooms`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ];

  // Other construction/remodeling pages
  const constructionPages = [
    'construction/remodeling/flooring',
    'construction/remodeling/interiors',
    'construction/additions',
    'construction/adu',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Mitigation pages
  const mitigationPages = [
    'mitigation/water',
    'mitigation/fire-smoke',
    'mitigation/mold',
    'mitigation/storm-wind',
    'mitigation/prevention-programs',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // About & informational pages
  const aboutPages = [
    'about/story',
    'about/leadership',
    'about/service-area',
    'about/faqs',
    'about/careers',
    'contact',
    'blog',
    'design-style-quiz',
  ].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...priorityPages, ...constructionPages, ...mitigationPages, ...aboutPages];
}
