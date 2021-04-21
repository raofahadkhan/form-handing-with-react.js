import { useState } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	console.log("Component is rendering again");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email);
		setName("");
		setEmail("");
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;

			case "email":
				setEmail(e.target.value);
				break;

			default:
				break;
		}
	};

	return (
		<div>
			Form Handling With React
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name : </label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Enter Your Name"
					value={name}
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
					value={email}
					onChange={handleChange}
				/>
				<br />
				<br />

				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default App;
