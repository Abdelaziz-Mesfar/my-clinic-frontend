import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';

import './sidebar.css'
import { logout } from '../../redux/actions/userActionCreators';

const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <CDBSidebar style={{ height: "100vh", position: "sticky", top: 0 }} textColor="#333" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                My Clinic
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <NavLink to="/dashboard">
                        <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/patients">
                        <CDBSidebarMenuItem icon="bi bi-people-fill">Patients</CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink to="/profile">
                        <CDBSidebarMenuItem icon="bi bi-person-circle" iconType="solid">Profile</CDBSidebarMenuItem>
                    </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <CDBSidebarMenuItem icon="bi bi-door-open-fill" className="text-center" onClick={()=> dispatch(logout())} >
                    Log Out
                </CDBSidebarMenuItem>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default Sidebar;