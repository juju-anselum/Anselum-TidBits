import { BlogPage } from "@/app/containers";
import { getBlog } from "@/app/lib/fetchData";
import { blogCardInterface } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: Props) {
	const data = await getBlog(params.slug).then(res => res[0]);
	return {
		title: data.title,
		description: data.smallDescription,
		openGraphs: {
			title: data.title,
			description: data.smallDescription,
			url: `https://anselum-tidbits.vercel.app/blog/${data.slug}`,
			image: urlFor(data.image).url() || `https://anselum-tidbits.vercel.app/blogBanner.png`,
		},
		twitter: {
			card: "summary_large_image",
			title: data.title,
			description: data.smallDescription,
			image: urlFor(data.image).url() || `https://anselum-tidbits.vercel.app/blogBanner.png`,
		}
	}
}

const Blog = async (props: Props) => {
	const data: blogCardInterface = await getBlog(props.params.slug).then(res => res[0]);

	return (
		<>
			<BlogPage {...data} />
		</>
	);
};

export default Blog;