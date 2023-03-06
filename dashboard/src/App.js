import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/Dashboard'
import LoginPage from './pages/Login';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <DashboardPage /> },
    ]
  }
])

function App() {
  const token = sessionStorage.getItem('token')
  if (!token) {
    return (
      <LoginPage />
    )
  }

  return <RouterProvider router={router} />
}

export default App;
