# Signalist - Stock Market Intelligence Platform

A modern, full-stack stock market analysis and portfolio tracking application built with Next.js, React, and TypeScript. Signalist provides real-time market data, advanced charting tools and personalized news summaries for individual investors.

## 🎯 Features

### Core Functionality
- **Real-Time Market Overview** - Interactive TradingView widgets displaying market heatmap, overview, quotes, and timeline
- **Stock Search & Discovery** - Advanced search with autocomplete and keyboard shortcuts (Cmd/Ctrl + K)
- **Detailed Stock Analysis** - Multi-chart view including candlestick charts, technical analysis, and company financials
- **Market News & Headlines** - Curated news feed powered by Finnhub API

### User Experience
- **Authentication** - Secure email/password authentication with better-auth
- **Personalized Onboarding** - AI-generated welcome emails based on investment profile
- **Daily News Summaries** - Automated email digests of market news tailored to watched stocks (powered by Inngest & Gemini AI)
- **Dark Mode** - Built-in theme switching with next-themes
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Smooth Animations** - Enhanced UX with tailwindcss-animate

### Technical Highlights
- **TradingView Integration** - Multiple embedded chart widgets for comprehensive market analysis
- **Intelligent Job Queue** - Inngest-powered background jobs for email delivery and AI processing
- **MongoDB Atlas** - Persistent data storage with Mongoose ODM
- **Email Service** - Nodemailer integration for transactional and marketing emails
- **React Compiler** - Babel React Compiler enabled for optimized rendering

## 🛠 Tech Stack

