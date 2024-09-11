import { client } from '../lib/sanity';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 300 });

async function fetchBlogs() {
  const query = `
    *[_type == 'blog']{
      _id,
      title,
      'slug': slug.current,
      'image': image.asset._ref,
      readTime,
      _createdAt,
      tags[]->{
        title,
        'slug': slug.current
      },
      smallDescription,
      content
    }
  `;
  return await client.fetch(query);
}

async function fetchBlog(slug: string) {
  const query = `
    *[_type == 'blog' && slug.current == "${slug}"]{
      _id,
      title,
      'slug': slug.current,
      'image': image.asset._ref,
      readTime,
      _createdAt,
      tags[]->{
        title,
        'slug': slug.current
      },
      smallDescription,
      content
    }
  `;
  return await client.fetch(query);
}

async function fetchBanner() {
  const query = `
    *[_type == 'banner']{
        blog->{
          _id,
          title,
          'slug': slug.current,
          'image': image.asset._ref,
          smallDescription,
          readTime,
          _createdAt,
          tags[]->{
            title,
            'slug': slug.current
          },
          content
        }
      }
  `;
  return await client.fetch(query);
}

async function getBlog(slug: string) {
  const cacheKey = `blog_${slug}`;
  const cachedData = cache.get(cacheKey);

  if (cachedData)
    return cachedData;

  const data = await fetchBlog(slug);

  cache.set(cacheKey, data);
  return data;
}

async function getData() {
  const cacheKey = 'allBlogs';
  const cachedData = cache.get(cacheKey);

  if (cachedData)
    return cachedData;

  const data = await fetchBlogs();

  cache.set(cacheKey, data);
  return data;
}

export { getData, getBlog, fetchBanner };
