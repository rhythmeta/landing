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
pnpm dlx wrangler pages deploy dist --project-name rhythmeta-landing
```
