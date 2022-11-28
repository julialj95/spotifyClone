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
    MdFavorite
} from 'react-icons/md'
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
                <Box width='120px' marginBottom='20px' paddingX='20px'>
                    <NextImage src='/vercel.svg' height={60} width={120} alt='' />
                </Box>
            </Box>
        </Box>
    )
}
export default Sidebar;