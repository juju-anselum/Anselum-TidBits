import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { blogCardInterface } from '../lib/interface';
import { urlFor } from '../lib/sanity';
import { Chip, Stack } from '@mui/material';
import { format } from 'date-fns';

export default function BlogCard(props: blogCardInterface) {
	const isoDateString = props._createdAt;
	const date = new Date(isoDateString);
	const formattedDate = format(date, 'MMMM dd, yyyy');

	return (
		<Card
			sx={{
				maxWidth: 475,
				margin: '0 auto',
				borderRadius: '8px',
				'&:hover': {
					boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05)',
					transition: 'box-shadow 0.3s ease-in-out', bgcolor: 'transparent'
				},
				border: '1px solid rgba(0, 0, 0, 0.05)'
			}}
			elevation={0}
		>
			<CardActionArea sx={{ padding: { xs: '16px', md: '12px' } }} disableRipple>
				<CardMedia
					component="img"
					height="140"
					image={urlFor(props.image).url()}
					alt="green iguana"
					sx={{ width: '100%', height: { xs: '250px', md: '275px' }, objectFit: 'cover', borderRadius: '8px' }}
				/>
				<CardContent sx={{ paddingInline: '0px' }}>
					<Stack direction="row" justifyContent="space-between" alignItems="center" gap={1} sx={{ marginBottom: '12px' }}>
						<Chip variant='outlined' label={props.tags[0].title} />
						<Typography variant="body2" color="text.secondary">
							{formattedDate}
						</Typography>
					</Stack>
					<Typography gutterBottom variant="h5" component="div" sx={{
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
					<Typography variant="body2" sx={{
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
	);
}
