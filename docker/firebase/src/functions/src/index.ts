import * as functions from 'firebase-functions';
import * as express from 'express';
import {Request, Response, NextFunction} from "express";
class HttpException extends Error {
  statusCode?: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
  }
}
const app: express.Express = express();

var router = require('./routes');

// Error Handling
router.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    error: 'Route Not Found'
  });
});

router.use((e: HttpException, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: e.name + ': ' + e.message
  });
});

app.use(router);

export const api = functions.https.onRequest(app);
