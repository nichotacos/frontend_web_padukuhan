import { Outlet } from "react-router";
import AdminSidebar from "../pages/admin/components/AdminSidebar";
import Footer from "../components/Footer";
import { useState } from "react";
// import { useState } from "react";


export default function AdminLayouts() {
    const [collapsed, setCollapsed] = useState(false);

    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (

        // TODO: Nanti kasih autentikasi kalo user yang login adalah admin baru masuk, kalo tidak akan diberikan error page
        <div className="flex">
            <AdminSidebar />
            <div className="overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}