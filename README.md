# 技術英語トレーニング

技術英語の文構造と語彙を学習するオンライン練習アプリ。完全に事前コンパイル済みの静的ファイルで構成されており、GitHub Pages に push するだけで動作する。

## 構成（フラット構造）

```
.
├── index.html              # ランディングページ（/）
├── practice.html           # 文構造トレーニング（/practice.html）
├── practice-app.js         # 文構造用 JS
├── vocabulary.html         # 語彙トレーニング（/vocabulary.html）
├── vocabulary-app.js       # 語彙用 JS
├── tailwind.css            # 事前コンパイル済みCSS
├── .nojekyll               # GitHub PagesのJekyll処理を無効化
├── .gitignore
└── README.md
```

全ファイルをルートに配置することで、ブラウザからのアップロードが単純化されている（サブフォルダ不要）。

## 特徴

- **ビルド不要**　Tailwind CSS と Babel は事前コンパイル済み
- **本番警告なし**　CDN版Tailwindや Babel Standaloneの「本番用じゃない」警告は出ない
- **自動保存**　`localStorage` で進捗保持
- **教員モード**　出席番号と氏名の両方に `22` を入力すると教員用チートモード発動

## URL

GitHub Pages にデプロイすると、以下でアクセス可能：

```
https://{ユーザー名}.github.io/{repo名}/                    # ランディング
https://{ユーザー名}.github.io/{repo名}/practice.html       # 文構造トレーニング
https://{ユーザー名}.github.io/{repo名}/vocabulary.html     # 語彙トレーニング
```

## ライセンス

© 2026 Kaoruko Takechi · All rights reserved.
