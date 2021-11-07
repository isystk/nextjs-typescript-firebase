nextjs-typescript-sample
====

```
.
└── docker/
  ├── web/
  │   ├── docker-compose.yml
  │   ├── Dockerfile
  │   └── Next.jsのコード諸々
  └── app/
      ├── Dockerfile
      └── Firebaseのコード諸々
```


# Dockerの起動
docker-compose -f docker/docker-compose.yml up -d

# Webアプリケーション側の環境構築

docker-compose -f docker/docker-compose.yml exec app sh

#### Next.jsのインストール
> npx create-next-app --example with-typescript-eslint-jest
> yarn dev


# Firebase側の環境構築

docker-compose -f docker/docker-compose.yml exec firebase sh

> firebase login
> firebase init

# エミュレータを起動します
> firebase emulators:start

# エミュレータをブラウザで表示します
open http://localhost:4000/

# ローカルで Cloud Functions を実行してみます。
cd functions
yarn build
open http://localhost:5001/nextjs-typescript-firestore/us-central1/api/helloWorld


curl -X POST -H "Content-Type: application/json" -d @post.json http://localhost:5001/nextjs-typescript-firestore/us-central1/api/posts/save



# Dockerの停止
docker-compose -f docker/docker-compose.yml down

## Licence

[MIT](https://github.com/isystk/nextjs-typescript-sample/LICENCE)

## Author

[isystk](https://github.com/isystk)


