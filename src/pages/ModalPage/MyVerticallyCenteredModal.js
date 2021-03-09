import * as React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'baseui/modal';



export default function MyVerticallyCenteredModal(props) {
    return (
        <div className="modal-wrapper">
        <Modal
            onClose={() => props.onClose()}
            isOpen={props.isOpen}
            unstable_ModalBackdropScroll
        >
            <ModalHeader>{props.headerText}</ModalHeader>
            <ModalBody $as="div">
                {props.children}
            </ModalBody>
        </Modal>
        </div>
    );
}
