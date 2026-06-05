# saikyo_hp

Starry Atelier の叩き台を React で実装した静的サイトです。

## 開発

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

ビルド成果物は `dist/` に出力されます。

## Cloudflare Pages にデプロイ

「`main` ブランチへ push したら自動デプロイ」にしたい場合は、Cloudflare Pages の **Git integration** でプロジェクトを作るのがおすすめです。
この方法なら、初回セットアップ後はローカルPCから `main` に push するだけで本番環境が更新されます。

> 注意: Wrangler の Direct Upload で作った Pages プロジェクトは、Git連携プロジェクトとは扱いが異なります。
> `main` push で自動デプロイしたい場合は、Cloudflare Pages 作成時に **Connect to Git** を選んでください。

### 推奨: GitHub連携で自動デプロイ

1. このリポジトリをGitHubにpushします。
2. Cloudflare dashboard で **Workers & Pages** を開きます。
3. **Create application** → **Pages** → **Connect to Git** を選びます。
4. GitHubを認可し、このリポジトリを選択します。
5. ビルド設定を以下にします。

| 項目 | 値 |
| --- | --- |
| Project name | `saikyo-hp`（変更可） |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | リポジトリ直下 |

#### Cloudflare画面で迷ったとき

- **Build Command** と **Deploy Command** は同じではありません。Cloudflare Pages のGit連携では、基本的に入力するのは **Build command: `npm run build`** です。
- **Deploy Command** 欄が出ている場合は、Cloudflare Workers のGit連携画面に入っている可能性があります。このサイトは静的サイトなので、**Workers** ではなく **Pages** の **Connect to Git** から作成してください。
- **Build output directory** の入力欄が見つからない場合は、Framework presetを `None` / `No framework` / `React (Vite)` などに切り替えるか、Advanced / Build settings を展開して `dist` を指定してください。
- それでも出てこない場合は、リポジトリ内の `wrangler.toml` に `pages_build_output_dir = "./dist"` を入れてあるので、Cloudflare側はこの設定から公開ディレクトリを読めます。

6. **Save and Deploy** で初回デプロイします。
7. 以降は `main` ブランチにpushすると自動で本番デプロイされます。

### ブランチ設定

Cloudflare Pages のプロジェクト設定で、以下を確認してください。

- **Settings** → **Builds & deployments** → **Branch control**
- Production branch: `main`
- Enable automatic production branch deployments: ON

プレビュー環境が不要なら、Preview branch deployments は `None` にしてもOKです。
PRや作業ブランチの確認URLが欲しい場合は、Preview branch deployments を有効にしておくと便利です。

### 手動アップロードしたい場合のみ

Git連携ではなく、手元から直接アップロードしたい場合だけWranglerを使います。
通常の自動デプロイ運用では実行不要です。

```bash
npx wrangler login
npm run deploy:direct
```

### カスタムドメインを使う場合

Cloudflare Pages のプロジェクト画面から Custom domains を追加してください。
既にCloudflareでDNS管理しているドメインなら、案内に従って対象ドメインを選ぶだけで設定できます。
