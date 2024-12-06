# PSPDFKit for Web Example – Next.js

This example shows how to integrate [PSPDFKit for Web](https://pspdfkit.com/web/) into a [Next.js](https://nextjs.org) app.

## Prerequisites

- [Node.js](http://nodejs.org/)

## Support, Issues and License Questions

PSPDFKit offers support for customers with an active SDK license via https://pspdfkit.com/support/request/

Are you [evaluating our SDK](https://pspdfkit.com/try/)? That's great, we're happy to help out! To make sure this is fast, please use a work email and have someone from your company fill out our sales form: https://pspdfkit.com/sales/

## Getting Started

Clone the repo:

```bash
git clone https://github.com/PSPDFKit/pspdfkit-web-example-nextjs.git
cd pspdfkit-web-example-nextjs
```

Install the project dependencies:

yarn:

```bash
yarn
```

npm:

```shell script
npm install
```

## Running the Example

We are ready to launch the app! 🎉

yarn:

```bash
yarn dev
```

npm:

```shell script
npm run dev
```

You can now open http://localhost:3000 in your browser and enjoy!

## Building

1. To deploy a production build you must transpile the `pspdfkit` package in your `next.config.js` file

```js
const nextConfig = {
  transpilePackages: ['pspdfkit'],
};
module.exports = nextConfig;
```
2. Make sure the `pspdfkit-lib` files aren't included in the `.gitignore` file.
