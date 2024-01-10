const Messages = require("../../models/mail");

const read = async (req, res) => {
	const { sender, message, data } = req.body;

	try {
		const mail = await Messages.findOne({ sender, message, data });
		mail.read = true;
		await mail.save();
		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

const unread = async (req, res) => {
	const { sender, message } = req.body;

	try {
		const mail = await Messages.findOne({ sender, message });
		mail.read = false;
		await mail.save();

		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
	read,
	unread,
};