### Frontend
- **Next.js 16.1** - React framework with App Router
- **React 19.2** - UI library with concurrent rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible component primitives
- **Sonner** - Toast notifications
- **React Hook Form** - Efficient form handling
- **React Select** - Searchable dropdown selects

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Better Auth** - Full-featured authentication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Services & Integrations
- **Finnhub API** - Stock data, news, and market information
- **Inngest** - Event-driven job queue and workflows
- **TradingView** - Professional charting widgets
- **Nodemailer** - Email delivery
- **Gemini AI** - Personalized content generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account and connection string
- Finnhub API key (free at [finnhub.io](https://finnhub.io))
- Inngest account (free at [inngest.com](https://inngest.com))
- Gmail or other email service for nodemailer

### Installation

1. **Clone and install:**
```bash
git clone <repository-url>
cd stocks_app
npm install
```

2. **Configure environment variables:**

Create a `.env.local` file:
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
BETTER_AUTH_SECRET=your_random_secret_key_here
BETTER_AUTH_URL=http://localhost:3000

# APIs
FINNHUB_API_KEY=your_finnhub_api_key
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key

# Inngest (background jobs)
INNGEST_API_KEY=your_inngest_api_key
INNGEST_EVENT_KEY=your_inngest_event_key

# Email (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_FROM=noreply@signalist.app

# Gemini AI (for personalized content)
GEMINI_API_KEY=your_gemini_api_key
```

3. **Run development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
stocks_app/
├── app/                          # Next.js App Router
│   ├── (auth)/                  # Auth pages (sign-in, sign-up)
│   ├── (root)/                  # Main app pages
│   │   ├── page.tsx             # Dashboard with market overview
│   │   └── stocks/[symbol]/     # Stock detail pages
│   └── api/                     # API routes
│       └── inngest/             # Background job webhooks
│
├── components/                   # React components
│   ├── TradingViewWidget.tsx    # Chart embedding component
│   ├── SearchCommand.tsx         # Stock search with cmd+k
│   ├── WatchlistButton.tsx      # Watchlist management
│   ├── UserDropdown.tsx         # User menu
│   ├── Header.tsx               # Navigation header
│   └── forms/                   # Form components
│
├── lib/                          # Utilities and server actions
│   ├── actions/                 # Server-only actions
│   │   ├── auth.actions.ts      # Auth helpers
│   │   ├── finnhub.actions.ts   # Stock data fetching
│   │   ├── user.actions.ts      # User management
│   │   └── watchlist.actions.ts # Watchlist operations
│   ├── better-auth/             # Auth configuration
│   ├── inngest/                 # Background job definitions
│   │   ├── client.ts            # Inngest client
│   │   ├── functions.ts         # Job functions
│   │   └── prompts.ts           # AI prompts
│   ├── nodemailer/              # Email service
│   ├── constants.ts             # App constants & configs
│   └── utils.ts                 # Helper utilities
│
├── database/                     # Database configuration
│   ├── mongoose.ts              # MongoDB connection
│   └── models/                  # Mongoose schemas
│       └── watchlist.model.ts   # Watchlist document
│
├── hooks/                        # React hooks
│   ├── useDebounce.tsx          # Debounce hook
│   └── useTradingViewWidget.tsx # Widget loading hook
│
├── middleware/                   # Next.js middleware
│   └── index.ts                 # Auth guard middleware
│
└── public/                       # Static assets
    └── assets/                  # Icons and images
```

## 🔑 Key Components

### TradingViewWidget Component
Reusable component for embedding professional chart widgets from TradingView:
- Market Overview
- Stock Heatmap
- Advanced Charts (Candlestick, Baseline)
- Technical Analysis
- Company Financials
- Symbol Info

### SearchCommand
Command palette-style search with:
- Keyboard shortcut (Cmd/Ctrl + K)
- Real-time stock filtering from Finnhub
- Direct links to stock detail pages

### Authentication Flow
1. Users sign up with email, password, and investment profile
2. Profile includes country, investment goals, risk tolerance, and preferred industries
3. Welcome email generated by Gemini AI based on profile
4. Better-auth manages sessions and cookies
5. Middleware protects authenticated routes

### Watchlist System
- MongoDB document stores user watchlist entries
- Add/remove stocks with one click
- Filtered news summaries based on watched symbols
- Daily email digests of relevant market news

### Background Jobs (Inngest)
- **Sign-up email**: Triggered on user creation, generates personalized welcome
- **Daily news digest**: Scheduled job for watchlist-based news summaries
- Uses Gemini AI for content generation and personalization

## 🚀 Deployment

### Deploy to Vercel
```bash
npm run build
vercel deploy
```

**Configure environment variables in Vercel dashboard** with all values from `.env.local`.

### Key Deployment Notes
- MongoDB Atlas must allow connections from Vercel IPs
- Inngest webhooks require public API endpoint
- Email service credentials must be environment variables
- Gemini API key should be kept secret

## 📊 API Integration

### Finnhub API
- Stock search and metadata
- Company news by symbol
- General market news
- Real-time quote data

### TradingView
- Embedded professional charts
- No API calls (server-side rendering)
- Lightweight iframe integration

### Inngest
- Event-driven job scheduling
- Background task processing
- Function chaining for workflows

## 🔒 Security

- Session-based authentication with better-auth
- Middleware protection for authenticated routes
- API key validation and environment variable isolation
- MongoDB unique indexes prevent duplicate watchlist entries
- Secure email delivery with app passwords

## 🎨 Customization

### Theme
Edit dark/light mode in `components/ui/` components. Theme switching uses `next-themes`.

### Stock Widgets
Modify chart configs in `lib/constants.ts`:
- Colors, timeframes, and display options
- Widget-specific configurations
- Market data preferences

### Email Templates
Update email templates in `lib/nodemailer/templates.ts` for onboarding and news digests.

### AI Prompts
Customize personalization prompts in `lib/inngest/prompts.ts` for Gemini AI content generation.

## 📝 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://...` |
| `BETTER_AUTH_SECRET` | Auth secret key | `random_32_char_string` |
| `BETTER_AUTH_URL` | Auth callback URL | `http://localhost:3000` |
| `FINNHUB_API_KEY` | Finnhub API key | `sk_...` |
| `INNGEST_API_KEY` | Inngest API key | `fnst_...` |
| `EMAIL_USER` | Email sender address | `noreply@example.com` |
| `EMAIL_PASSWORD` | Email service password | `app_specific_password` |
| `GEMINI_API_KEY` | Google Gemini API key | `AIzaSy...` |

## 🤝 Contributing

Contributions are welcome! Please:
1. Create a feature branch
2. Make your changes
3. Submit a pull request

## 🙋 Support

For issues and questions:
1. Check existing GitHub issues
2. Open a new issue with details and reproduction steps
3. Contact the development team

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Finnhub API Docs](https://finnhub.io/docs/api)
- [TradingView Widgets](https://www.tradingview.com/widget/)
- [Inngest Documentation](https://www.inngest.com/docs)
- [better-auth Docs](https://www.betterauth.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

---