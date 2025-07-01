import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import App from './App.tsx'
import Info from './Info.tsx'
import SocialCreatives from './SocialCreatives.tsx'
import './styles/globals.css'

posthog.init('phc_FNena2f0FjpBdeFfey1kiALQkkJ2HY3tyNe1ilLicDk', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2025-05-24',
})

// Component to handle redirects from 404.html
function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath && redirectPath !== '/') {
      sessionStorage.removeItem('redirectPath');
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function AppRouter() {
  return (
    <BrowserRouter>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info" element={<Info />} />
        <Route path="/creatives" element={<SocialCreatives />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <AppRouter />
    </PostHogProvider>
  </StrictMode>,
);