const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello world from the router server");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirmPassword } = req.body;

  if (!name || !email || !phone || !work || !password || !confirmPassword) {
    return res.status(422).json({ error: "Please fill all the details" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    console.log("userExist =", userExist);

    if (userExist) {
      return res.status(422).json({ error: "Email is already exist" });
    }

    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      confirmPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the details" });
    }
    const userLogin = await User.findOne({ email: email });

    // console.log(userLogin)

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 24792000000),
        httpOnly: true,
        sameSite: "none",
        secure: "false",
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credential" });
      } else {
        res.json({ message: "User logged in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid credential" });
    }
  } catch (error) {
    console.log(error);
  }
});

// About page
router.get("/about", authenticate, async (req, res) => {
  res.send(req.rootUser);
  console.log("Hello my about");
});

// Contact & Home page
router.get("/getdata", authenticate, async (req, res) => {
  res.send(req.rootUser);
  console.log("Hello my contact");
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(422).json({ error: "Please fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();

      res.status(201).json({ message: "User contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

// Logout page
router.get("/logout", async (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User logout successfully");
});

module.exports = router;
