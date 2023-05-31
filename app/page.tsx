import Footer from '@/components/Footer'
import InputForm from '@/components/InputForm'

export default function Home() {
	return (
		<main className='container mx-auto px-9 py-20'>
			<section className='flex flex-col space-y-8 pb-20 text-center md:items-center md:space-y-10 '>
				<div className='space-y-8'>
					<h1 className='text-xl font-bold uppercase text-veryDarkBlue md:text-3xl'>
						Ping<span className='text-blue'>.</span>
					</h1>
					<div className='space-y-4 md:space-y-5'>
						<h2 className='text-2xl font-light text-gray md:text-5xl'>
							We are launching{' '}
							<span className='font-bold text-veryDarkBlue'>soon!</span>
						</h2>
						<p className='text-xs font-light text-veryDarkBlue md:text-xl'>
							Subscribe and get notified
						</p>
					</div>
				</div>

				<InputForm />
			</section>
			<section className='mb-28 mt-16 flex items-center justify-center md:mb-16'>
				<img
					src='/images/illustration-dashboard.png'
					alt='illustration dashboard'
					className='md:w-1/2'
				/>
				<h3 className='sr-only'>Illustration Dashboard </h3>
			</section>

			<Footer />
		</main>
	)
}
