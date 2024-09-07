import { Search } from 'lucide-react'

const ActionBar = () => {
	return (
		<div className="w-full py-6 flex items-center justify-between flex-col-reverse xl:flex-row gap-6">

			<div className='w-full flex flex-1 items-center flex-wrap justify-center xl:justify-start gap-5 overflow-x-scroll noScrollBar'>
				{
					['All Articles', 'UI/UX', 'Web Design', 'Figma', 'R3F', 'GSAP'].map((item, idx) => {
						return (
							<p key={idx} className="px-4 py-1 border border-secondary-background rounded-full text-nowrap">{item}</p>
						)
					})
				}
			</div>

			<div className='w-full lg:w-max px-5 py-3 flex items-center justify-end border border-secondary-background rounded-lg'>
				<input type="text" placeholder='Search for Tidbits' className='w-full lg:min-w-[400px] outline-none border-none' />
				<Search />
			</div>

		</div>
	)
}

export default ActionBar