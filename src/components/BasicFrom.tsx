import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";


type FormValues = {
	username: string,
	email: string,
	channel:string,
}

function BasicFrom() {
	const from = useForm<FormValues>()
	const { register , control , handleSubmit} = from
	
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
				<input type="text" id="username" {...register("username")} />

				<label htmlFor="email">E-mail</label>
				<input type="email" id="email" {...register("email")} />

				<label htmlFor="channel">Channel</label>
				<input type="text" id="channel" {...register("channel")} />

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
}

export default BasicFrom;
