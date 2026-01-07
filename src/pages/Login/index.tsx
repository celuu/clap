import { Container, VStack, Text, Input, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type LoginFormData = {
  email: string;
  password: string;
}
export const LoginPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };
  return (
    <Container>
      <VStack>
        <Text>Login</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} />
          <Input {...register('password')} />
          <Button type="submit">Login</Button>
        </form>
      </VStack>
    </Container>
  );
};