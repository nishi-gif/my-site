────────────────────────────────────────
React Website Template
(React + React Router + Tailwind CSS)
────────────────────────────────────────

【概要】
本プロジェクトは、React / React Router / Tailwind CSS を用いて構築した
汎用 Web サイトテンプレートです。
企業サイト・プロダクトサイト・ポートフォリオなど幅広い用途を想定しています。

また、IRサイト用途を想定し、
データ差し替えのみでページ内容を変更できる構成としており、
将来的には Next.js 版テンプレートへの発展を前提としています。

────────────────────────────────────────
【特徴 / Features】

・React（Create React App）ベース
・React Router による SPA 構成
・Tailwind CSS によるレスポンシブ対応
・Header / Footer / Navigation の共通レイアウト
・News / Products の仮データを map() により動的生成
・GitHub → Vercel 自動デプロイ対応
・社内テンプレートとして再利用可能

────────────────────────────────────────
【ページ構成 / Pages】

/ Home
/about About
/contact Contact
/news ニュース一覧
/news/:id ニュース詳細
/products 商品一覧（グリッド表示）
/products/:id 商品詳細

────────────────────────────────────────
【ディレクトリ構成】

src/
components/
Header.jsx
Footer.jsx
Navigation.jsx
Layout.jsx

pages/
Home.jsx
About.jsx
Contact.jsx
NewsList.jsx
NewsDetail.jsx
ProductList.jsx
ProductDetail.jsx

data/
news.js
products.js

App.js
index.js
index.css

────────────────────────────────────────
【動作環境】

・Node.js：v18 以上 推奨
・npm：v9 以上

────────────────────────────────────────
【セットアップ手順】

依存関係のインストール
npm install

開発サーバ起動
npm start

ブラウザでアクセス
http://localhost:3000

本番ビルド
npm run build

────────────────────────────────────────
【自動デプロイ】

GitHub の main ブランチへ push すると
Vercel へ自動デプロイされます。

公開 URL：
https://my-site-teal-chi.vercel.app/

────────────────────────────────────────
【カスタマイズ方法（データ差し替え）】

以下のファイルを編集することで表示内容を変更できます。

例：ニュース一覧
src/data/news.js（または news.json）

[
{
"id": 1,
"date": "2026-01-05",
"title": "決算説明資料を掲載しました",
"url": "/documents/sample.pdf"
}
]

────────────────────────────────────────
【よくあるエラー・注意点】

・react-scripts: command not found
　→ npm install が未実行です。再度実行してください。

・起動時にエラーが出る
　→ Node.js のバージョンを確認してください。（v18以上推奨）

・ポート3000が使用中
　→ 他のプロセスを停止するか、別ポートで起動してください。

────────────────────────────────────────
【Next.js 版への発展予定】

・src/pages/ を app/ ディレクトリへ移行
・データ配置を /public/data/ または /src/data/ に統一
・Vercel デプロイ前提の構成へ変更予定

────────────────────────────────────────