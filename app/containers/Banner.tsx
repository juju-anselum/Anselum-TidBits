import Link from "next/link";
import { blogCardInterface } from "../lib/interface";
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import { urlFor } from "../lib/sanity";
import { format } from "date-fns";

const Banner = (props: blogCardInterface) => {
	const isoDateString = props._createdAt;
	const date = new Date(isoDateString);
	const formattedDate = format(date, 'MMMM dd, yyyy');

	return (
		<>
			<Link href={`/blog/${props.slug}`} passHref>
				<Box sx={{
					width: { xs: '95%', md: '100%' },
					margin: { xs: '16px auto', md: '32px auto' },
				}}>
					<Typography variant="h3" sx={{ marginBottom: '16px' }}>
						Featured Posts
					</Typography>
					<Card
						sx={{
							padding: { xs: '10px', md: '16px' },
							borderRadius: '8px',
							'&:hover': {
								boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05)',
								transition: 'box-shadow 0.3s ease-in-out', bgcolor: 'transparent'
							},
							border: '1px solid gray'
						}}
						elevation={0}
					>
						<CardActionArea sx={{
							width: '100%',
							padding: { xs: '16px', md: '12px' },
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: { xs: 'column', md: 'row' },
							gap: { xs: 2, md: 4, lg: 10 },
						}}
							disableRipple
						>
							<CardMedia
								component="img"
								height="140"
								image={urlFor(props.image).url()}
								alt="green iguana"
								sx={{ width: { xs: '100%', md: '50%', lg: '50%' }, height: { xs: '300px', md: '350px' }, objectFit: 'cover', borderRadius: '8px' }}
							/>
							<CardContent sx={{ paddingInline: '0px' }}>
								<Stack direction="row" justifyContent="space-between" alignItems="center" gap={1} sx={{ marginBottom: { xs: '16px', md: '24px' } }}>
									<Chip variant='outlined' label={props.tags[0].title} />
									<Typography variant="body2" color="text.secondary">
										{formattedDate}
									</Typography>
								</Stack>
								<Typography gutterBottom variant="h3" component="div" sx={{
									color: 'text.primary',
									fontWeight: '500',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: '1',
									WebkitBoxOrient: 'vertical',
								}}>
									{props.title}
								</Typography>
								<Typography variant="body1" sx={{
									color: 'text.secondary',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: '2',
									WebkitBoxOrient: 'vertical',
								}}>
									{props.smallDescription}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Box>
			</Link>
		</>
	);
};

export default Banner;