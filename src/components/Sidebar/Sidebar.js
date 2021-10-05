import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu'
import './Sidebar.css'

const Sidebar = () => {
    const isModalOpen = useSelector((state) => state.isModalOpen)
    // console.log(isModalOpen);
    return (
        <aside className={`${isModalOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <Menu/>
        </aside>
    );
}

export default Sidebar;
