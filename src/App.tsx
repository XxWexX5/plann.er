import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CreateTripPage } from './pages/create-trip'
import { TripDetailsPage } from './pages/trip-details'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
