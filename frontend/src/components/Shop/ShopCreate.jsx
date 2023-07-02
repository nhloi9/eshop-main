import React, {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {RxAvatar} from 'react-icons/rx';
import styles from '../../styles/styles';
import {Link} from 'react-router-dom';
import {server} from '../../server';
import axios from 'axios';
import {toast} from 'react-toastify';
const ShopCreate = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [visible, setVisible] = useState(false);
	const [avatar, setAvatar] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [address, setAddress] = useState(null);
	const [zipCode, setZipCode] = useState(null);

	const handleSubmit = async (e) => {
		// console.log('3dkkd');
		e.preventDefault();
		if (!avatar) {
			return toast.error('Please enter your avatar');
		}
		const config = {headers: {'Content-Type': 'multipart/form-data'}};
		const newForm = new FormData();

		newForm.append('file', avatar);
		newForm.append('name', name);
		newForm.append('email', email);
		newForm.append('password', password);
		newForm.append('address', address);
		newForm.append('phoneNumber', phoneNumber);
		newForm.append('zipCode', zipCode);

		axios
			.post(`${server}/shop/create-shop`, newForm, config)
			.then((res) => {
				// console.log(123);
				toast.success(res.data.message);
				setName('');
				setAvatar('');
				setEmail('');
				setPassword('');
				setPhoneNumber('');
				setZipCode('');
				setAddress('');
			})
			.catch((error) => {
				// console.log(error.response.data.message);
				// console.log(123);
				toast.error(error.response.data.message);
			});
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		setAvatar(file);
		// console.log(file.size);
	};
	return (
		<div className="min-h-screen bg-gray-50 flex flex-col justify-center  sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<h2 className="text-center mt-6 text-3xl font-extrabold text-gray-900">
					ShopCreate
				</h2>
			</div>
			<div className="mt-8 sm:mx-auto  sm:w-full sm:max-w-[700px]">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 ">
					<form
						className="space-y-4"
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Shop name
							</label>
							<input
								id="name"
								type="text"
								name="text"
								autoComplete="name"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="phone-number"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Phone Number
							</label>
							<input
								type="number"
								name="phone-number"
								id="phone-number"
								required
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="address"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Address
							</label>
							<input
								type="text"
								name="address"
								id="address"
								required
								value={address}
								onChange={(e) => setAddress(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="zipCode"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Zip Code
							</label>
							<input
								type="number"
								name="zipCode"
								id="zipCode"
								autoComplete="zipCode"
								required
								value={zipCode}
								onChange={(e) => setZipCode(e.target.value)}
								className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Password
							</label>
							<div className="mt-1 relative">
								<input
									type={visible ? 'text' : 'password'}
									id="password"
									name="password"
									autoComplete="current-password"
									required
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm: text-sm"
								/>
								{visible ? (
									<AiOutlineEye
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(false)}
									/>
								) : (
									<AiOutlineEyeInvisible
										className="absolute right-2 top-2 cursor-pointer"
										size={25}
										onClick={() => setVisible(true)}
									></AiOutlineEyeInvisible>
								)}
							</div>
						</div>
						<div>
							<label
								htmlFor="avatar"
								className="block text-sm font-medium text-gray-700 mb-1"
							></label>
							<div className="mt-2 flex items-center">
								<span className="inline-block h-8 w-8 rounded-full overflow-hidden">
									{avatar ? (
										<img
											src={URL.createObjectURL(avatar)}
											alt="avatar"
											className="h-full w-full object-cover rounded-full"
										></img>
									) : (
										<RxAvatar className="w-full h-full rounded-full" />
									)}
								</span>
								<label
									htmlFor="file-input"
									className="ml-5 flex items-center justify-center px-4 rounded-md  py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
								>
									<span> Upload a file</span>
									<input
										type="file"
										name="avatar"
										id="file-input"
										accept=".jpg, .jpeg, .png"
										onChange={handleFileInputChange}
										className="hidden"
										// required
									/>
								</label>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
							>
								Submit
							</button>
						</div>
						<div className={`${styles.noramlFlex} w-full`}>
							<h4>Already have an account?</h4>
							<Link
								to="/shop-login"
								className="text-blue-600 pl-2"
							>
								Sign In
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ShopCreate;
