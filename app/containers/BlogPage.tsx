import { Box, Typography } from "@mui/material";
import { blogCardInterface } from "../lib/interface";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const BlogPage = (props: blogCardInterface) => {
	return (
		<Box sx={{ width: '90%', height: '100%', marginInline: 'auto', padding: { xs: '12px 0px', md: '16px 0px', xl: '32px 0px' }, display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', rowGap: 4, minHeight: '100vh' }}>
			<Typography variant="h5">{props.tags[0].title}</Typography>
			<Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '32px', xl: '48px' }, fontWeight: '500' }}>{props.title}</Typography>
			<Box
				sx={{
					width: { sm: '100%', md: '90%' },
					height: { xs: '300px', md: '500px', xl: '700px' },
					marginInline: 'auto',
					objectFit: 'cover',
					borderRadius: '8px',
					// borderTopRightRadius: { sm: '8px', md: '92px', lg: '112px ', xl: '200px' },
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