import { Outlet, useLocation, useNavigate } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import MainLayout from './MainLayout'

export default function PrivateLayout() {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const isAuth = localStorage.getItem('isAuth')
        if (!isAuth) navigate('/auth')
    }, [location.pathname])
    return (
        <MainLayout />
    )
}
