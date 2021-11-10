import * as functions from "firebase-functions";
import {Request, Response, NextFunction} from "express";
var router = require('./common');

router.get('/helloWorld', function(req: Request, res:Response, next: NextFunction) {
  functions.logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

module.exports = router;