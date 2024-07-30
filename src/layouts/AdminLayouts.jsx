import { Outlet } from "react-router";
import AdminSidebar from "../pages/admin/components/AdminSidebar";


export default function AdminLayouts() {
    return (

        // TODO: Nanti kasih autentikasi kalo user yang login adalah admin baru masuk, kalo tidak akan diberikan error page
        <div>
            <AdminSidebar />
            <Outlet />
        </div>
    )
}