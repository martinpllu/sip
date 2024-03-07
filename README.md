# sip

Bolerplate for super simple serverless web apps!

- All HTML rendered on the server side with [HTMX](https://htmx.org), running on AWS Lambda
- Typescript everywhere
- Zero client-side Javascript
- Infrastructure and Auth courtesy of [SST](https://sst.dev)
- [Neon](https://neon.tech) for serverless Postgres, with [Drizzle](https://orm.drizzle.team) for database access and migrations
- [hono](https://hono.dev) for ultra lightweight routing, middleware and page rendering via JSX.

## Demo

- [TodoMVC app](https://nwcjwgqs3m.execute-api.eu-west-1.amazonaws.com/)
- [App code](https://github.com/martinpllu/sip/blob/master/src/app.tsx)

## Hosting in your own AWS/Neon account

This assumes that you have `pnpm` installed and have some basic familiarity with sst, neon etc.

- Clone the repo: `git clone https://github.com/martinpllu/sip`
- Run `pnpm install`
- Edit `sst.config.ts` to replace `eu-west-1` with your preferred region
- Create a database on https://neon.tech and take a note of the connection string.
- Run ` npx sst secrets set DATABASE_CONNECTION_STRING "MY_CONNECTION_STRING"` replacing `MY_CONNECTION_STRING` with your database connection string. Make sure to include the quotes around `MY_CONNECTION_STRING`.
- Run `pnpm db:run-migrations`
- Create an OAuth client ID for "Log in with Google" via https://console.developers.google.com/
- Run ` npx sst secrets set CLIENT_ID "MY_CLIENT_ID"`
- Run `pnpm dev` and test your app.

## TODO

- Extend run-query to allow stage to be specified in CLI
- Cloudfront distro, custom domain name in demo
- Deploy static assets to S3 bucket
- Can the faster/cheaper APIG HTTP API be used instead of REST APIs?