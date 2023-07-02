import React from 'react';
import styles from '../../../styles/styles';
import {Link} from 'react-router-dom';

const Hero = () => {
	return (
		<div
			className="min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-cover flex items-center"
			style={{
				backgroundImage: 'url(https://www.secondsale.com/img/homepage_banner4.png)',
			}}
		>
			<div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
				<h1
					className={`text-[35px] text-[#3d3a3a] font-[600] capitalize leading-[1.2] 800px:text-[60px]`}
				>
					Cheap Used Books
				</h1>
				<p className="text-md leading-[30px] pt-5 font-Poppins text-gray-700 ">
					Millions of New and Used books starting at $2.99
				</p>
				<Link className="inline-block px-7 py-3 bg-black text-white mt-[10px] rounded-lg text-lg font-[500]">
					Shop Now
				</Link>
			</div>
		</div>
	);
};

export default Hero;
