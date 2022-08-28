$(document).ready(function() {
    $('.multiscroll').multiscroll({
    // ここにオプションを指定する
      sectionsColor: ['#1b2735', '#1b2735', '#1b2735', '#1b2735'], // セクションごとの背景色
      anchors: ['first', 'second', 'third', 'fourth'], // アンカーリンクの設定
      menu: '#nav', // メニューの親要素
      paddingTop: 50, // 固定ヘッダー分の上paddingを取ることが出来ます。
      paddingBottom: 0, // 固定フッター分の下paddingを取ることが出来ます。
      navigation: true, // 右のナビゲーションの有効化
      navigationPosition: 'right', // ナビゲーションの位置
      navigationTooltips: ['About my creation', 'Function', 'How to use','Let`s try data.library!'], // ナビゲーションのツールチップ
      easing: 'easeInOutBack', // イージング（jquery.easings.min.jsを読み込む）
      scrollingSpeed: 500, // イージングのスピード
      loopTop: true, //「true」にすると最初のセクションから上にスクロールした時に、最後のセクションに移動するようになる。
      loopBottom: true, //「true」にすると最後のセクションから下にスクロールした時に、最初のセクションに移動するようになる。
      css3: true, //「true」にするとCSSのtransformでアニメーションします。非対応ブラウザはjQueryでのアニメーションになる。
      keyboardScrolling: true, // キーボードによるスクロールを有効にする（falseで無効）
      touchSensitivity: 10 // スマートフォンなどのタッチデバイスで、どの程度までスワイプしたらスクロールするか調整できる。（%）
    });
  });