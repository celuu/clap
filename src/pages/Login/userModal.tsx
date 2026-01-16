import { createProfile } from "../../services/userService";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, FormLabel, FormControl, Textarea, Button, ModalFooter, HStack, ModalCloseButton, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

export type UserFormData = {
  first_name: string;
  last_name: string;
  goals: string;
}
export const UserModal = ({ isOpen, onClose }: UserModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm <UserFormData>()
  const formData = watch();
  const toast = useToast();

  // const {error} = createProfile(formData)
  console.log(formData)

  const onSubmit = async (data: UserFormData) => {
    await createProfile({
      first_name: data.first_name,
      last_name: data.last_name,
      goals: data.goals
    })
    onClose();
    toast({

    })
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>Before you start, please tell us a bit about yourself!</ModalHeader>
        <ModalBody display={'flex'} gap={'6'} flexDirection={'column'}>
        
          <HStack>
            <FormControl isRequired width={'50%'}>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Your name" {...(register('first_name'), { required: true })} />
            </FormControl>
            <FormControl isRequired width={'50%'}>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Your name" {...(register('last_name'), { required: true })} />
            </FormControl>
          </HStack>
          <FormControl isRequired>
            <FormLabel>What are your goals?</FormLabel>
            <Textarea placeholder="Your goals" {...(register('goals'), { required: true })} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
        </form>
    </Modal>
  );
};