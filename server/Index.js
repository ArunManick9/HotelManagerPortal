const express = require('express');
const app = express();
app.use(express.json());
const multer = require('multer');

const cors =require('cors');
app.use(cors());



require('./db/connection');
const Loginuser = require('./Models/Loginuser');
const item_list_food = require('./Models/AddItem');
app.post("/", async(req,res)=>{
    let loginuser = new Loginuser(req.body);
    let result = await loginuser.save();
    res.send(result);
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,'public/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/AddItem', upload.single('image'),(req,res)=>{

    const { Name, details } = req.body;
    const image = req.file.filename;
    

    const additem = new item_list_food({ Name, image, details });
    additem.save()
        .then(() => res.send('User data saved successfully'))
        .catch(err => res.status(500).send(err));



})



app.listen(4000);

