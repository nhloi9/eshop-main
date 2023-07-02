import React from 'react';
// import styles from '../../styles/styles';
import {
	AiFillFacebook,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillYoutube,
} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {
	footercompanyLinks,
	footerProductLinks,
	footerSupportLinks,
} from '../../static/data';
import styles from '../../styles/styles';
const Footer = () => {
	return (
		<div>
			<div className=" bg-[#342ac8]">
				<div className={`${styles.section} sm:flex`}>
					<h1 className="w-full font-semibold py-3 sm:w-[50%] sm:text-[20px] ">
						<span className="text-[#56d879]">Subscribe</span> us for get news <br />
						events and offers
					</h1>
					<div className="w-full font-semibold py-3 sm:w-[50%] ">
						<input
							type="text"
							required
							placeholder="Enter your email..."
							className="w-full text-gray-800
          rounded px-2 my-2 focus:outline-none leading-[30px]"
						/>
						<button className="bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-whie md:w-auto w-full">
							Submit
						</button>
					</div>
				</div>
			</div>
			<div className="bg-[#000] text-white">
				<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
					<ul className="px-5 text-center flex  flex-col sm:text-start sm:block  items-center">
						<img
							src="https://shopo.quomodothemes.website/assets/images/logo.svg"
							alt=""
							style={{filter: 'brightness(0) invert(1)'}}
						/>
						<br />
						<p>The home and elements needeed to create beatiful products.</p>
						<div className="flex items-center mt-[15px]">
							<AiFillFacebook
								size={25}
								className="cursor-pointer"
							/>
							<AiOutlineTwitter
								size={25}
								style={{marginLeft: '15px', cursor: 'pointer'}}
							/>
							<AiFillInstagram
								size={25}
								style={{marginLeft: '15px', cursor: 'pointer'}}
							/>
							<AiFillYoutube
								size={25}
								style={{marginLeft: '15px', cursor: 'pointer'}}
							/>
						</div>
					</ul>

					<ul className="text-center sm:text-start">
						<h1 className="mb-1 font-semibold">Company</h1>
						{footerProductLinks.map((link, index) => (
							<li key={index}>
								<Link
									className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
									to={link.link}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					<ul className="text-center sm:text-start">
						<h1 className="mb-1 font-semibold">Shop</h1>
						{footercompanyLinks.map((link, index) => (
							<li key={index}>
								<Link
									className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
									to={link.link}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>

					<ul className="text-center sm:text-start px-5">
						<h1 className="mb-1 font-semibold">Support</h1>
						{footerSupportLinks.map((link, index) => (
							<li key={index}>
								<Link
									className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
									to={link.link}
								>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
				>
					<span>© 2020 Becodemy. All rights reserved.</span>
					<span>Terms · Privacy Policy</span>
					<div className="sm:block flex items-center justify-center w-full">
						<img
							src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
