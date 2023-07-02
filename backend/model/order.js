const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
	cart: {type: Array, required: true},
	shippingAddress: {type: Object, required: true},
	user: {type: Object, required: true},
	totalPrice: {type: Number, required: true},
	status: {
		type: String,
		default: 'Processing',
	},
	paymentInfo: {
		id: String,
		status: String,
		type: {type: String},
	},
	paidAt: {type: Date},
	deliveredAt: {type: Date},
	createdAt: {type: Date, default: Date.now()},
});
module.exports = mongoose.model('Order', orderSchema);
