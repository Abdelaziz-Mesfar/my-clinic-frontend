import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';

const Sidebar = () => {
    return (
        <CDBSidebar style={{ height: "100vh", position: "sticky", top: 0 }} textColor="#333" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                My Clinic
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="bi bi-people-fill">Patients</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="bi bi-person-circle" iconType="solid">Profile</CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
               <CDBSidebarMenuItem icon="bi bi-door-open-fill" className="text-center" >Log Out</CDBSidebarMenuItem>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default Sidebar;