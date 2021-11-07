import * as functions from "firebase-functions";
var router = require('./common');
const moment = require("moment");

const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

var db = admin.firestore()

type Data = {
  id: string,
  data: Post
}

type Post = {
  title: string,
  description: string,
  photo: string,
  regist_datetime: Date
}

// Read All
router.get('/posts', async (req, res, next) => {
  try {
    const itemSnapshot = await db.collection('posts').get();
    const posts = [] as Data[];
    itemSnapshot.forEach(doc => {
      posts.push({
        id: doc.id,
        data: doc.data()
      });
    });
    res.json(posts);
  } catch (e) {
    next(e);
  }
});

// Read
router.get('/posts/:id/', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error('id is blank');
    }
    const post = await db
      .collection('posts')
      .doc(id)
      .get();
    if (!post.exists) {
      throw new Error('post does not exists');
    }
    res.json({
      id: post.id,
      data: post.data()
    });
  } catch (e) {
    next(e);
  }
});

// Create
router.post('/posts', async (req, res, next) => {
  try {
    const text = req.body.text;
    if (!text) {
      throw new Error('Text is blank');
    }
    const data = { text, regist_datetime: moment() };
    const ref = await db.collection('posts').add(data);
    res.json({
      id: ref.id,
      data
    });
  } catch (e) {
    next(e);
  }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const text = req.body.text;

    if (!id) {
      throw new Error('id is blank');
    }
    if (!text) {
      throw new Error('text is blank');
    }

    const data = { text };
    await db
      .collection('posts')
      .doc(id)
      .update({
        ...data
      });
    res.json({
      id,
      data
    });
  } catch (e) {
    next(e);
  }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) {
      throw new Error('id is blank');
    }
    await db
      .collection('posts')
      .doc(id)
      .delete();
    res.json({
      id
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;

