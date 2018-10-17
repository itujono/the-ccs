import React from "react"
import { Modal, Button } from "semantic-ui-react"


const Prompt = ({ open, onClose, header, confirm, cancelText, children, yesText, size, closeIcon }) => (
    <Modal open={open} size={size || "tiny"} onClose={onClose} closeIcon={closeIcon}>
        <Modal.Header>{header}</Modal.Header>
        <Modal.Content>{children}</Modal.Content>
        <Modal.Actions>
            <Button basic className="link-btn" onClick={onClose}>
                {cancelText || "Nope"}
            </Button>
            <Button
                className="btn-ccs"
                icon='checkmark'
                labelPosition='right'
                content={yesText}
                onClick={confirm}
            />
        </Modal.Actions>
    </Modal>
)

export default Prompt