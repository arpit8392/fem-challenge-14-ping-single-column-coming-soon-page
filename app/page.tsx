import Footer from '@/components/Footer'
import InputForm from '@/components/InputForm'

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
			<img
				src='/images/illustration-dashboard.png'
				alt='illustration dashboard'
				className='py-16 md:w-1/2 md:py-24'
			/>

			<Footer />
		</main>
	)
}
