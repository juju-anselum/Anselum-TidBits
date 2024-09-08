import { client } from "../lib/sanity";

async function getData() {
	const query = `
    *[ _type == 'blog' ] {
      _id,
      title,
      slug
    }
  `
	const data = await client.fetch(query)

	return data
}


export const Blogs = () => {
	return (
		<>
			<div>
				{/* Blog cards */}
			</div>
		</>
	);
};

export default Blogs;