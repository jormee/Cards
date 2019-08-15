const handleSignIn = (req, res, db, bcrypt) => {

    const { email, password } = req.body;
    db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const validPassword = bcrypt.compareSync(password, data[0].hash);
            if (validPassword) {
                return db.select('*').from('users')
                .where('email', '=', email)
                .then(user => {
                    res.json(user[0])
                })
                .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('incorrect email or password')
            }
        })
        .catch(err => res.status(400).json('incorrect email or password'))

}

module.exports = {
    handleSignIn
}