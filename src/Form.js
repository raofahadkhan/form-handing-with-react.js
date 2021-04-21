import { useState } from "react";
import "./App.css";

function Form() {
	const [formInputs, setFormInputs] = useState({ name: "", email: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormInputs({ name: "", email: "" });
	};

	const handleChange = (e) => {
		setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<p>----------------------------------------</p>
			Form Handling With React Second Approach
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name : </label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter Your Name"
					value={formInputs.name}
					onChange={handleChange}
				/>
				<br />
				<br />

				<label htmlFor="email">Email : </label>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Enter Your Email"
					value={formInputs.email}
					onChange={handleChange}
				/>
				<br />
				<br />

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Form;
