import express from 'express';
import multer from 'multer';

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, "public/images");
    }, 
    filename: (req, file, cb)=>{
        console.log(req.body.name)
        cb(null, req.body.name)
        
    }
});

const upload = multer({storage});


router.post('/', upload.single('file'), (req, res) => {
    try {
        return res.status(200).json({ message: 'File uploaded' });
    } catch (e) { 
        console.error(e);
        return res.status(500).json({ error: 'An error occurred while uploading the file' });
    } 
});

export default router; 