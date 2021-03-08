import * as React from 'react';
import {Button} from 'baseui/button';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalButton,
    FocusOnce,
} from 'baseui/modal';
import Post from "../post/Post";


export default function MyVerticallyCenteredModal(props) {
    console.log(props)
    return (
        <Modal
            onClose={() => props.onClose()}
            isOpen={props.isOpen}
            unstable_ModalBackdropScroll
        >
            <FocusOnce>
                <ModalHeader>Some Header</ModalHeader>
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
    );
}
