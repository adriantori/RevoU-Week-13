import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PublicLayout } from './layouts'
import { DatasPage, LoginPage, RegisterPage, AddItemPage, EditItemPage } from './pages'
import AppProvider from './Provider/AppProvider'

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/',
          element: <DatasPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/register',
          element: <RegisterPage />
        },
        {
          path: '/add',
          element: <AddItemPage />
        },
        {
          path: '/edit/:id',
          element: <EditItemPage />
        },
      ]
    }
  ])

  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider> 
  )
}

export default App
