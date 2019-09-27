
const jwt = require('jsonwebtoken')
//Middleware 
function authenticate(req,res,next) {
    // middle ware 
    console.log('middleware called...')
    let headers = req.headers['authorization']

    if(headers) {
        const token = headers.split(' ')[1]
        var decoded = jwt.verify(token, 'someprivatekey');
        if(decoded) {
            const username = decoded.username 
            // check in the database if the user exists 
            const persistedUser = users.find(u => u.username == username)
            if(persistedUser) {
                next() 
            } else {
                res.json({error: 'Invalid credentials'})
            }
        } else {
            res.json({error: 'Unauthorized access'})
        }
    } else {
        res.json({error: 'Unauthorized access'})
    }
}
module.exports = authenticate