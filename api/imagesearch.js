var ImagesClient = require('google-images');
 
var client = new ImagesClient('005301216576079072935:ipkhoclb3tu', 'AIzaSyCzERMyj6PWnJqS7rqwRRZ3U4D1WboZyj4');
 
module.exports = function(app, db) {
    app.get('/imagesearch/:query', handleImage)

    app.get('/lastsearchs', handleList)
    
    app.get('/', handleError)
    
    app.all('*', handleError);

function handleImage (req, res) {
    var page = req.query.offset || 0
    var query = req.params.query || ""
    if (! query) {
        handleError(req, res);
        return
    }
 
     
    saveLog(query)
    
    client.search(query,{page: page})
    .then(function (images) {
        
        if (images.length === 0 ) {
            res.json({error: "nothing found"})
            return
        }
        var result = images.map(function(image){
            return {url: image.url, thumbnail: image.thumbnail.url};
        });
        
        res.json(result)
    });
    
    
}
function saveLog (query) {
    var date =new Date().toISOString();
    var imgSearchLog = db.collection('imgSearchLog');
    imgSearchLog.insert([{searchText: query, date: date}])
}
    
function handleList (req, res) {
    var imgSearchLog = db.collection('imgSearchLog');
    imgSearchLog.find({},{ searchText: 1, date: 1, _id:0 }).sort({date: -1}).toArray(function (err, docs) {
        if (err) return err
        res.json(docs)
    })
}    
    
function handleError (req, res) {
    res.render('imgSearchErr.jade')
    
}

    
}
