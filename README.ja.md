# 開発時メモ

## firebase-admin

ネット上にいろいろな不正確な情報が反乱しているが、参照すべきはGoogle Cloudのガイド、リファレンス、サンプル。

nodejs つまり、サーバー側では firebase-admin パッケージを利用できる。
しかし、ファイル (fs) パッケージを利用しているため、
クライアント側では使えない

クライアント側では firebase/(app,firestore,storage,auth) を利用すべし。
クライアント側から firebase-admin を利用するには、APIにして fetch で結果を返す構成にすること。

## firecms

FireCMSまたはFirebaseCMSフレームワークから、CMSアプリを作るときに便利。

いくつかのフックはフレームワークからはなれて利用することができる。
現在は利用していない。過去資産を利用するため、直接データソースを読み込んでいる。

将来的には、FireCMSのフックを利用してもよいが、
FireCMSに依存してしまうのもどうかと思っている。

## イメージ、ビデオファイルの格納場所

サイズが大きくなりがちなので、Gitで管理しないようにしたい。
そのため、Firebase Storageに格納するようにしている。

## 複数サイトプロジェクト

このプロジェクトには２つのWebサイトがある。

１つはホームページ( sites/website )、もう一つは予約カレンダー( sites/meet )。

これらのデプロイターゲットは .firebaserc で構成され、
各機能(firestore, hosting, storage, emulators)は、
firebase.json で構成される。

サイトは、FirebaseコンソールでGUIで作成できる他、
CLIからも作成できる。GUIのほうが簡単なのでそちらで作成した。

CLIから、どんなサイトがあるか表示するには、以下を実行する。

    firebase hosting:sites:list

作成したサイトのターゲット名は、CLIで作成する。
サイト makise-seikotsu-web の hosting をデプロイするターゲット名を
website にするには、以下を実行する。

    firebase target:apply hosting website makise-seikotsu-web
    
サイト meet-up-makise の hosting のデプロイターゲット名を meet にするには、
以下を実行する。

    firebase target:apply hosting meet meet-up-makise

複数サイトの構成は、firebase.json の hosting キーを配列にして構成を記述する。

    file: firebase.json
    -------------------
      "hosting": [
        {
          "target": "website",
          "source": "sites/website",
          // ...
        },
        {
          "target": "meet",
          "source": "sites/meet",
          // ...
        }
      ],
      
各種実行方法

emulator:
    firebase emulators:start --only hositng:website

deploy:
    firebase deploy --only hosting:meet

プレビューチャンネルにデプロイ
    firebase hosting:channel:deploy makise-web --only makise-web
