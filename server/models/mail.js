const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	sender: {
		type: String,
		required: true,
	},
	reciever: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	read: {
		type: Boolean,
		default: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const Messages = mongoose.model("messages", messagesSchema);

module.exports = Messages;
