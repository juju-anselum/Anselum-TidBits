import { BlogCard } from "../components";
import { Grid2 } from "@mui/material";
import { blogCardInterface } from "../lib/interface";
import { getData } from "../lib/fetchData";
import Link from "next/link";

export const Blogs = async () => {
	const data: blogCardInterface[] = await getData()
	const duplicateData = (data.concat(data)).concat(data)

	return (
		<div className="w-full my-10">
			<Grid2 container spacing={4} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} sx={{ width: '100%' }}>
				{
					duplicateData.map((item, idx) => {
						return (
							<Grid2 key={idx} size={{ xs: 4, sm: 4, md: 4, xl: 4 }}>
								<Link href={`/blog/${item.slug}`} passHref>
									<BlogCard {...item} />
								</Link>
							</Grid2>
						)
					})
				}
			</Grid2>
		</div>
	);
};


export default Blogs;