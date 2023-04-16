import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

const Homepage= React.lazy(()=>import("./pages/Homepage/index"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<React.Suspense fallback={<div className='h-screen w-screen flex justify-center items-center'>.</div>}> <Homepage/> </React.Suspense>}/>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
);