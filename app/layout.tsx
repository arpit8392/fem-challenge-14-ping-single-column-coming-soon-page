import Footer from '@/components/Footer'
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
			<body className={`${libre_franklin.variable} font-sans`}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
