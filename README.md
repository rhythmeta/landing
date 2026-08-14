# Rhythmeta Landing

Rhythmeta 组织落地页，使用 Vue 3、TypeScript 和 Vite 构建。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建

```bash
pnpm build
```

构建产物位于 `dist/`。

## Cloudflare Pages

- Build command: `pnpm build`
- Build output directory: `dist`
- Node.js version: `22`

也可以使用 Wrangler 部署：

```bash
pnpm deploy
```

Wrangler 使用 `CLOUDFLARE_API_TOKEN` 时，Token 需要绑定目标账号并包含：

- `Account / Cloudflare Pages / Edit`
- `Account / Account Settings / Read`

Token 更新后重新执行 `pnpm deploy`。本地 OAuth 登录可以使用：

```bash
unset CLOUDFLARE_API_TOKEN
pnpm dlx wrangler login
pnpm deploy
```

Cloudflare Pages 原生 Git 部署使用以下设置：

- Build command: `pnpm build`
- Build output directory: `dist`
- Deploy command: 留空

Pages 会在构建完成后自动发布 `dist`。Wrangler 部署适用于本地终端或外部 CI。
