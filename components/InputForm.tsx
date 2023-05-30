'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
	.object({
		email: yup
			.string()
			.email('Please provide a valid email address')
			.required('Please provide a valid email address'),
	})
	.required()

type FormData = yup.InferType<typeof schema>

const InputForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	})

	const onSubmit = (data: FormData) => console.log(data)

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className='flex flex-col space-y-3 md:flex-row md:items-center md:space-x-4 md:space-y-0 '>
			<div className='flex flex-1 flex-col space-y-2 md:text-left'>
				<input
					type='email'
					{...register('email', { required: true })}
					placeholder='Your email address...'
					className={`rounded-[28px] border border-paleBlue px-8 py-4 font-light text-veryDarkBlue outline-none placeholder:text-xs  placeholder:text-[#B8C7ED] ${
						errors.email
							? `focus:border-lightRed `
							: `focus:border-veryDarkBlue`
					} `}
				/>
				{errors.email && (
					<span className='mb-3 text-xs font-normal italic tracking-wide text-lightRed'>
						{errors.email?.message}
					</span>
				)}
			</div>

			<button className='rounded-full bg-blue px-8 py-4 font-semibold text-white hover:cursor-pointer hover:opacity-80'>
				Notify Me
			</button>
		</form>
	)
}
export default InputForm
