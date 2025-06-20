# Personal Blog Site

![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red)

This repository contains the source code for my **personal blog site**. This site replaces my previous blog site which was hosted on Hasnode.

## Technology Stack

- **Frontend:** React (TypeScript) + Inertia.js
- **Backend:** Laravel
- **Rendering:** SSR enabled via Inertia + React
- **Routing:** Ziggy for Laravel route integration in React

## Features

- Fully dynamic blog site powered by React + Laravel
- Server-side rendering (SSR) for faster initial load and better SEO
- Modern SPA-like navigation with Inertia.js
- Clean, maintainable TypeScript codebase

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <your-repo-directory>

# Install dependencies
npm install
composer install

# Configure environment
cp .env.example .env
php artisan key:generate

# Run development server
npm run dev
php artisan serve
