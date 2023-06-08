const router = require("express").Router();
const Products = require("../models/products");
let User = require("../models/user");
const bycrypt = require("bcryptjs");

router.route("/add").post(async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const encryptedPass = await bycrypt.hash(password, 10);
  //create new object for student model
  const newUser = new User({
    email,
    username,
    password: encryptedPass,
  });
  //Meka javascript promise ekak then eken wenne success unoth "Student added" kiyala message ekak enawa
  await newUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      //error ekak awoth eka console eken capture krnw
      console.log(err);
    });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bycrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Password is correct, user is authenticated
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// router.route("/").get((req, res) => {
//   Student.find()
//     .then((students) => {
//       res.json(students);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

router.route("/").get((req, res) => {
  Products.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
