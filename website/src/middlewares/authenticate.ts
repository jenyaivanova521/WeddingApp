import { Router } from "express";
const router = Router();

router.use(function(req, res, next) {

    if (req['user']) {
        next();
    } else {
        if (req.xhr) {
            res.status(401).end();
        } else {
            return res.redirect('/login' + '?redirect=' + req.url);
        }
    }

});

export default router;
