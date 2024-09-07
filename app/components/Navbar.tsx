import Image from "next/image";
import { logo } from "../assets";
import Button from "./ui/Button";

export default function Navbar() {
	return (
		<div className="w-full py-6 flex items-center justify-between">
			<div className="py-2 flex items-center gap-x-2">
				<Image width={30} height={30} src={logo} alt="logo" />
				<p className="h-6 xl:h-6 text-2xl font-bold font-gluten">Anselum</p>
			</div>
			<Button text="Subscribe Now!" />
		</div>
	);
}