# FirstCV — Resume Studio and Services

A resume editor and personal resume customization service portal. Original FirstCV code; the Vinext and UI starter retains its bundled third-party notices.

## Included

- Three resume layouts, live editing, browser PDF export, keyword comparison and JSON backups.
- ChatGPT sign-in, owner-protected administration, and cloud resume storage in D1.
- Configurable service pricing, terms, privacy, support details and booking availability.
- Orders, customer/operator messages, private PDF uploads and delivery using R2.
- Razorpay order creation, HMAC verification, captured-payment checks, signed webhook handling and payment reconciliation.
- One revision per order, refund requests and provider-confirmed full-refund status.
- Printable payment receipts (not GST tax invoices).

## Running

Use Node 22.13+ and the package manager pinned in package.json. Install with pnpm, then run pnpm dev. Build with pnpm build. The application targets Cloudflare Workers with D1 and R2; it is not a static-only deployment. The free editor is available under public/studio.

Production schema is generated from db/schema.ts. Apply committed migrations exactly once through the hosting workflow. Do not run schema creation at request time.

## Verification

Run node tests/service.cjs and pnpm exec tsc --noEmit. Tests use real SQLite with simulated identity, object storage and payment network calls. They do not prove real merchant checkout, browser sign-in or payment settlement.

## Required launch configuration

1. Set ADMIN_EMAIL to the verified ChatGPT sign-in email for the operator as a server environment value.
2. In /admin, review prices, business identity, support address, service terms, privacy and refund policies.
3. Configure RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET and RAZORPAY_WEBHOOK_SECRET as server environment secrets. No secrets belong in frontend code or GitHub.
4. Configure /api/webhook for payment.captured and refund.processed, and validate checkout and refunds with the actual merchant account. Paid bookings require live keys.
5. Enable accepting orders from the owner dashboard only after those checks.

The free builder is usable while paid bookings are closed. The operator must perform the paid resume work and deliver PDFs. Email notifications, automatic refund initiation, AI writing, DOCX export and a custom domain are not implemented. Refunds are initiated by the operator in Razorpay, then reconciled in FirstCV. An interrupted provider-order creation is held for operator recovery rather than creating a second payment.

## Repository

https://github.com/pranaytembhurkar007-creator/firstcv

Pushing source does not deploy the upgraded service or activate merchant payments. Use the launch configuration above.
