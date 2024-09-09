import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { logo } from "../assets";

const Footer = () => {
	return (
		<div className="w-[100%] md:w-[90%] min-h-[50vh] mt-5 lg:mt-20 mx-auto px-5 md:p-10 py-10 md:pt-20 rounded-t-3xl bg-primary-background">
			<Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'} gap={{ xs: 6, md: 10, lg: 20 }}>

				<Stack sx={{ maxWidth: { xs: '100%', md: '50%' } }} gap={2}>
					<Link href='/' passHref>
						<div className="py-2 flex items-center gap-x-2 pointer-events-auto" >
							<Image width={30} height={30} src={logo} alt="logo" />
							<p className="h-6 xl:h-6 text-2xl font-bold font-gluten select-none text-white">Anselum</p>
						</div>
					</Link>
					<Typography sx={{ width: { xs: '100%', md: '70%' }, color: 'gray', letterSpacing: '0.9px', lineHeight: '1.6' }}>
						Exploring ideas, sharing insights, and celebrating creativity one post at a time. Stay tuned for the latest updates and join the conversation!
					</Typography>
				</Stack>
				<Stack sx={{ maxWidth: { xs: '100%', md: '50%' } }} gap={2}>
					<Typography variant="subtitle1" sx={{ color: 'gray', letterSpacing: '0.9px', lineHeight: '1.6' }}>
						Subscribe to our newsletter
					</Typography>
					<Typography variant="h4" sx={{ color: 'white', letterSpacing: '0.9px', lineHeight: '1.6', fontWeight: '300', fontFamily: 'Arial', fontSize: { xs: '20px', md: '24px' } }}>
						Join a growing community for updates on the latest trends.
					</Typography>
					<div className='w-full lg:w-max p-2 flex items-center justify-start gap-5 border border-secondary-background rounded-full'>
						<input type="text" placeholder='Enter your email' className='w-full min-w-[150px] md:min-w-[300px] px-5 outline-none border-none bg-transparent text-primary-background' />
						<button className="py-2 px-6 bg-primary-foreground text-white text-sm rounded-full transition-all hover:scale-105">Subscribe</button>
					</div>
				</Stack>

			</Stack>
			<div className='w-full flex flex-col items-stretch md:gap-y-3 mt-10 relative'>
				<p className="absolute text-gray-500 text-sm right-5 top-5">@ 2024</p>
				<div className='w-full h-[1px] bg-gray-300' />
				<h1 className='pt-12 md:py-0 text-[9vw]  2xl:text-[140px] text-center font-light font-blackOpsOne text-secondary-background text-nowrap'>Anselum Tidbits</h1>
			</div>
		</div>
	);
};

export default Footer;