import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, FormLabel, FormControl, Textarea, Button, ModalFooter } from "@chakra-ui/react";

type UserModalProps = {
  isOpen: boolean;
  onClose: () => void;
}
export const UserModal = ({ isOpen, onClose }: UserModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Before you start, please tell us a bit about yourself!</ModalHeader>
        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Your name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>What are your goals?</FormLabel>
            <Textarea placeholder="Your goals" />
          </FormControl>
        </ModalBody>
      
      </ModalContent>
      <ModalFooter>
        <Button colorScheme="blue" onClick={onClose}>Save</Button>
      </ModalFooter>
    </Modal>
  );
};