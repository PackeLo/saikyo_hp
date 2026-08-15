# 雑居ビル ホームページ

静的HTMLとTailwind CSSで構成したサークルサイト。

## 開発

```bash
npm install
npm run dev
```

Viteの開発サーバーが起動し、HTMLやTailwindクラスの変更が即時反映される。

## ビルド

```bash
npm run build
npm run preview
```

Cloudflare Pagesへ配置する成果物は `dist/` に生成される。

## スタイル構成

- レイアウトとコンポーネントのスタイルは `index.html` のTailwindユーティリティで定義する。
- `src/styles.css` はTailwindの読み込み、ローカルフォント、共通デザイントークンだけを持つ。
- 任意値は原則として `rem` を使い、利用者のルートフォントサイズ設定に追従させる。
