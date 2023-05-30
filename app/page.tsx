import InputForm from '@/components/InputForm'

export default function Home() {
	return (
		<main className='min-h-screen p-9'>
			<section className='flex flex-col space-y-10 text-center md:mx-auto md:max-w-2xl'>
				<div className='space-y-8'>
					<h1 className='text-xl font-bold uppercase text-veryDarkBlue'>
						Ping<span className='text-blue'>.</span>
					</h1>
					<div className='space-y-4'>
						<h2 className='text-2xl font-light text-gray'>
							We are launching{' '}
							<span className='font-bold text-veryDarkBlue'>soon!</span>
						</h2>
						<p className='text-xs font-light text-veryDarkBlue'>
							Subscribe and get notified
						</p>
					</div>
				</div>
				<InputForm />
				<div className='py-10'>
					<img
						src='/images/illustration-dashboard.png'
						alt='illustration dashboard'
					/>
				</div>
			</section>
		</main>
	)
}
