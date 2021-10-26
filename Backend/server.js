const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const user = require('./schmod');


dotenv.config();

mongoose.connect(process.env.DATA_BACE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connection sucessfull  in mongoose......')
    }).catch((err) => {
        console.log(err)
    })



// console.log();


// const getDataDb = async ()=>{
//     const result = await user.find({Lname : "suman"});
//     console.log(result)
// }

// const outPut = async () =>{
//     const result = await user.findOne({Fname : "suman"});
//     if(!result){
//         console.log('their is not any data');
//     }else{
//         console.log(result);
//     }
// }
// outPut();

// const Delete = async () => {
//     try {
//         const Ddelete = "rajesh";
//         const isData = await user.exists({ Fname: Ddelete });
//         // console.log(isData);
//         if (isData) {
//             const result = await user.deleteMany({ Fname: Ddelete })
//             console.log('data deleted successfuly')
//         } else {
//             console.log('Data not found in collection')
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

// Delete();

// const Update = async () => {
//     try {
//         const result = await user.updateOne({ Fname: "suman" }, { Lname: "Davi" })
//         console.log('Doc Updated successfully');
//     }catch(err){
//         console.log(err)
//     }
// }

// Update();

// // getDataDb();
// const mydata = user({
//     Fname : 'new data',
//     Lname: 'stored',
//     UserName: 'successfully'
// })
// const mother = user({
//     Fname : 'suman',
//     Lname: 'lata',
//     UserName: 'sumanlata'
// })
// const father = user({
//     Fname : 'rajesh',
//     Lname: 'sharma',
//     UserName: 'rajeshsharma'
// })

// user.insertMany([mydata, mother, father]).then(() => console.log('data stored successfully'))
// .catch((err) => console.log(err));


const app = express();
const port = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(require('./Routters/Router'));

app.get('/',(req, res)=>{
    res.send('this data frome the Home Page');
})




    // res.send('app now working in the root folder')
    // const Data = req.body
    // user.insertMany([mydata, mother, father]).then(() => console.log('data stored successfully'))
    //     .catch((err) => console.log(err));
// })

app.listen(port, 'localhost', () => {
    console.log('connection successfull in backend');
})