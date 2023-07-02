import React from 'react';
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader';
import Footer from '../../components/Layout/Footer';
import OrderDetails from '../../components/Shop/OrderDatails.jsx';

const ShopOrderDetail = () => {
	return (
		<div>
			<DashboardHeader />
			<OrderDetails />
			<Footer />
		</div>
	);
};

export default ShopOrderDetail;
