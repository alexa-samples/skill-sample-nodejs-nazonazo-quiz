# Alexaスキル「なぞなぞクイズ」
<img src="https://m.media-amazon.com/images/G/01/mobile-apps/dex/alexa/alexa-skills-kit/tutorials/quiz-game/header._TTH_.png" />

# ** このリポジトリはアーカイブされています **
このリポジトリは、ポイントインタイムリファレンスとして引き続き利用できますが、それ以上の更新やサポートは優先されません。

# ** This repository has been archived **
This repository is still available as a point-in-time reference, but no further updates or support will be prioritized.


このページではAmazonが提供する動画教材シリーズ「Alexa道場：シーズン5 SSML」で使用されたサンプルスキル「なぞなぞクイズ」のソースコードや関連リンクを公開しています。以下の動画教材と合わせてみていただくことで、SSMLを活用したスキルの作成方法を学ぶことができます。

[![](https://img.youtube.com/vi/r_pyllXKC30/0.jpg)](https://www.youtube.com/watch?v=r_pyllXKC30)



Season 5 SSML のプレイリストへの[リンク](https://www.youtube.com/watch?v=r_pyllXKC30&list=PLan9XPu5-9zxEkJeM68TCwfHG-wINLQMn)
　　　
# Alexaスキル「なぞなぞクイズ」のビルド手順

「なぞなぞクイズ」スキルをすばやくビルドしてテストするには、以下の手順に従ってください。

## Alexa開発者コンソールでAlexaスキルをセットアップする(Alexa Hosted)

Alexa-hostedスキルを使うと、開発者コンソールのみでスキルの編集からビルド、公開まで行うことができます。開発者コンソールには、スキルのバックエンドのプログラムコードを管理およびデプロイするためのコードエディターが含まれます。
Alexa-Hostedスキルが提供するサービスについての詳細はブラウザの新しいタブを開き、[こちら](https://developer.amazon.com/docs/hosted-skills/build-a-skill-end-to-end-using-an-alexa-hosted-skill.html) のページを参照してください。

## Alexa開発者コンソールへのアクセス

1. **[Amazonの開発者ポータル](https://developer.amazon.com/ja/)**を開き、画面右上の**ログイン**をクリックします。（開発者アカウントをお持ちでない場合は、ここで新規で登録する必要があります。開発者アカウントの登録は無料です。）
2.   ログインできたら、**[Alexa](https://developer.amazon.com/ja/alexa)**のリンクをクリックします。Alexaの開発者ポータルの画面が開きます。
3.  画面上部の**Alexa Skills Kit (ASK)**をクリックし、プルダウンメニューから**開発者コンソール**をクリックします。

## 対話モデルのビルド

![対話モデルのビルド](./instructions/build_interaction_modell.gif)


1. **Alexaの開発者コンソール**が開いたら、画面右側の**スキルの作成**ボタンをクリックします。
1.  **スキル名**を入力します。ここでは「なぞなぞクイズ」と入力します。デフォルトの言語は**日本語(日本)**のままにします。
1. スキルに追加するモデルの選択では、**カスタム** を選択します。スキルのバックエンドリソースをホスティングする方法を選択では、**Alexa-Hosted(Node.js)** を選択し、画面右上の**スキルを作成** ボタンをクリックします。
1. スキルに追加するテンプレートを選択では**Hello Worldスキル**を選択し、**選択**ボタンをクリックします。スキルのビルドが開始されます。完了までには1分ほどかかります。完了するとコンソールの**ビルド**タブが開きます。
1. 左側のナビゲーションパネルの**呼び出し名**をクリックし、**スキルの呼び出し名**を入力します。これはユーザーがあなたのスキルを起動させるときに言わなければならない名前になります（スキル名と同じでも異なっていても構いません）。ここでは「なぞなぞクイズ」と入力します。
1. 次に、左側のナビゲーションパネルから**JSONエディター**を開きます。テキスト編集フィールドの既存のコードを全て削除し、[対話モデル](./models/ja-JP.json)のコードに置き換え、**モデルをビルド**をクリックします。ビルドにはしばらく時間がかかります。
1. ビルドが完了したら次の手順「スキルコードのデプロイ」に進みます。


## スキルコードのデプロイ

![スキルコードのデプロイ](./instructions/deploy_code.gif)

1. Alexa開発者コンソールを開き、ページ上部の**コードエディタ**タブをクリックします。
2.  左側のパネルにフォルダーとファイルが表示されます。[**index.js**](./lambda/index.js) のコードを変更し、**保存**ボタンをクリックしてから、**デプロイ**ボタンをクリックします。 これにより、Alexa-Hostedサービスが自動的に管理する Lambda関数にコードがデプロイされます。
3. スキルコードのデプロイが完了したらスキルは完成です。次の手順「スキルのテスト」に進みます。

## スキルのテスト

1. Alexa開発者コンソールのトップのナビゲーションメニューから[**テスト**]タブを選択して、**Alexaシミュレーター**を開きます。
	* ブラウザが、パソコンのマイクへのアクセス許可を要求する場合があります。マイクの使用を推奨しますが必須ではありません。マイクを使用しない場合は、Alexaシミュレーターにユーザーの発話を音声で入力するかわりに、キーボードで手入力する必要があります。
2. 初めてテストの画面を開くとき、[このスキルでは、テストは無効になっています。]というメッセージが表示されます。テストモードを有効にするには、ドロップダウンメニューをクリックし**非公開** を **開発中** に変更します。すると、画面下部のAlexaシミュレーターの画面がアクティブになります。
3. スキルの動作をテストするには、左側パネルの上部にあるテキストボックスを使用してユーザーの音声の入力をします。スキルを起動する際、ウェイクワードを含む必要はありません。
	1. パソコンのマイクを使用する場合は、マイクのアイコンをクリックしたままの状態で、マイクに向かって話しかけます。
	2. キーボードで入力する場合は、テキストボックスにユーザーの発話をタイプ入力します。
	3. 音声またはテキストで「なぞなぞクイズを開いて」と入力してみましょう。

## mp3オーディオファイルの再生をテストする 

スキルでmp3オーディオを再生する方法については、Alexa 道場 シーズン5 [エピソード5](https://youtu.be/r_pyllXKC30)で学習します。

![mp3オーディオファイルの再生](./instructions/using_mp3_audio.gif)

1. **index.js**のコードは標準ではAlexaサウンドライブラリの音声を使うコードになっています。mp3のサンプルオーディオファイルを試したい場合は、あらかじめ[**assets**](./assets)フォルダにあるmp3ファイルをAlexa-Hostedが提供するS3のストレージにアップロードします。
3. GitHubの[**assets**](./assets)フォルダにある３つのmp3ファイルをローカルにダウンロードします。
2. **コードエディタ**の画面を開きます。
3. 画面左下の「**メディアストレージ：S3**」をクリックします。
4. ブラウザの別タブにAWS S3の画面が開きます。
5. **アップロード**ボタンをクリックし、先ほどダウンロードした３つのmp3ファイルをアップロードします。
6. Alexa開発者コンソールのコードエディタの画面に戻ります。
7. LaunchRequestHandler および AnswerInterntHandler のhande()メソッド内の**サウンドライブラリを使う場合**のコードをコメントアウトし、**独自のMP3オーディオファイルを使う場合**のコメント部を外し有効にします。
8. コードを保存しデプロイし、スキルをテストします。mp3オーディオが再生することを確認してください。


## 追加のリソース

### ドキュメント

* [音声合成マークアップ言語（SSML）のリファレンス](https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html) - 音声合成マークアップ言語（SSML）を応答に使用することで、Alexaの音声を生成する方法を制御できます。

* [Alexa Skills Kitサウンドライブラリ](https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/ask-soundlibrary.html) - スキルで使用できる音響効果のセットが用意されています。

* [Speechconリファレンス（感嘆詞）: 日本語](https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/speechcon-reference-interjections-japanese.html) - Speechconsは、Alexaがより表情豊かに発話する特別な語句やフレーズです。

* [スキルにAmazon Pollyの音声を使用するためのユーザーエクスペリエンスガイドライン](https://developer.amazon.com/ja-JP/docs/alexa/custom-skills/guidelines-ux-amazon-polly-skills.html) - ユーザーにとって使いやすいエクスペリエンスになるよう、このガイドラインに従ってください。

* [Alexa Skills Kit Node.js SDK](https://www.npmjs.com/package/ask-sdk) - Alexa Skills Kit SDK for Node.js の公式ドキュメント

*  [Alexa Skills Kit Documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Alexa Skills Kit の技術文書

### コミュニティ
* [Amazon 開発者フォーラム(日本語)](https://forums.developer.amazon.com/spaces/293/index.html) - Alexaのスキル開発でわからないことがあればこちらに投稿し、Alexaコミュニティからのアドバイスをもらうことができます。

* [Alexa 開発者ポータル](https://alexa.design) - Alexaに関する全ての情報にアクセスできるポータルサイト。
