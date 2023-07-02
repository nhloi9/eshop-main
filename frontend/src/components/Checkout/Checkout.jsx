import React, {useState} from 'react';
import styles from '../../styles/styles';
import {Country, State} from 'country-state-city';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import axios from '../../redux/actions/axiosConfig';
import {toast} from 'react-toastify';

const Checkout = () => {
	const {user} = useSelector((state) => state.user);
	const {cart} = useSelector((state) => state.cart);
	const [country, setCountry] = useState('');
	const [city, setCity] = useState('');
	const [userInfo, setUserInfo] = useState(false);
	const [address1, setAddress1] = useState('');
	const [address2, setAddress2] = useState('');
	const [zipCode, setZipCode] = useState(null);
	const [couponCode, setCouponCode] = useState('');
	const [discountPrice, setDiscountPrice] = useState(0);
	const navigate = useNavigate();
	// console.log(JSON.parse(localStorage.getItem('cartItems')));
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const paymentSubmit = () => {
		if (
			address1 === '' ||
			address2 === '' ||
			zipCode === null ||
			country === '' ||
			city === ''
		) {
			toast.error('please provide full delivery address');
		} else {
			const shippingAddress = {
				address1,
				address2,
				zipCode,
				country,
				city,
			};
			const orderData = {
				cart,
				totalPrice,
				subTotalPrice,
				shipping,
				discountPrice,
				shippingAddress,
				user,
			};
			dispatch({type: 'createOrder', payload: orderData});
			navigate('/payment');
		}
	};
	const subTotalPrice = cart?.reduce(
		(sum, item) => sum + item.discountPrice * item.qty,
		0
	);
	const shipping = subTotalPrice * 0.1;
	const handleSubmit = async (e) => {
		e.preventDefault();

		const name = couponCode;
		try {
			const {data} = await axios.get(`/coupounCode/get-coupoun/${name}`);
			// console.log(data.coupounCode);
			if (!data.coupounCode) {
				toast.error('no coupon code exists');
				setDiscountPrice(0);
			} else {
				const counponData = data.coupounCode;
				console.log(counponData);
				const affectedItems =
					cart &&
					cart.filter(
						(item) =>
							item.shopId == counponData?.shopId &&
							(counponData.selectedProduct
								? item._id == counponData.selectedProduct
								: 1)
					);
				if (affectedItems.length === 0) {
					return toast.error('coupon code is not valid for this products');
				}
				setDiscountPrice(
					affectedItems.reduce(
						(sum, item) =>
							sum + (item.discountPrice * item.qty * counponData.value) / 100,
						0
					)
				);
			}
		} catch (error) {
			toast.error(error.res.data.message);
		}
	};
	// const discountPrice = couponCodeData
	// 	? ((couponCodeData.value * subTotalPrice) / 100).toFixed(2)
	// 	: 0;
	const totalPrice = (subTotalPrice + shipping - +discountPrice).toFixed(2);
	console.log(cart);
	useEffect(() => {
		if (cart.toString() == [].toString()) {
			navigate('/');
		}
	}, [cart]);
	return (
		<div className="w-full flex flex-col items-center py-8">
			<div className="w-[90%] 1000px:w-[70%] block 800px:flex">
				<div className="w-full 800px:w-[65%]">
					<ShippingInfo
						user={user}
						country={country}
						setCountry={setCountry}
						city={city}
						setCity={setCity}
						userInfo={userInfo}
						setUserInfo={setUserInfo}
						address1={address1}
						setAddress1={setAddress1}
						address2={address2}
						setAddress2={setAddress2}
						zipCode={zipCode}
						setZipCode={setZipCode}
					/>
				</div>
				<div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
					<CartData
						handleSubmit={handleSubmit}
						totalPrice={totalPrice}
						shipping={shipping}
						subTotalPrice={subTotalPrice}
						couponCode={couponCode}
						setCouponCode={setCouponCode}
						discountPrice={discountPrice}
					/>
				</div>
			</div>
			<div
				className={`${styles.button} w-[150px] 800px:w-[280px] mt-10`}
				onClick={paymentSubmit}
			>
				<h5 className="text-white">Go to Payment</h5>
			</div>
		</div>
	);
};

