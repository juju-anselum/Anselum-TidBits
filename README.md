# Ansleum-Tidbits

**Ansleum-Tidbits** is a blog web app built with **Next.js**, **TypeScript**, **Material UI**, and **Tailwind CSS**. The content is managed using **Sanity** as a headless CMS.

## Features

- Next.js for server-side rendering and static generation
- TypeScript for type safety and better development experience
- Material UI and Tailwind CSS for responsive and customizable UI
- Sanity CMS integration for easy content management

## Getting Started

To run this project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/juju-anselum/Anselum-TidBits.git
   cd ansleum-tidbits
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   - Rename the `.env.example` file to `.env`:
     ```bash
     mv .env.example .env
     ```
   - Update the `SANITY_PROJECT_ID` in the `.env` file with your own Sanity project ID.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the project in the browser.

## Technologies Used

- **Next.js** - Server-side rendering framework
- **TypeScript** - Static type checker
- **Material UI** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Sanity** - Headless CMS for managing blog content

## License

This project is open source and available under the [MIT License](LICENSE).
