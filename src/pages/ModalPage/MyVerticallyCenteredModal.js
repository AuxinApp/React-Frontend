import * as React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    FocusOnce,
} from 'baseui/modal';



export default function MyVerticallyCenteredModal(props) {
    return (
        <div className="modal-wrapper">
        <Modal
            onClose={() => props.onClose()}
            isOpen={props.isOpen}
            unstable_ModalBackdropScroll
        >
            <FocusOnce>
                <ModalHeader>{props.headerText}</ModalHeader>
            </FocusOnce>
            <ModalBody $as="div">
                {props.children}
            </ModalBody>
            <ModalFooter>
                <ModalButton onClick={() => props.onClose()}>
                    Okay
                </ModalButton>
            </ModalFooter>
        </Modal>
        </div>
    );
}
