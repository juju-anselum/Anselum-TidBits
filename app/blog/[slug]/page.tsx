import { BlogPage } from "@/app/containers";
import { getBlog } from "@/app/lib/fetchData";
import { blogCardInterface } from "@/app/lib/interface";

interface Props {
	params: {
		slug: string;
	};
}

const Blog = async (props: Props) => {
	const data: blogCardInterface = await getBlog(props.params.slug).then(res => res[0]);
	console.log(data)

	return (
		<>
			<BlogPage {...data} />
		</>
	);
};

export default Blog;