# Relay corporate website

Responsive corporate website for Relay, a pre-launch project developing USSD-first blockchain access infrastructure on Solana.

## Requirements

- Node.js 20+
- npm

## Local development

```sh
npm install
npm run dev
```

Visit http://localhost:3000.

## Verification

```sh
npm run typecheck
npm run build
npm start
```

## Enquiry form delivery

The contact, partnership, and investor forms submit to `/api/enquiry`. In local development, submissions are appended to `.data/enquiries.jsonl` with restricted file permissions. This is a local development convenience, not a production enquiry inbox.

Before production deployment, configure at least one delivery method in the hosting environment:

### Resend email

Set `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, and `ENQUIRY_FROM_EMAIL`. The sender address must be verified with Resend. Form submissions will be emailed to the configured recipient, with the submitter's address as `reply_to`.

### HTTPS webhook

Set `ENQUIRY_WEBHOOK_URL` to an HTTPS endpoint managed by the company (such as an authenticated workflow or CRM intake endpoint). Relay posts enquiry JSON to the endpoint and requires a successful response. The destination must be protected and have an appropriate access policy.

For a self-hosted Node deployment that intentionally stores enquiries in local JSONL files, set `ENQUIRY_FILE_STORE=true`, provision persistent disk, and establish secure access and retention/deletion procedures. This is not a good fit for ephemeral/serverless filesystems.

If production delivery is not configured, submissions fail visibly with a service-unavailable error; the form does not display a false success state. For availability and reliability at scale, use a managed delivery service with its own server-side rate limiting and monitoring. The built-in small in-memory rate limit is a basic abuse safeguard and is not a substitute for deployment-level protection.

Copy `.env.example` to `.env.local` for local configuration. Do not commit secrets.

## Company details to supply before launch

In `src/content/site.ts`, replace the example canonical URL and add the official company email and verified social profiles. Populate the founder profile only with authentic company-provided information. Configure the real domain, review the privacy notice and terms with counsel, and verify data retention and privacy practices before production publication.

## Deployment

Deploy to a Node-compatible Next.js host, set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS domain, and configure at least one production enquiry delivery provider. See `.env.example` for the full list of variables.
