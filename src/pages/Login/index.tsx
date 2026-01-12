import { Container, VStack, Text, Input, Button, Heading, FormControl, FormLabel, useToast, Link, Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, signUpNewUser } from '../../services/loginService';

type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
}

export const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<AuthFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const password = watch('password');

  const onSubmit = async (data: AuthFormData) => {
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        if (data.password !== data.confirmPassword) {
          toast({
            title: 'Passwords do not match',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
          setIsLoading(false);
          return;
        }
        
        await signUpNewUser(data.email, data.password);
        toast({
          title: 'Account created successfully!',
          description: 'Please check your email to verify your account.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setIsSignUp(false);
        reset();
      } else {
        await loginUser(data.email, data.password);
        toast({
          title: 'Login successful!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/dashboard');
      }
    } catch (error: any) {
      toast({
        title: isSignUp ? 'Signup failed' : 'Login failed',
        description: error.message || 'An error occurred',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    reset();
  };

  return (
    <Container maxW="md" p={4}>
      <Text>
        Hi Jacob, sorry, I am actually not ready to show this yet. Please check back later. I wanted
        to get more done but I had a takehome to do so I want to get those things done before you
        take a look! I miss you sm! 🥲😭
      </Text>
      {/* <VStack spacing={4} align="center" justify="center" h="100vh">
        <Heading size="lg">{isSignUp ? 'Sign Up' : 'Login'}</Heading>
        
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
          <VStack spacing={4} width="100%">
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })} 
              />
              {errors.email && <Text color="red.500" fontSize="sm">{errors.email.message}</Text>}
            </FormControl>
            
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })} 
              />
              {errors.password && <Text color="red.500" fontSize="sm">{errors.password.message}</Text>}
            </FormControl>
            
            {isSignUp && (
              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input 
                  type="password"
                  {...register('confirmPassword', {
                    required: isSignUp ? 'Please confirm your password' : false,
                    validate: (value) => !isSignUp || value === password || 'Passwords do not match'
                  })} 
                />
                {errors.confirmPassword && <Text color="red.500" fontSize="sm">{errors.confirmPassword.message}</Text>}
              </FormControl>
            )}
            
            <Button 
              width="100%" 
              marginTop={4} 
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </Button>
            
            <Box textAlign="center">
              <Text fontSize="sm">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Link color="blue.500" onClick={toggleMode} cursor="pointer">
                  {isSignUp ? 'Login' : 'Sign Up'}
                </Link>
              </Text>
            </Box>
          </VStack>
        </form>
      </VStack> */}
    </Container>
  );
};