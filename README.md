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
- 会員登録
- パスワードリマインダ
- 商品一覧
- カートに追加
- 決算処理（Stripe）
- お気に入り追加
- お問い合わせ
- ソーシャルログイン（Google）


## 🔧 開発環境の構築

```
↓コマンドプロンプトでバージョンが表示されればOK
docker --version
```


## 📦 ディレクトリ構造

```
.
└── docker/
  ├── app/
  │   ├── docker-compose.yml
  │   ├── Dockerfile
  │   └── Next.jsのコード諸々
  └── firebase/
      ├── Dockerfile
      └── Firebaseのコード諸々

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
  --version, -v     バージョンを表示します。
  --help, -h        ヘルプを表示します。
```


## 💬 使い方

```
# 下準備
$ ./dc.sh init

# サーバーを起動する
$ ./dc.sh start

# データベースとPHPが立ち上がるまで少し待ちます。(初回は5分程度)

# MySQLにログインしてみる
$ ./dc.sh mysql login

# PHPサーバーにログインしてみる（composer や artisan などのコマンドは基本的にここで行う）
$ ./dc.sh php login

# .envをコピーする
> cp .env.example .env

# encryption keyを生成する
> php artisan key:generate

# モジュールをダウンロード
> composer update
> php artisan cache:clear
> php artisan config:clear
# テーブルとテストデータの作成
> php artisan migrate:fresh --seed
> chmod 777 -R bootstrap/cache
> chmod 777 -R storage

# テスト用の画像をS3（Minio）にアップロードします。
> php artisan s3upload

# アップロードした画像を参照できるようにシンボリックリンクを作成する
> cd public
> ln -s ../storage/app/public uploads

# フロントエンドをビルドする。
$ cd htdocs
$ yarn && yarn run dev

# ブラウザでアクセス（フロント）
$ open https://localhost/

# ブラウザでアクセス（管理画面）
$ open https://localhost/admin/

# バッチを実行する（商品CSV出力バッチ）
$ ./dc.sh php login
$ php artisan stockcsv

# サーバーを停止する場合
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



# Dockerの起動
```
docker-compose -f docker/docker-compose.yml up -d
```

# Webアプリケーション側の環境構築
```
docker-compose -f docker/docker-compose.yml exec app sh

# Next.jsのインストール
> yarn
> yarn dev
```

# Firebase側の環境構築
```
docker-compose -f docker/docker-compose.yml exec firebase sh

# Firebaseにログイン
> firebase login
> firebase init

# エミュレータを起動します
> firebase emulators:start --import data --export-on-exit
```

# エミュレータをブラウザで表示します
```
open http://localhost:4000/
```

# ローカルで Cloud Functions を実行してみます。
```
cd functions
yarn build

# Hello World
curl http://localhost:5001/nextjs-typescript-firestore/us-central1/api/helloWorld

# 投稿データをPOST
curl -X POST -H "Content-Type: application/json" -d @post.json http://localhost:5001/nextjs-typescript-firestore/us-central1/api/posts
# 投稿データの一覧を取得する
curl http://localhost:5001/nextjs-typescript-firestore/us-central1/api/posts
```


# Dockerの停止
docker-compose -f docker/docker-compose.yml down

## Licence

[MIT](https://github.com/isystk/nextjs-typescript-sample/LICENCE)

## Author

[isystk](https://github.com/isystk)


