import { MetadataRoute } from 'next';

export const revalidate = 60;
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fasilm.vercel.app'; // ❗️ Replace with your actual domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Add more URLs here if you add a blog or other pages
  ];
}