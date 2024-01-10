const Messages = require("../../models/mail");

const mailService = async (req, res) => {
	const credentials = req.body;
	const { userAddress } = credentials;

	try {
		// get all mails where reciever is the user
		const mails = await Messages.find({ reciever: userAddress });
		return res.status(200).json({ success: true, mails });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

const recieved = async (req, res) => {
	const credentials = req.body;
	const { userAddress } = credentials;

	try {
		// get all mails where reciever is the user
		const mails = await Messages.find({ reciever: userAddress });
		return res.status(200).json({ success: true, mails });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
	mailService,
	recieved,
};
