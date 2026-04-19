# 技術英語トレーニング

技術英語の文構造と語彙を学習するオンライン練習アプリ。完全に事前コンパイル済みの静的ファイルで構成されており、GitHub Pages に push するだけで動作する。

## 構成

```
.
├── index.html                 # ランディングページ（/）
├── tailwind.css               # 事前コンパイル済みCSS（全ページ共有）
├── practice/
│   ├── index.html             # 文構造トレーニング（/practice/）
│   └── app.js                 # 事前コンパイル済みJS
├── vocabulary/
│   ├── index.html             # 語彙トレーニング（/vocabulary/）
│   └── app.js                 # 事前コンパイル済みJS
├── .nojekyll                  # GitHub PagesのJekyll処理を無効化
├── .gitignore
└── README.md
```

## 特徴

- **ビルド不要（K側で）**　Tailwind CSS と Babel は事前コンパイル済み。push するだけで動く
- **本番警告なし**　CDN版Tailwindや Babel Standaloneの「本番用じゃない」警告は出ない
- **軽量**　合計 153KB、React と ReactDOM のみ外部CDN（unpkg）依存
- **自動保存**　`localStorage` で進捗保持。途中で閉じても続きから始められる
- **教員モード**　出席番号と氏名の両方に `22` を入力すると教員用チートモード発動（解答展開・語数制限解除・セクション移動自由）

## GitHub Pages へのデプロイ手順

### 1. 新規リポジトリを作成

GitHub で新しい public リポジトリを作成する。リポジトリ名はたとえば `tech-english`。

### 2. このディレクトリの中身をすべて push

```bash
cd gh-deploy
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/{ユーザー名}/{repo名}.git
git push -u origin main
```

### 3. GitHub Pages を有効化

リポジトリの **Settings → Pages** に移動：

- **Source**　Deploy from a branch
- **Branch**　`main` / `/ (root)`

保存後、数十秒〜数分で公開される。

### 4. URL の確認

```
https://{ユーザー名}.github.io/{repo名}/
```

たとえばユーザー名が `kaoruko-takechi`、リポジトリ名が `tech-english` なら：

```
https://kaoruko-takechi.github.io/tech-english/           # ランディング
https://kaoruko-takechi.github.io/tech-english/practice/  # 文構造トレーニング
https://kaoruko-takechi.github.io/tech-english/vocabulary/ # 語彙トレーニング
```

## 問題の追加・修正

`practice/app.js` または `vocabulary/app.js` 内の `SECTIONS` 配列または `VOCAB_GROUPS` 配列を編集して push する。GitHub の Web UI から直接編集することも可能。

新しい Tailwind クラスを追加した場合のみ、`tailwind.css` の再コンパイルが必要。Claudeに「Tailwind を再コンパイルして」と依頼すれば即対応する。

## ライセンス

© 2026 Kaoruko Takechi · All rights reserved.
