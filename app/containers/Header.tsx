import { Navbar, ActionBar } from '../components'

const Header = () => {
	return (
		<div className='w-full flex flex-col items-stretch md:gap-y-3'>
			<Navbar />
			<div className='w-full h-[1px] bg-gray-300' />
			<h1 className='py-3 md:py-0 text-[10.5vw] lg:text-[12vw] 2xl:text-[160px] text-center font-normal font-blackOpsOne text-primary-background text-nowrap'>Anselum Tidbits</h1>
			<div className='w-full h-[1px] bg-gray-300' />
			<ActionBar />
		</div>
	)
}

export default Header