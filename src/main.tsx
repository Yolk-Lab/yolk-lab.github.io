import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import { PostHogProvider } from 'posthog-js/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
  capture_exceptions: true,
  debug: import.meta.env.MODE === 'development',
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>,
)