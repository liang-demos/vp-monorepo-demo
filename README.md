# Vite+ nested config vs root overrides

This repository keeps two copies of the same monorepo:

- `nested/` shows the desired nested `vite.config.ts` model.
- `override/` expresses the same lint and format intent with the currently
  supported root `lint.overrides` and `fmt.overrides`.

The examples cover:

- a Node.js CLI with `console.log`, the Node lint plugin, and Vue TUI files;
- a Vue website with a colocated fake package;
- a library that contains a CLI entry and only overrides those CLI files.

Vite+ currently reads workspace lint and format configuration from the root `vite.config.ts`. The nested package configs are intentionally illustrative and are not expected to make `vp lint` pass yet.

## Formatting

Format both workspaces:

```bash
just fmt
```

Check both workspaces before committing:

```bash
just
```
