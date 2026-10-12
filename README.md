# DB_Security_Audit

Firebase client-side audit harness for registration, mass-assignment, and admin
collection probes.

## Why this exists

School and SaaS admin panels often expose Firebase APIs with weak rules. This toolkit
automates a three-stage access-control check for authorized assessments only — not for
opportunistic scanning.

## Features

- Open-registration and privilege-escalation write probes
- Admin collection read signal with structured console reporting
- TypeScript entry with Jest-covered audit helpers

## Install

```bash
git clone https://github.com/HackerX-offical/DB_Security_Audit.git
cd DB_Security_Audit
npm install
```

## Quick start

```bash
npm run start:ts
```

## Output

Colorized step logs (pass/fail per stage) and JSON-friendly error objects from
`audit-utils`.

## Develop

```bash
npm test
npm run format:check
```

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module layout and extension points.

## Ethics

Use only on systems and content you are **authorized** to test. See
[SECURITY.md](./SECURITY.md).

## License

Licensed under the [HackerX License](./LICENSE). Redistributions must retain copyright,
license text, and [NOTICE](./NOTICE) attribution per the license terms.
