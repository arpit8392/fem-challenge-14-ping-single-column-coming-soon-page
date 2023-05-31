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

	const onSubmit = (data: FormData) => {
		console.log(data)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className='flex flex-col space-y-3 md:w-[40%] md:flex-row md:space-x-4 md:space-y-0'>
			<div className='flex-1'>
				<input
					type='email'
					{...register('email')}
					placeholder='Your email address...'
					className={`input-element ${errors.email && 'focus:ring-lightRed'} `}
				/>
				{errors.email && (
					<p className='validation-element'>{errors.email?.message}</p>
				)}
			</div>

			<button type='submit' className='btn'>
				Notify Me
			</button>
		</form>
	)
}
export default InputForm
