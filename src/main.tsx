import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_FNena2f0FjpBdeFfey1kiALQkkJ2HY3tyNe1ilLicDk', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2025-05-24',
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);