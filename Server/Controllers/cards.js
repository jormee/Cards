const displayCards = (req, res, db) => {
    const {
        logo,
        companyname,
        services,
        city,
        state,
        phone,
        description,
        website
    } = req.body;
}

module.exports = {
    displayCards
}