import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, Button, ModalFooter } from "@chakra-ui/react";
import { useState } from "react";
import { createHabit as createHabitService } from '../../services/habitService';


export const CreateHabitModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [habit, setHabit] = useState<{ label: string; completed: boolean }>({ label: '', completed: false });

  const handleCreateHabit = async () => {
    await createHabitService({
      label: habit.label,
      completed_at: null,
    });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Habit</ModalHeader>
        <ModalBody>
          <Input placeholder="Habit" onChange={(e) => setHabit({ ...habit, label: e.target.value })} />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleCreateHabit} colorScheme="blue" >Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};