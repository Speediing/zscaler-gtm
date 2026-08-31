# Zscaler x SpaceXAI

Password-gated sales site for Zscaler sellers. It shows three illustrative Grok Bot jobs:

- Turn live discovery into a next-meeting brief.
- Find approved answers and draft a response.
- Research a target account and draft personal outreach.

All account details are generic placeholders. The examples do not represent a Zscaler customer or account.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Set your own local `SITE_PASSWORD` in `.env.local`. Open [http://localhost:3000](http://localhost:3000).

## Check the content

```bash
npm run check:clean
```

The check rejects prior-customer terms, old brand asset names, the long dash character, and retired purple brand colors.

## Deployment settings

Use the slug `zscaler`. Set `SITE_PASSWORD` in the deployment environment. Do not put a real password in a tracked file.
