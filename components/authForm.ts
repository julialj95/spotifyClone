import { Box, Flex, Input, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { useSWRConfig } from 'swr';
import { FC, useState } from 'react';
import { auth } from '../lib/mutations';

const AuthForm = ({mode}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState('false');
    const router = useRouter();
}

export default AuthForm