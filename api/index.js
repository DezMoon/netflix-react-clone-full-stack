const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
    
})
    .then(() => console.log("Connection to DB Successfull!"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log("Backend server is running!");
});

