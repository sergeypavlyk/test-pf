This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Test Task

The project includes the following implemented features:

1. Data List

- includes Task Requirements

## Task Requirements

1. **Create a New Artworks List View**:

    - Build a list view that aligns with the provided Figma design.
    - Emulate API data retrieval using the `api_data.json` file.

2. **Display Data from API**:

    - Show key details for each artwork, such as:
        - **Notifications Indicator**: Display a blue dot if `has_notifications` is `true`.
        - **Status**: Handle the possible statuses:
            - `draft`
            - `on_sale`
            - `on_digitalization`
            - `ready_for_verification`
            - `published`
        - For simplicity, focus on the data in `api_data.json`.
    - Use the `main_photo.transformations` field to manage image display for responsiveness.

3. **Prerequisites**:

    - Utilize the provided resources:
        - [Figma Design](https://www.figma.com/design/fK46RrqEhT8etCrYu7z8K1/Task?node-id=1-2816&t=PixQAM3FvQ3FFAp8-1)
        - The `assets/` folder for images.
        - The `api_data.json` file containing the API response.
        - The `ref.mov` video as a reference for the final result.
        - The `fonts/` folder for fonts.

4. **Ensure Code Quality**:
    - Write clean, maintainable, and well-structured code.
    - Follow best practices for React, _Svelte_, or another framework of your choice.

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
