import React from "react";
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
/* import { FaBars, FaBeer } from 'react-icons/fa'; */
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';

export const SidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<Io5Icons.IoLibrarySharp/>,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/team',
        icon:<IoIcons.IoIosPeople/>,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<AiIcons.AiFillMessage/>,
        cName:'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoIcons.IoIosHelpCircle/>,
        cName:'nav-text'
    }

]