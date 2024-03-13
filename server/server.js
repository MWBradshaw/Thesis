const express = require("express")
const cors = require("cors");
const multer = require('multer');

const PORT = process.env.PORT || 5173;

const app = express();

app.use(cors())

app.use(express.json())

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, 'public/assets')
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage})

app.post('/Thesis/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file)
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`));