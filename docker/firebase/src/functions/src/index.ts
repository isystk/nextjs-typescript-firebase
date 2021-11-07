import * as functions from 'firebase-functions';
import * as express from 'express';
const app: express.Express = express();

var router = require('./routes');

// Error Handling
router.use((req, res, next) => {
  res.status(404).json({
    error: 'Route Not Found'
  });
});

router.use((e, req, res, next) => {
  res.status(500).json({
    error: e.name + ': ' + e.message
  });
});

app.use(router);

export const api = functions.https.onRequest(app);
