export type ModalType = "email" | "schedule";

export interface ModalProps {
  type: ModalType;
  key: string;
  step: number;
  onClose: () => void;
}