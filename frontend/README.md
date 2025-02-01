# PayEase Frontend

A modern, responsive payment application built with React and Tailwind CSS that allows users to transfer money, manage their balance, and interact with other users seamlessly.

## Features

- 🎨 Modern UI with gradient accents and dark theme
- 🔒 Secure user authentication (signup/signin)
- 💸 Instant money transfers between users
- 👥 User search and filtering
- 💰 Real-time balance tracking
- 📱 Fully responsive design
- ⚡ Fast and optimized performance

## Tech Stack

- **React** - Frontend framework
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and UI components
- **Axios** - API requests
- **Lucide React** - Modern icons
- **Vite** - Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running (see backend README)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd paytm/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Appbar.jsx      # Top navigation bar
│   ├── Balance.jsx     # Balance display
│   ├── Button.jsx      # Reusable button component
│   ├── InputBox.jsx    # Form input component
│   └── Users.jsx       # Users list component
├── pages/              # Application pages
│   ├── Dashboard.jsx   # Main dashboard
│   ├── Homepage.jsx    # Landing page
│   ├── SendMoney.jsx   # Money transfer page
│   ├── Signin.jsx      # Login page
│   └── Signup.jsx      # Registration page
└── index.css           # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features in Detail

### Authentication
- Secure signup with email and password
- User data persistence using localStorage
- Protected routes and authenticated API calls

### Dashboard
- Real-time balance display
- User search functionality
- Instant money transfers
- Responsive layout for all devices

### Money Transfer
- Simple and intuitive transfer interface
- Real-time validation
- Success/error feedback
- Transaction history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
