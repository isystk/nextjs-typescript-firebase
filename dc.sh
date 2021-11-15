#! /bin/bash

DOCKER_HOME=./docker
DOCKER_COMPOSE="docker-compose -f ${DOCKER_HOME}/docker-compose.yml"

function usage {
    cat <<EOF
$(basename ${0}) is a tool for ...

Usage:
  $(basename ${0}) [command] [<options>]

Options:
  stats|st                 Dockerコンテナの状態を表示します。
  init                     Dockerコンテナ・イメージ・生成ファイルの状態を初期化します。
  start                    すべてのDaemonを起動します。
  stop                     すべてのDaemonを停止します。
  apache restart           Apacheを再起動します。
  mysql login              MySQLデータベースにログインします。
  mysql export <PAHT>      MySQLデータベースのdumpファイルをエクスポートします。
  mysql import <PAHT>      MySQLデータベースにdumpファイルをインポートします。
  mysql restart            MySQLデータベースを再起動します。
  php login                PHP-FPMのサーバーにログインします。
  php cache                Laravelのキャッシュをクリアします。
  php migrate              Laravelのマイグレードを実行します。
  php seed                 Laravelのテストデータを登録します。
  build                    フロントエンドをビルドします。
  build prod               本番用にフロントエンドをビルドします。
  --version, -v     バージョンを表示します。
  --help, -h        ヘルプを表示します。
EOF
}

function version {
    echo "$(basename ${0}) version 0.0.1 "
}


case ${1} in
    stats|st)
        docker container stats
    ;;

    init)
        # 停止＆削除（コンテナ・イメージ・ボリューム）
        pushd $DOCKER_HOME
        docker-compose down --rmi all --volumes
        rm -Rf $DOCKER_HOME/firebase/src && mkdir $DOCKER_HOME/firebase/src && chmod 777 $DOCKER_HOME/firebase/src
    ;;

    start)
        $DOCKER_COMPOSE up -d
    ;;
    
    stop)
        pushd $DOCKER_HOME
        docker-compose down
        popd
    ;;

    firebase)
      case ${2} in
          login)
              COMMAND="firebase login"
              $DOCKER_COMPOSE exec firebase $COMMAND
          ;;
          logout)
              COMMAND="firebase logout"
              $DOCKER_COMPOSE exec firebase $COMMAND
          ;;
          start)
              COMMAND="firebase emulators:start --import data --export-on-exit"
              $DOCKER_COMPOSE exec firebase $COMMAND
          ;;
          *)
              usage
          ;;
      esac
    ;;
    
    functions)
      case ${2} in
          build)
            pushd ./docker/firebase/src/functions
            yarn build
            popd
          ;;
          *)
              usage
          ;;
      esac
    ;;
    
    help|--help|-h)
        usage
    ;;

    version|--version|-v)
        version
    ;;
    
    *)
        echo "[ERROR] Invalid subcommand '${1}'"
        usage
        exit 1
    ;;
esac


