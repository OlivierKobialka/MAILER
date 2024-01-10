const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const usersApi = require("./server/users");
const loginApi = require("./server/login");
const sendApi = require("./server/send");
const mailsApi = require("./server/mails");
const dotenv = require("dotenv");
dotenv.config();

app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cookieParser());

app.use(usersApi);
app.use(loginApi);
app.use(sendApi);
app.use(mailsApi);

const db = `mongodb+srv://admin:admintechni123@cluster0.zfvtf.mongodb.net/mailer?retryWrites=true&w=majority`;

mongoose.connect(db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
	console.log("Connected with database");
});

app.get("*", function (req, res) {
	res.status(301).redirect("/");
});

app.listen(8080, () => {
	console.log(`Server up and running on port http://localhost:${8080}`);
});
