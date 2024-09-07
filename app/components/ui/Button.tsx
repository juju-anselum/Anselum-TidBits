const Button = ({ text }: { text: string }) => {
	return (
		<button className="py-2 px-6 bg-primary-background text-white text-sm rounded-full transition-all hover:scale-105">{text}</button>
	)
}

export default Button