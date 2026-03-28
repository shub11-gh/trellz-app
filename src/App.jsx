import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from './appwrite/auth'
import { login, logout } from './features/authSlice'
import { set } from "react-hook-form"
import { Outlet } from "react-router-dom"
import { Footer, Header } from './components'
import config from "./config/config"

function App() {
  // This is used when we use create-react-app
  // REACT_APP_APPWRITE_URL = "test environment"
  // console.log(process.env.REACT_APP_APPWRITE_URL);

  // This is used when we use vite
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  console.log(config.appwriteProjectId);
  console.log(config.aappwriteUrl);

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(
        setLoading(false)
      )
  }, [])


  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-200">
      <div className="w-full flex flex-col items-center justify-center">
        <Header />
        <main>
          TODO:{/* <Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
