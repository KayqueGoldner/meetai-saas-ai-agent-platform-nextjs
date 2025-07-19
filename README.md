# MeetAI SaaS AI Agent Platform

> A modern SaaS platform for managing AI agents, meetings, and premium subscriptions, built with Next.js 15, React 19, Drizzle ORM, and a modular architecture.

![Application Screenshot](/meetai-saas-ai-agent-platform.png "Application Screenshot")
![Application Screenshot](/meetai-saas-ai-agent-platform-pricing.png "Application Screenshot")

## 🚀 Features

- **AI Agent Management**: Create, view, and manage AI agents with customizable parameters.
- **Meetings Module**: Schedule, join, and manage meetings with real-time video and chat (Stream integration).
- **Authentication**: Secure login with email/password and social providers (Google, GitHub) via Better Auth.
- **Premium Subscriptions**: Upgrade to premium plans and manage billing using Polar integration.
- **Dashboard**: Responsive dashboard with sidebar navigation, data tables, and pagination.
- **Notifications**: Toast notifications for user feedback (Sonner).
- **Modern UI**: Built with TailwindCSS and Shadcn UI components for a clean, accessible interface.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: tRPC, Drizzle ORM, PostgreSQL
- **Authentication**: Better Auth, Polar
- **Video/Chat**: Stream Video & Chat SDKs
- **UI/UX**: TailwindCSS, Shadcn UI, Lucide Icons
- **State/Data**: TanStack React Query, Zod, Zustand

## 📦 Notable Packages

- `@trpc/server`, `@tanstack/react-query`, `drizzle-orm`, `react-hook-form`, `zod`, `zustand`, `sonner`, `lucide-react`, `date-fns`, `clsx`, `cmdk`, `embla-carousel-react`, `react-day-picker`, `react-error-boundary`, `react-markdown`, `recharts`, `vaul`, and more.

## 📂 Project Structure

- `src/app/` — Next.js app directory (routing, layouts, pages)
- `src/modules/` — Feature modules (agents, meetings, premium, auth, dashboard, call)
- `src/components/` — Reusable UI components (tables, dialogs, forms, etc.)
- `src/db/` — Drizzle ORM schema and database logic
- `src/trpc/` — tRPC routers and server/client setup
- `public/` — Static assets (SVGs, prompts, etc.)

## ⚡ Getting Started

1. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

2. **Configure environment variables**
   - Create a `.env` file in the root with the following (see `.env.example` if available):
     ```env
      # Global
      NEXT_PUBLIC_APP_URL="http://localhost:3000"

      # Database
      DATABASE_URL=""

      # better-auth
      BETTER_AUTH_SECRET=
      BETTER_AUTH_URL=http://localhost:3000 #Base URL of your app
      GITHUB_CLIENT_ID=
      GITHUB_CLIENT_SECRET=
      GOOGLE_CLIENT_ID=
      GOOGLE_CLIENT_SECRET=

      # GetStream
      NEXT_PUBLIC_STREAM_VIDEO_API_KEY=
      NEXT_PUBLIC_STREAM_CHAT_API_KEY=
      STREAM_VIDEO_SECRET_KEY=
      STREAM_CHAT_SECRET_KEY=

      # OpenAI
      OPENAI_API_KEY=

      # Polar sh
      POLAR_ACCESS_TOKEN=
     ```

3. **Set up the database**
   ```bash
   npm run db:push
   # or
   bun run db:push
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔒 Authentication

- Email/password and OAuth (Google, GitHub) via Better Auth
- Role-based access and session management

## 💳 Premium & Billing

- Upgrade to premium plans via Polar
- Subscription management and billing portal

## 🤝 Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

All contributions are welcome!
