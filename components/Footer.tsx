import { socialLinks } from '@/socialLinksData'

const Footer = () => {
	return (
		<footer className='flex flex-col items-center gap-y-8 content-end'>
			<ul className='flex flex-row gap-x-3'>
				{socialLinks.map((item) => (
					<li key={item.name}>
						<a href={item.href} className='footer-container group'>
							<span className='sr-only'>{item.name}</span>
							<item.icon
								className=' fill-blue group-hover:fill-white'
								aria-hidden='true'
								focusable='false'
							/>
						</a>
					</li>
				))}
			</ul>
			<p className='text-xs font-light text-gray'>
				© Copyright Ping. All rights reserved.
			</p>
		</footer>
	)
}
export default Footer
