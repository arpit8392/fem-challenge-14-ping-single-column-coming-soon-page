import Footer from '@/components/Footer'
import InputForm from '@/components/InputForm'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='grid min-h-screen grid-cols-1 justify-items-center gap-y-8 text-center md:gap-y-10'>
			<div className='flex flex-col gap-y-4'>
				<h1 className='text-2xl font-light text-gray md:text-5xl'>
					We are launching{' '}
					<span className='font-bold text-veryDarkBlue'>soon!</span>
				</h1>
				<p className='text-xs font-light text-veryDarkBlue md:text-xl'>
					Subscribe and get notified
				</p>
			</div>

			<InputForm />
			<div className='py-16 md:py-24'>
				<Image
					src='/images/illustration-dashboard.png'
					alt='illustration dashboard'
					width={640}
					height={383}
					className='hidden md:block'
				/>
				<Image
					src='/images/illustration-dashboard.png'
					alt='illustration dashboard'
					width={320}
					height={192}
					className='block md:hidden'
				/>
			</div>

			<Footer />
		</main>
	)
}
