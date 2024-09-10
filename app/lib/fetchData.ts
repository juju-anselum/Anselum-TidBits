import { client } from '../lib/sanity';
import { fetchFromFileCache, storeInFileCache } from './fileCache';
import { blogCardInterface } from './interface';

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
  const cachedData = await fetchFromFileCache();
  if (cachedData) {
    return cachedData.find((item: blogCardInterface) => item.slug === slug);
  }
  const data = await fetchBlog(slug);
  return data;
}

async function getData() {
  const cachedData = await fetchFromFileCache();
  if (cachedData) {
    console.log('Returning data from cache...');
    return cachedData;
  }

  console.log('Fetching data from remote source');
  const data = await fetchBlogs();

  await storeInFileCache(data);

  return data;
}

export { getData, getBlog, fetchBanner };
