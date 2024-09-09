import Image from "next/image";
import { logo } from "../assets";
import { Button } from "../components";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className='w-full flex flex-col items-stretch'>
			<div className="w-full py-6 flex items-center justify-between">
				<Link href='/' passHref>
					<div className="py-2 flex items-center gap-x-2 pointer-events-auto" >
						<Image width={30} height={30} src={logo} alt="logo" />
						<p className="h-6 xl:h-6 text-2xl font-bold font-gluten select-none">Anselum</p>
					</div>
				</Link>
				<Button text="Subscribe Now!" />
			</div>
			<div className='w-full h-[1px] bg-gray-300' />
		</div>
	);
}