
const editProfile = (req, res, db) => {
    const {
        email,
        logo,
        companyname,
        services,
        phone,
        website,
        address,
        city,
        state,
        description,
        facebookPage,
        twitterHandle,
        instagramHandle
    } = req.body;
    db.transaction(trx => {
        trx.insert({
            email: email,
            companyname: companyname,
            phone: phone,
            website: website,
            address: address,
            city: city,
            state: state,
            description: description
        })
        .into('profile')
        .returning('email')
        .then(email => {
            return trx.insert({
                    companyname: companyname,
                    facebook: facebookPage,
                    twitter: twitterHandle,
                    instagram: instagramHandle
                })
                .into('socialpages')
                .returning('*')
                .then(user => {
                    res.json(user[0]);
                })
            
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => {
        res.status(400).json('unable to update profile!')
    })
};

module.exports = {
    editProfile
}