🌙 nextjs-typescript-sample
====

![GitHub issues](https://img.shields.io/github/issues/isystk/nextjs-typescript-sample)
![GitHub forks](https://img.shields.io/github/forks/isystk/nextjs-typescript-sample)
![GitHub stars](https://img.shields.io/github/stars/isystk/nextjs-typescript-sample)
![GitHub license](https://img.shields.io/github/license/isystk/nextjs-typescript-sample)

## 📗 プロジェクトの概要

Next.js ＆ Firebase の学習用サンプルアプリケーションです。


## 🌐 Demo

https://firebase.isystk.com/

![フロント画面](./front.png "フロント画面")

- ログイン/ログアウト
- 投稿一覧
- 投稿詳細
- マイページ（投稿一覧・登録・更新・削除）



## 📦 ディレクトリ構造

```
.
├── docker/
│   ├── app/
│   │   ├── docker-compose.yml
│   │   ├── Dockerfile
│   │   └── Next.jsのコード諸々
│   └── firebase/
│       ├── Dockerfile
│       └── src
│           └── Firebaseのコード諸々
│
└── dc.sh （Dockerの起動用スクリプト）
```

## 🖊️ Docker 操作用シェルスクリプトの使い方

```
Usage:
  dc.sh [command] [<options>]

Options:
  stats|st                 Dockerコンテナの状態を表示します。
  init                     Dockerコンテナ・イメージ・生成ファイルの状態を初期化します。
  start                    すべてのDaemonを起動します。
  stop                     すべてのDaemonを停止します。
  firebase start           Firebase のエミュレータを起動します。
  functions build          Cloud Functions をビルドします。
  --version, -v     バージョンを表示します。
  --help, -h        ヘルプを表示します。
```


## 💬 使い方

```
# 下準備
$ ./dc.sh init

# Dockerを起動する
$ ./dc.sh start

# 初回のみFirebaseのセットアップ
docker-compose -f docker/docker-compose.yml exec firebase sh
> firebase login
> firebase init

# Firebaseエミュレータを起動します。
$ ./dc.sh firebase start
$ open http://localhost:4000

# Cloud Functions をビルドします。
cd ./docker/firebase/src/functions
yarn
yarn build
# 投稿データをPOST
curl -X POST -H "Content-Type: application/json" -d @post.json http://localhost:5001/nextjs-typescript-firestore/us-central1/api/posts
# 投稿データの一覧を取得する
curl http://localhost:5001/nextjs-typescript-firestore/us-central1/api/posts

# Next.jsアプリを起動します。
$ yarn
$ yarn dev
$ open http://localhost:3000

# Dockerを停止する場合
$ ./dc.sh stop
```

## 🎨 参考

| プロジェクト| 概要|
| :---------------------------------------| :-------------------------------|
| [react-bootstrap](https://react-bootstrap.github.io/components/)| BootstrapのReact用コンポーネント |


## 🎫 Licence

[MIT](https://github.com/isystk/nextjs-typescript-sample/blob/master/LICENSE)

## 👀 Author

[isystk](https://github.com/isystk)

