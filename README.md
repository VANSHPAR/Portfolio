# Project Title

*Brief description of the project goes here.*

![Screenshot Placeholder](./screenshot.png)

---

## Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

---

## Installation & Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run start
   ```
   The app will be available at `http://localhost:3000`.

---

## Build & Deployment

### Vercel
1. Push the code to a Git provider (GitHub, GitLab, Bitbucket).
2. Import the project in the Vercel dashboard.
3. Vercel automatically detects a React project and runs `npm install && npm run build`.
4. Ensure a `vercel.json` file exists (see below) for custom routing or environment variables.

### Netlify
1. Push the code to a Git provider.
2. In Netlify, click **New site from Git** and select the repository.
3. Set the build command to `npm run build` and the publish directory to `build/`.
4. Add the required environment variables in the Netlify UI (see *Environment Variables* section).

---

## Environment Variables

The project uses **EmailJS** to send contact form messages. The following environment variables must be defined (prefixed with `REACT_APP_` so they are exposed to the React app):

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_USER_ID`

Create a `.env` file in the project root (or configure the variables in Vercel/Netlify settings):

```dotenv
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_USER_ID=your_user_id
```

---

## Tailwind CSS Customization

Tailwind is configured in `src/styles/tailwind.config.js`. Custom colors (or other theme extensions) can be added under the `theme.extend` section. Example:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1a202c",
        secondary: "#2d3748",
        accent: "#38b2ac",
      },
    },
  },
  plugins: [],
};
```

After editing the config, restart the dev server to see changes.

---

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and ensure the app still builds.
4. Commit your changes with clear messages.
5. Push to your fork and open a Pull Request.

Please follow the existing code style and run `npm run lint` (if configured) before submitting.

---

## License

[Insert license information here – e.g., MIT License]
