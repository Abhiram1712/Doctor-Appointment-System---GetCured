import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req,file,callback){
        callback(null,file.originalname)
    }
})

//  ------- Use if two images have same name---------
// filename: function (req, file, callback) {
//     // This creates a name like: 170562348123-photo.jpg
//     callback(null, Date.now() + "-" + file.originalname);
// }


const upload = multer({storage})

export default upload