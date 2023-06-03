import './globals.css'
import { Libre_Franklin } from 'next/font/google'

const libre_franklin = Libre_Franklin({
	subsets: ['latin'],
	variable: '--font-libre-franklin',
})

export const metadata = {
	title: 'Ping Single Column Coming Soon Page',
	description:
		'Frontend Mentor Challenge | Ping Single Column Coming Soon Page | Developed by Next JS, Tailwind CSS, Typescript, React Hook Form and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={`${libre_franklin.variable} px-9 py-20 font-sans `}>
				<header className='flex justify-center pb-8 md:pb-10'>
					<img
						src='/images/logo.svg'
						alt='Ping Company Logo'
						className='w-14 md:w-24'
					/>
				</header>
				{children}
			</body>
		</html>
	)
}
