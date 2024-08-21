import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"
import { QueryClientProvider, QueryClient } from "react-query"
import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer position='bottom-left'/>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
)
