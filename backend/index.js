const express = require("express")
const cors = require("cors");
const app = express();
require("dotenv").config();
const ConnectDB = require("./src/database")
const User = require('./src/user')

ConnectDB();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8080;


// User signup API
app.post("/signup", async (req, res) => {
  try {
    // const { name, number, email, address, password } = req.body;
    const name = req.body.name;
    const number = req.body.number;
    const email = req.body.email;
    const address = req.body.address;
    const password = req.body.password;

    // check user exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    // create user
    const newUser = new User({
      name,
      number,
      email,
      address,
      password
    });

    await newUser.save();
    res.json({ msg: "User registered successfully" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

//Login API
app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // check user
    const user = await User.findOne({ email,password });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });


    res.send(user);

  } catch (err) {
    res.status(500).send("Server Error");
  }
});



app.listen(port, ()=>{
    console.log("server is running on port "+ port)
})