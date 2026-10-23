# TroyStone.dev

A cinematic, engineering-led personal site for Troy Stone: three decades of enterprise infrastructure, technology leadership, automation, and intelligent systems.

## Development

Use Node 22.23.4 or a newer patched Node 22 release. The lockfile pins the
tested security updates: Next.js/eslint-config-next 16.4.2, React/React DOM
19.3.1, and Sharp 0.35.5. Keep deployment runtime selection at that Node floor
or newer; dependency installation alone does not update the server's Node.

```bash
npm ci
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

Built with Next.js, TypeScript, Tailwind CSS, Motion, and a custom responsive design system.
