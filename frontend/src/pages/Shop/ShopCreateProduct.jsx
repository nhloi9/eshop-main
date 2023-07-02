import React from 'react';
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader';
import CreateProduct from '../../components/Shop/CreateProduct.jsx';

const ShopCreateProduct = () => {
	return (
		<div>
			<DashboardHeader />
			<div className="flex justify-between w-full">
				<div className="w-[80px] 800px:w-[330px]">
					<DashboardSideBar active={4} />
				</div>
				<div className="w-full justify-center items-center flex">
					<CreateProduct />
				</div>
			</div>
		</div>
	);
};

export default ShopCreateProduct;
