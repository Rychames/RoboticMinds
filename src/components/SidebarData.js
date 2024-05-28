import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';


export const SidebarData = [
  {
    title: 'Alunos',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Certificados',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Projetos',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  }
];
