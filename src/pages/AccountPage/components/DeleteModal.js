import { Modal, Alert, Button } from 'react-bootstrap';
import useAuth from '../../../auth/useAuth';

function DeleteModal({isOpen, close}) {
    
    const { logout } = useAuth()

    const handleDelete = () =>{
        //Peticion Http
        //close()
        logout();
    }

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Alert variant="danger">
                    ¿Estas seguro que deseas eliminar esta cuenta?
                </Alert>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="danger" onClick={handleDelete}>Eliminar mi cuenta</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal