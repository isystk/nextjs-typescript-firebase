import * as functions from "firebase-functions";
var router = require('./common');

router.get('/helloWorld', function(req, res, next) {
  functions.logger.info("Hello logs!", {structuredData: true});
  res.send("Hello from Firebase!");
});

module.exports = router;