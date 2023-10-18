module.exports = function(app,formidable) {
    app.post('/api/upload', (req, res) => {
        var form = new formidable.IncomingForm({uploadDir: './userimages'});
        form.keepExtensions = true;

        form.on('error', function(err) { // handling errors
            throw err;
            res.send({
                result: "failed",
                data: {},
                numberOfImages: 0,
                message: "Cannot upload images. Error is " + err
            })
        })

        form.on('fileBegin', function(name, file){ // File name setup
            file.path = form.uploadDir + '/' + file.name;
        })

        form.on('file', function(field, file) { // handle correct upload
            res.send({
                result: "OK",
                data: {'filename': file.name, 'size': file.size},
                numberOfImages: 1,
                message: "Upload Succesful"
            })
        })

        form.parse(req);
    })
}

// Setup to upload images