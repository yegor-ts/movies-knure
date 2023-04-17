exports.getNotFound = (_, res) => {
    res.status(404).render('not-found', { path: '/404' });
};
