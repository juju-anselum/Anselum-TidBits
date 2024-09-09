import { BlogPage } from "@/app/containers";
import { getBlog } from "@/app/lib/fetchData";
import { blogCardInterface } from "@/app/lib/interface";

interface Props {
	params: {
		slug: string;
	};
}

const Blog = async (props: Props) => {
	const data: blogCardInterface = await getBlog(props.params.slug);
	return (
		<>
			<BlogPage {...data} />
		</>
	);
};

export default Blog;