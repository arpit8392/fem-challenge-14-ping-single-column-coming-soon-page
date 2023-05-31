import { socialLinks } from '@/socialLinksData'

const Footer = () => {
	return (
		<footer className='flex flex-col items-center space-y-8'>
			<div className='flex flex-row space-x-3'>
				{socialLinks.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className='footer-container group'>
						<span className='sr-only'>{item.name}</span>
						<item.icon
							className='fill-blue group-hover:fill-white'
							aria-hidden='true'
							focusable='false'
						/>
					</a>
				))}
			</div>
			<p className='text-xs font-light text-gray'>
				© Copyright Ping. All rights reserved.
			</p>
		</footer>
	)
}
export default Footer
