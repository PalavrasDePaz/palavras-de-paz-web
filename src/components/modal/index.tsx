import React from "react";
import Modal from "react-bootstrap/Modal";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isShown: boolean;
  onToggle: () => void;
  fullscreen?: string | true | undefined;
}

const GenericModal: React.FC<ModalProps> = ({
  title,
  children,
  isShown,
  onToggle,
  fullscreen = true,
}) => (
  <div>
    {isShown && (
      <Modal
        show={isShown}
        fullscreen={fullscreen}
        onHide={onToggle}
        enforceFocus={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    )}
  </div>
);

export default GenericModal;
