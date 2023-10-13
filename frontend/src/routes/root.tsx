import Navbar from '../components/Navbar.tsx'
import { Outlet } from "react-router-dom";
import { DataProvider } from '../contexts/DataContext.tsx';

export default function Root() {
    return (
        <DataProvider>
            <Navbar />
            <Outlet />
        </DataProvider>
    )
}