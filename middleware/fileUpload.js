const multer = require('multer')

const storage = multer.diskStorage ({
    destination: (req, file, cb) => { //request, file, callback ada 3 parameter ini
        cb(null, 'uploads') // jika tidak ada yang di upload maka null, jika ada yang diupload maka akan masuk ke dalam folder uploads
    },
        filename: (req, file, cb) => { // ini fungsinya utk merubah data gambar di file uploads, ada tambahan di depan, agar jika ada nama foto yang sama, agar tak bisa sama
            cb(null, file.fieldname + Date.now() + '-' + file.originalname)
        }
    }
)

const upload= multer({storage})
module.exports=upload