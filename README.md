This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

This project requires SendGrid configuration for the contact form to work properly.

### Required Environment Variables

- `SENDGRID_API_KEY` - Your SendGrid API key (required)

### Optional Environment Variables (with defaults)

- `SENDGRID_FROM_EMAIL` - Email address to send from (default: `ClearEdge <noreply@leadstream.co.nz>`)
- `SENDGRID_TO_EMAIL` - Email address to receive contact form submissions (default: `support@clearedge.co.nz`)
- `SENDGRID_CC_EMAIL` - CC email address for contact form submissions (default: `marketing@pinpoint.digital`)

### Setting up SendGrid

1. Create a SendGrid account at [sendgrid.com](https://sendgrid.com)
2. Go to Settings → API Keys in your SendGrid dashboard
3. Create a new API key with "Full Access" or "Mail Send" permissions
4. Copy the API key

### Configuring on Netlify

1. Go to your Netlify site dashboard
2. Navigate to **Site configuration** → **Environment variables**
3. Add the following environment variable:
   - Key: `SENDGRID_API_KEY`
   - Value: Your SendGrid API key
4. (Optional) Add any of the optional email configuration variables if you want to override the defaults
5. Redeploy your site for the changes to take effect

**Important:** Without `SENDGRID_API_KEY` configured, the contact form will display the error: "Email service is not configured. Please contact support."

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
