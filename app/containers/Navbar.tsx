import Image from "next/image";
import { logo } from "../assets";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className='w-full md:w-[95%] mx-auto px-5 md:px-0 flex flex-col items-stretch'>
			<div className="w-full py-6 flex items-center justify-between">
				<Link href='/' passHref>
					<div className="py-2 flex items-center gap-x-2 pointer-events-auto" >
						<Image width={30} height={30} src={logo} alt="logo" />
						<p className="h-6 xl:h-6 text-2xl font-bold font-gluten select-none">Anselum</p>
					</div>
				</Link>
			</div>
			<div className='w-full h-[1px] bg-gray-300' />
		</div>
	);
} 