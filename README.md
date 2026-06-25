# Vite+ nested config vs root overrides

This is an demo of the problem mentioned in [voidzero-dev/vite-plus#997(4794)](https://github.com/voidzero-dev/vite-plus/issues/997#issuecomment-4794853013).

The demo is basically a workspace managed with pnpm and Vite+, it has two sub packages and some root level files (scripts)

```bash
.
├── vite.config.ts
├── scripts
│   └── <some runnable scripts files, it is part of root>
├── package_a
│   ├── vite.config.ts
│   └── <some project code>
└── package_b
    ├── vite.config.ts
    └── <some project code>
```

In this workspace, most of files are normal typescript files, so we hope to enable workspace-level `typescript` plugin. However, code in `package_b` is not expected to be linted with `typescript` rules for some reasons (like copied from upstream, generated type, migrating project).

`nested` and `override` are two config styles to achieve this goal. For now, Vite+ does not support `nested` config because the `-c` injection, we can use `VP_VERSION=1 oxlint` instead.

Some core files:

- [`nested/share-config.ts`](./nested/share-config.ts), includes the config for `package_a` and project root.
- [`override/package_b/vite.config.ts`](./override/package_b/vite.config.ts), includes the code we disable all `typescript` rules by hand.
