import { useState } from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { FaBars } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminSidebar() {

    const [collapsed, setCollapsed] = useState(false);

    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };
    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    return (
        <>
            <Sidebar
                className={`app ${toggled ? "toggled" : ""}`}
                style={{ height: "100%", position: "absolute" }}
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            >
                <main>
                    <Menu className="bg-duwet-secondary">
                        {collapsed ? (
                            <MenuItem
                                icon={<FaBars />}
                                onClick={handleCollapsedChange}
                            ></MenuItem>
                        ) : (
                            <MenuItem
                                // suffix={<FiChevronsLeft />}
                                onClick={handleCollapsedChange}
                            >
                                <div
                                    style={{
                                        padding: "9px",
                                        // textTransform: "uppercase",
                                        fontWeight: "bold",
                                        fontSize: 18,
                                        letterSpacing: "1px"
                                    }}
                                >
                                    Admin Duwet
                                </div>
                            </MenuItem>
                        )}
                        <hr />
                    </Menu>

                    <Menu className="bg-duwet-main-bg">
                        {collapsed ? (
                            <>
                                <MenuItem
                                    icon={<FaDesktop />}
                                >

                                </MenuItem>
                                <MenuItem
                                    icon={<FaRegNewspaper />}
                                />
                            </>

                        ) : (
                            <>
                                <Link to="/admin">
                                    <MenuItem>
                                        Dashboard
                                    </MenuItem>
                                </Link>
                                <Link to="/admin/konten">
                                    <MenuItem>
                                        Konten
                                    </MenuItem>
                                </Link>
                            </>
                        )}
                    </Menu>

                </main>
            </Sidebar>
        </>
    )
}