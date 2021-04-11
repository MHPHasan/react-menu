import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Home',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Home One',
                path: '/home/home1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Home Two',
                path: '/home/home2',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Home Three',
                path: '#',
                icon: <IoIcons.IoIosPaper />,
                iconClosed: <RiIcons.RiArrowDownSFill />,
                iconOpened: <RiIcons.RiArrowUpSFill />,
                subNav: [
                    {
                        title: 'Home Three V1',
                        path: '/home/home3/home3_v1',
                        icon: <IoIcons.IoIosPaper />
                    },
                    {
                        title: 'Home Three V2',
                        path: '/home/home3/home3_v2',
                        icon: <IoIcons.IoIosPaper />
                    },
                    {
                        title: 'Home Three V3',
                        path: '/home/home3/home3_v3',
                        icon: <IoIcons.IoIosPaper />
                    },
                    {
                        title: 'Home Three V4',
                        path: '/home/home3/home3_v4',
                        icon: <IoIcons.IoIosPaper />
                    },
                ]
            },
            {
                title: 'Home Four',
                path: '/home/home4',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Pages',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'About',
                path: '/pages/about',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Pricing',
                path: '/pages/price',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Features',
                path: '/pages/feature',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Feature Details',
                path: '/pages/feature-details',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Login',
                path: '/pages/login',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Coming Soon',
                path: '/pages/coming-soon',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: '404',
                path: '/pages/404',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Services',
        path: '#',
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: 'Service 1',
                path: '/service/service',
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: 'Service Details',
                path: '/service/service-details',
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: 'Blog',
        path: '#',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Blog',
                path: '/blog/blog',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Blog Details',
                path: '/blog/blog-details',
                icon: <IoIcons.IoIosPaper />,
            },
        ]
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoIcons.IoMdHelpCircle />
    },
]