const ShippingInfo = ({
	user,
	country,
	setCountry,
	city,
	setCity,
	userInfo,
	setUserInfo,
	address1,
	setAddress1,
	address2,
	setAddress2,
	zipCode,
	setZipCode,
}) => {
	// const selectedAddress = useState('');
	return (
		<div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
			<h5 className="text-[18px] font-[500]">Shipping Address</h5>
			<br />
			<form>
				<div className="w-full flex pb-3">
					<div className="w-[50%]">
						<label className="block pb-2">Full Name</label>
						<input
							type="text"
							value={user && user.name}
							required
							className={`${styles.input} !w-[95%]`}
						/>
					</div>
					<div className="w-[50%]">
						<label className="block pb-2">Email Address</label>
						<input
							type="email"
							value={user && user.email}
							required
							className={`${styles.input}`}
						/>
					</div>
				</div>

				<div className="w-full flex pb-3">
					<div className="w-[50%]">
						<label className="block pb-2">Phone Number</label>
						<input
							type="number"
							required
							value={user && user.phoneNumber}
							className={`${styles.input} !w-[95%]`}
						/>
					</div>
					<div className="w-[50%]">
						<label className="block pb-2">Zip Code</label>
						<input
							type="number"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
							required
							className={`${styles.input}`}
						/>
					</div>
				</div>

				<div className="w-full flex pb-3">
					<div className="w-[50%]">
						<label className="block pb-2">Country</label>
						<select
							className="w-[95%] border h-[40px] rounded-[5px]"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
						>
							<option
								className="block pb-2"
								value=""
								disabled
							>
								Choose your country
							</option>
							{Country &&
								Country.getAllCountries().map((item) => (
									<option
										key={item.isoCode}
										value={item.isoCode}
									>
										{item.name}
									</option>
								))}
						</select>
					</div>
					<div className="w-[50%]">
						<label className="block pb-2">City</label>
						<select
							className="w-[95%] border h-[40px] rounded-[5px]"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						>
							<option
								className="block pb-2"
								value=""
								disabled
							>
								Choose your City
							</option>
							{State &&
								State.getStatesOfCountry(country).map((item) => (
									<option
										key={item.isoCode}
										value={item.isoCode}
									>
										{item.name}
									</option>
								))}
						</select>
					</div>
				</div>

				<div className="w-full flex pb-3">
					<div className="w-[50%]">
						<label className="block pb-2">Address1</label>
						<input
							type="address"
							required
							value={address1}
							onChange={(e) => setAddress1(e.target.value)}
							className={`${styles.input} !w-[95%]`}
						/>
					</div>
					<div className="w-[50%]">
						<label className="block pb-2">Address2</label>
						<input
							type="address"
							value={address2}
							onChange={(e) => setAddress2(e.target.value)}
							required
							className={`${styles.input}`}
						/>
					</div>
				</div>

				<div></div>
			</form>
			<h5
				className="text-[18px] cursor-pointer inline-block"
				onClick={() => setUserInfo(!userInfo)}
			>
				Choose From saved address
			</h5>
			{userInfo && (
				<div>
					{user &&
						user.addresses.map((item, index) => (
							<div className="w-full flex mt-1">
								<input
									type="radio"
									className="mr-3"
									name="addressSelect"
									value={item.addressType}
									onChange={(e) => {
										if (e.target.checked) {
											setAddress1(item.address1) ||
												setAddress2(item.address2) ||
												setZipCode(item.zipCode) ||
												setCountry(item.country) ||
												setCity(item.city);
										}
									}}
								/>
								<h2>{item.addressType}</h2>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

const CartData = ({
	handleSubmit,
	totalPrice,
	shipping,
	subTotalPrice,
	couponCode,
	setCouponCode,
	discountPrice,
}) => {
	return (
		<div className="w-full bg-[#fff] rounded-md p-5 pb-8">
			<div className="flex justify-between">
				<h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
				<h5 className="text-[18px] font-[600]">${subTotalPrice}</h5>
			</div>
			<br />
			<div className="flex justify-between">
				<h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
				<h5 className="text-[18px] font-[600]">${shipping.toFixed(2)}</h5>
			</div>
			<br />
			<div className="flex justify-between border-b pb-3">
				<h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
				<h5 className="text-[18px] font-[600]">-${discountPrice} </h5>
			</div>
			<h5 className="text-[18px] font-[600] text-end pt-3">${totalPrice}</h5>
			<br />
			{/* <form onSubmit={handleSubmit}>
				<input
					type="text"
					className={`${styles.input} h-[40px] pl-2`}
					placeholder="Coupoun code"
					value={couponCode}
					onChange={(e) => setCouponCode(e.target.value)}
					required
				/>
				<input
					className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
					required
					value="Apply code"
					type="submit"
				/>
			</form> */}
		</div>
	);
};

export default Checkout;
