import React from "react";
import NextImage from 'next/image';
import NextLink from 'next/link';

import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/layout";
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdLibraryAdd,
    MdFavorite,
    MdPlaylistAdd
} from 'react-icons/md'

const navMenu = [
    {
      name: 'Home',
      icon: MdHome,
      route: '/',
    },
    {
      name: 'Search',
      icon: MdSearch,
      route: '/search',
    },
    {
      name: 'Your Library',
      icon: MdLibraryMusic,
      route: '/library',
    },
  ]
  
  const musicMenu = [
    {
      name: 'Create Playlist',
      icon: MdPlaylistAdd,
      route: '/',
    },
    {
      name: 'Favorites',
      icon: MdFavorite,
      route: '/favorites',
    },
  ]

const Sidebar = () => {
    return (
        <Box 
            width='100%' 
            height='calc(100vh - 100px)' 
            bg='black' 
            paddingX='5px' 
            color='gray'
        >
            <Box paddingY='20px'>
                <Box width='120px' marginBottom='20px' paddingX='20px' display="flex">
                    <NextImage src='/headphones.svg' height={30} width={60} alt='' />
                    <Box>Music Tracks</Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Sidebar;