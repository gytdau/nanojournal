export default (req, res, next) => {
    let password = process.env.PASSWORD || "password"
    if (!req.body.password || req.body.password != password) {
        res.sendStatus(401)
    } else {
        next()
    }
}