import './index.css'

import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider'

import { router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="hive-digital-theme" defaultTheme="system">
      <Toaster richColors />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
