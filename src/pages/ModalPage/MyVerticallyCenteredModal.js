import * as React from "react";
import { Modal, ModalHeader, ModalBody } from "baseui/modal";
import { H3 } from "baseui/typography";

export default function MyVerticallyCenteredModal(props) {
  return (
    <div className="modal-wrapper">
      <Modal
        onClose={() => props.onClose()}
        isOpen={props.isOpen}
        unstable_ModalBackdropScroll
        size={"800px"}
      >
        <ModalHeader>
          <H3>Post your content</H3>
        </ModalHeader>
        <ModalBody $as="div">{props.children}</ModalBody>
      </Modal>
    </div>
  );
}
