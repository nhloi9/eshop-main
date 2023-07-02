import React from 'react';
import {Link} from 'react-router-dom';
import {MdOutlineDashboard, MdOutlineLocalOffer} from 'react-icons/md';
import {BsBagDash} from 'react-icons/bs';
import {FiPackage} from 'react-icons/fi';
import {AiOutlineFolderAdd, AiOutlineGift} from 'react-icons/ai';
import {VscNewFile} from 'react-icons/vsc';
import {CiMoneyBill, CiSettings} from 'react-icons/ci';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {HiOutlineReceiptRefund} from 'react-icons/hi';

const DashboardSideBar = ({active}) => {
	return (
		<div className="w-full overflow-y-scroll bg-white h-[90vh] flex flex-col  gap-7	 sticky">
			<div className="flex items-center p-4 mt-[30px]">
				<Link
					to={'/dashboard'}
					className="w-full flex items-center"
				>
					<MdOutlineDashboard
						size={30}
						color={active === 1 ? 'red' : '#555'}
					/>
					<h1
						className={`hidden pl-2 text-[18px] 800px:block   ${
							active === 1 ? 'text-red-600' : 'text-[#555]'
						}`}
					>
						Dash board
					</h1>
				</Link>
			</div>

			<div className="flex items-center p-4">
				<Link
					to={'/dashboard-orders'}
					className="w-full flex items-center"
				>
					<BsBagDash
						size={30}
						color={active === 2 ? 'red' : '#555'}
					/>
					<h1
						className={`hidden pl-2 text-[18px] 800px:block   ${
							active === 2 ? 'text-red-600' : 'text-[#555]'
						}`}
					>
						All Orders
					</h1>
				</Link>
			</div>
			<div className="flex items-center p-4">
				<Link
					to={'/dashboard-products'}
					className="w-full flex items-center"
				>
					<FiPackage
						size={30}
						color={active === 3 ? 'red' : '#555'}
					/>
					<h1
						className={`hidden pl-2 text-[18px] 800px:block   ${
							active === 3 ? 'text-red-600' : 'text-[#555]'
						}`}
					>
						All Products
					</h1>
				</Link>
			</div>
			<div className="flex items-center p-4">
				<Link
					to={'/dashboard-create-product'}
					className="w-full flex items-center"
				>
					<AiOutlineFolderAdd
						size={30}
						color={active === 4 ? 'red' : '#555'}
					/>
					<h1
						className={`hidden pl-2 text-[18px] 800px:block   ${
							active === 4 ? 'text-red-600' : 'text-[#555]'
						}`}
					>
						Create Product
					</h1>
				</Link>
			</div>

			<div className="flex items-center p-4">
				<Link
					to={'/dashboard-refunds'}
					className="w-full flex items-center"
				>
					<HiOutlineReceiptRefund
						size={30}
						color={active === 10 ? 'red' : '#555'}
					/>
					<h1
						className={`hidden pl-2 text-[18px] 800px:block   ${
							active === 10 ? 'text-red-600' : 'text-[#555]'
						}`}
					>
						Refunds
					</h1>
				</Link>
			</div>
		</div>
	);
};

export default DashboardSideBar;
