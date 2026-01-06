import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, Input, Button, ModalFooter, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createHabit as createHabitService } from '../../services/habitService';
import { Habit } from "@/types";

type CreateHabitModalProps = {
  isOpen: boolean;
  onClose: () => void;
  existingHabit?: Habit;
}

type HabitFormData = {
  label: string;
  weekly_target: number;
}

export const CreateHabitModal = ({ isOpen, onClose, existingHabit }: CreateHabitModalProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<HabitFormData>({
    defaultValues: {
      label: existingHabit?.label ?? '',
      weekly_target: existingHabit?.weekly_target ?? 1,
    }
  });

  const onSubmit = async (data: HabitFormData) => {
    await createHabitService({
      label: data.label,
      weekly_target: data.weekly_target,
    });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Create Habit</ModalHeader>
          <ModalBody>
            <VStack spacing={4}>
              <Input
                placeholder="Habit"
                {...register('label', { required: true })}
              />
              <Input
                placeholder="Weekly Target"
                type="number"
                min={1}
                max={7}
                {...register('weekly_target', { 
                  required: true, 
                  valueAsNumber: true,
                  min: 1,
                  max: 7
                })}
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" colorScheme="blue">
              Create
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};