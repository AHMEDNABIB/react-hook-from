import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";


type FormValues = {
	username: string,
	email: string,
	channel:string,
}

function BasicFrom() {
	const from = useForm<FormValues>()
	const { register , control , handleSubmit , formState} = from
	
	const { errors } = formState;
	// const {name,ref,onChange,onBlur}= register("username")

	const onSubmit = (data: FormValues) => {
		console.log('Form Submit',data)
	}

	return (
		<div>
			<h1>YouTube Form</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="username">Username</label>
				{/* <input type="text" id="username" name={name} ref={ref} onChange={onChange} /> */}
				<input
					type="text"
					id="username"
					{...register("username", {
						required: {
							value: true,
							message: "Username is required",
						},
					})}
				/>
				<p>{errors.username?.message }</p>

				<label htmlFor="email">E-mail</label>
				<input
					type="email"
					id="email"
					{...register("email", {
						pattern: {
							value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: "Invalid email format",
						},
					})}
				/>
				<p>{ errors.email?.message}</p>

				<label htmlFor="channel">Channel</label>
				<input
					type="text"
					id="channel"
					{...register("channel", {
						required: {
							value: true,
							message: "Channel is required",
						},
					})}
				/>
				<p>{ errors.channel?.message}</p>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
}

export default BasicFrom;
