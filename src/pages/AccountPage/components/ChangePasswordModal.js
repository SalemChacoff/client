import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import changePasswordResolver from '../../../validations/changePasswordResolver';
import { useEffect } from 'react';

function DeleteModal({isOpen, close}) {

    const { register, handleSubmit, formState: { errors }, reset} = useForm({ resolver: changePasswordResolver})

    const onSubmit = (formData) =>{
        alert("Cambiando Contraseña")

        //alert("Cambiando contraseña")
        console.log(formData);
    }

    useEffect(() =>{
        if(!isOpen){
            reset()
        }
    },[isOpen, reset])

    return (
        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar Contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nueva Contraseña</Form.Label>
                        <Form.Control 
                        placeholder="Escribre una nueva contraseña"
                        type="password"
                        {...register("password")} 
                        //Esto remplaza el paso de parametros manual
                        //name=""
                        //onChange={() => }
                        //onBlur=""
                        //ref=""
                        />
                        {errors?.password && (
                            <Form.Text>
                                <Alert variant="danger">
                                    {errors.password.message}
                                </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar Contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal