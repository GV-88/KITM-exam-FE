import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";

const Register = () => {
	const [userData, setUserData] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	
	const { register } = useAppContext();
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		setError(null);

		try {
			console.log("?");
			console.log(register);
			
			
			await register(...userData);
		} catch (error) {
			setError(error?.messageCode ?? "failed to register");
		} finally {
			setLoading(false);
		}
	}

	const handleChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	return (
		<div className='container'>
			<h2 className='mt-3 text-center'>Register</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div className='mb-3'>
					<input name='username' value={userData.username} onChange={handleChange} type='text' className='form-control' placeholder='username' />
				</div>
				<div className='mb-3'>
					<input name='password' onChange={handleChange} type='password' className='form-control' placeholder='password' />
				</div>
				<div className='mb-3'>
					<input name='confirmPassword' onChange={handleChange} type='password' className='form-control' placeholder='confirm password' />
				</div>
				<div className='mb-3'>
					<button type='submit' className='btn btn-primary'>
						Register
					</button>
				</div>
			</form>
		</div>
	)
};

export default Register;