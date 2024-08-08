import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLoginPage from './pages/admin/AdminLoginPage.jsx';
import AdminContents from './pages/admin/AdminContents.jsx';
import AdminLayouts from './layouts/AdminLayouts.jsx';
import { Toaster } from 'sonner';
import ContentDetail from './pages/ContentDetail.jsx';
import Homepage from './pages/Homepage.jsx';
import AllContents from './pages/AllContents.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import ProtectedRoute from './pages/admin/ProtectedRoute.jsx';
// import { useLenis } from '@studio-freight/react-lenis/types';

const user = JSON.parse(localStorage.getItem("user"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/konten',
        element: <AllContents />,
      },
      {
        path: '/konten/:id',
        element: <ContentDetail />
      },
      {
        path: '/profil',
        element: <ProfilePage />
      }
    ]
  },
  {
    path: '/admin',
    element: <AdminLayouts />,
    children: [
      {
        index: true,
        element: <ProtectedRoute user={user}><AdminContents /></ProtectedRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <AdminLoginPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
      <Toaster />
    </NextUIProvider>
  </React.StrictMode>,
)
