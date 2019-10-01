const multer = require('multer');
const AppError = require('./appError')


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/users');
    },
    filename: (req, file, cb) => {
        //user-userid-currentTimestamp.jpeg
         
        const ext = file.mimetype.split('/')[1];
        cb(null, `product-${Date.now()}-${Date.now()}.${ext}`)
    }
});
const multerFilter = (req, file, cb) => {
    //no files can be updated that are not images
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    } else{
        cb(new AppError('not an image, please upload only images', 400), false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})


exports.uploadUserProductPhoto = upload.single('photo')