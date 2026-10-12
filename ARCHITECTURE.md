# DB_Security_Audit architecture

Firebase client-side audit harness (registration, mass-assignment write, admin collection probe).

```
index.ts           # Live audit workflow
audit-utils.ts     # Testable helpers (email generation, errors)
```

Run only with written authorization for the target Firebase project.
