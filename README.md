![Dog and Pony Studios](./docs/assets/dps-logo.svg)

# DPS Starter kit

Next.js starter kit for Dog and Pony Studios.

---

## TODO: tidy these docs.

- Tailwind CSS
- Storybook
- Localization with `next-intl`

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Localization

We're using [next-intl](https://next-intl-docs.vercel.app/) for localization.

Translated strings are found in JSON files in the `src/locales` directory. Has available some custom formatting for text with dynamic variables, pluralization, dates, numbers, etc.

## Storybook

Run Storybook:

```bash
npm run storybook
```

Will start a server on [http://localhost:6006](http://localhost:6006) to preview and test individual component.

## Tailwind & CSS Styles

We're using [Tailwind CSS](https://tailwindcss.com/) for styling. We have also a custom set of typography presets found in `src/config/tailwind/plugins/typography.js`.
