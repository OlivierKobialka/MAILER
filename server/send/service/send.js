const Messages = require("../../models/mail");

const send = async (req, res) => {
	const { title, sender, reciever, content } = req.body;

	try {
		const mailToSend = new Messages({
			title,
			sender,
			reciever,
			content,
			read: false,
			date: Date.now(),
		});

		await mailToSend.save();

		return res.status(200).json({ success: true });
	} catch (error) {
		return res.status(500).json({ success: false, error: error.message });
	}
};

module.exports = {
	send,
};
