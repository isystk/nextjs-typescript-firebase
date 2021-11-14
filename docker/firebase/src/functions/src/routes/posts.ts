import * as functions from "firebase-functions";
import {Request, Response, NextFunction} from "express";
const router = require("./common");
const moment = require("moment");

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

type Data = {
  id: string,
  data: Function
}

// Read All
router.get("/posts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    let query = db.collection("posts").orderBy("regist_datetime", "desc");
    const {userId, limit = 10, last} = req.query;
    if (userId) {
      query = query.where("user_id", "=", userId);
    }

    if (last) {
      query = query.startAfter(last);
    }

    const itemSnapshot: Data[] = await query
        .limit(limit)
        .get();
    const posts = [] as Data[];
    itemSnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        data: doc.data(),
      });
    });
    res.json(posts);
  } catch (e) {
    next(e);
  }
});

// Read
router.get("/posts/:id/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("id is blank");
    }
    const post = await db
        .collection("posts")
        .doc(id)
        .get();
    if (!post.exists) {
      throw new Error("post does not exists");
    }
    res.json({
      id: post.id,
      data: post.data(),
    });
  } catch (e) {
    next(e);
  }
});

// Create
router.post("/posts", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const text = req.body;
    if (!text) {
      throw new Error("Text is blank");
    }
    const data = {...text, regist_datetime: moment().format()};
    const ref = await db.collection("posts").add(data);
    res.json({
      id: ref.id,
      data,
    });
  } catch (e) {
    next(e);
  }
});

// Update
router.put("/:id", async (req: Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    const text = req.body.text;

    if (!id) {
      throw new Error("id is blank");
    }
    if (!text) {
      throw new Error("text is blank");
    }

    const data = {text};
    await db
        .collection("posts")
        .doc(id)
        .update({
          ...data,
        });
    res.json({
      id,
      data,
    });
  } catch (e) {
    next(e);
  }
});

// Delete
router.delete("/:id", async (req:Request, res: Response, next:NextFunction) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error("id is blank");
    }
    await db
        .collection("posts")
        .doc(id)
        .delete();
    res.json({
      id,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

