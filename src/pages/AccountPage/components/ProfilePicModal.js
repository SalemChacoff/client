import { Modal, Form, Button } from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';

function ProfilePicModal({isOpen, close}) {
    
    const { logout } = useAuth()

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar mi foto de perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        type="file" 
                    />
                </Form>
                <h2>Previsualizacion de imagen</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary">Actualizar Imagen</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ProfilePicModal