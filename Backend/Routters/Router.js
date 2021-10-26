const express = require('express');
const user = require('../schmod');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const auth = require("../middelware/auth");


const router = express.Router();


router.get('/home', auth, (req, res) => {

});

// this is router post page

router.post('/router', (req, res) => {
    res.send('this is demo')

    const { Fname, Lname, UserName, Email, Pass, Cpassword } = req.body;

    const Data = user({
        Fname, Lname, UserName, Email, Pass, Cpassword
    })
    console.log(Fname);
    console.log(Lname);
    console.log(UserName);
    console.log(Email);
    console.log(Pass);
    console.log(Cpassword);


    Data.save().then(() => console.log("Data is stored succussfully ..........................."))
        .catch((err) => {
            console.log(err)
        })

})

router.post('/singin', async (req, res) => {
    try {
        const { Email, Pass } = req.body;
        if (!Email || !Pass) {
            console.log("plese fill all the data in this");
        } else {
            const result = await user.findOne({ Email });
            if (!result) {
                return res.starus(400).json({ error: "invalid email id" });
            } else {
                const hashPass = await bcrypt.compare(Pass, result.Pass);
                if (hashPass) {
                    const token = await result.generateAuthToken();
                    console.log("tooken generated");
                    res.cookie("jwtToken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true
                    });
                    return res.status(200).json({ message: "login sussefully in backend" })
                }
                else {
                    return res.status(400).json({ error: "invalid password" });
                }
            }
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;

