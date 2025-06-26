type Props = {}

export const NavBar = (props: Props) => {
	return (
		<nav className='relative h-[88px]'>
			<div className='fixed top-0 z-30 w-full'>
				<div className='mx-auto w-5/6 flex-between'>
					<div className='flex-between gap-20 w-full'></div>
				</div>
			</div>
		</nav>
	)
}
