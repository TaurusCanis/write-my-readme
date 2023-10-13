import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.tsx'
import FormPage from './pages/form.tsx'
import Review from './pages/review.tsx'
import ErrorPage from './errorPage.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
      {
        path: "/form/review",
        element: <Review />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
