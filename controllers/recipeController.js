exports.homepage = (req, res) => {
    res.render('index', {
        title: 'Homepage - Recipe Blog',
    });
};
