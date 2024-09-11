import { Box, Typography } from "@mui/material";
import { blogCardInterface } from "../lib/interface";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const BlogPage = (props: blogCardInterface) => {

	return (
		<Box sx={{
			width: { xs: '95%', md: '100%' },
			height: '100%',
			marginInline: 'auto',
			padding: { xs: '12px 0px', md: '16px 0px', xl: '32px 0px' },
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'start',
			justifyContent: 'start',
			rowGap: 2,
			minHeight: '100vh'
		}}>
			<Typography variant="body1">{props.tags[0].title}</Typography>
			<Typography variant="h2" sx={{ fontSize: { xs: '42px', md: '46px', xl: '52px' }, fontWeight: '500' }}>{props.title}</Typography>
			<Box
				sx={{
					width: { sm: '100%', md: '90%' },
					height: { xs: '300px', md: '600px', xl: '700px' },
					margin: '16px auto',
					objectFit: 'cover',
					borderRadius: '8px',
					overflow: 'hidden',
				}}>
				<Image
					src={urlFor(props.image).url()}
					alt={props.title}
					width={400}
					height={300}
					quality={100}
					className="w-full h-full object-cover object-center"
				/>
			</Box>
			<div className="w-[100%] mx-auto prose md:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-li:marker:text-primary-foreground">
				<PortableText value={props.content} />
			</div>
		</Box>
	);
};

export default BlogPage;