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
	const imageUrl = data.image ? urlFor(data.image).url() : `https://anselum-tidbits.vercel.app/blogBanner.png`;
	return {
		title: data.title,
		description: data.smallDescription,
		openGraph: {
			title: data.title,
			description: data.smallDescription,
			url: `https://anselum-tidbits.vercel.app/blog/${data.slug}`,
			images: [
				{
					url: imageUrl,
					alt: data.title
				}
			],
		},
		twitter: {
			card: "summary_large_image",
			title: data.title,
			description: data.smallDescription,
			images: [
				{
					url: imageUrl,
					alt: data.title
				}
			],
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