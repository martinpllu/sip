# sip

Bolerplate for super simple serverless web apps!

- All HTML rendered on the server side with [HTMX](https://htmx.org), running on Lambda
- Typescript everywhere
- Zero client-side Javascript
- Infrastructure and Auth courtesy of [SST](https://sst.dev)
- [Neon](https://neon.tech) for serverless Postgres, with [Drizzle](https://orm.drizzle.team) for database access and migrations
- [hono](https://hono.dev) for ultra lightweight routing, middleware and page rendering via JSX.

## Demo

- [TodoMVC app](https://nwcjwgqs3m.execute-api.eu-west-1.amazonaws.com/)
- [App code](https://github.com/martinpllu/sip/blob/master/src/app.tsx)

## TODO

- Guide for hosting in your own account
  - Ideally the client id in src/auth.ts can be moved to Config - however how to allow the Auth function to bind the Config?
- Extend run-query to allow stage to be specified in CLI
- Cloudfront distro, custom domain name in demo
- Deploy static assets to S3 bucket
- Can the faster/cheaper APIG HTTP API be used instead of REST APIs?
- Cache busting