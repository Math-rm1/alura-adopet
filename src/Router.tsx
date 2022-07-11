import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import Home from './pages/Home'
import Initial from './pages/Initial'
import Login from './pages/Login'
import Message from './pages/Message'
import Profile from './pages/Profile'
import Register from './pages/Register'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Initial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  )
}
