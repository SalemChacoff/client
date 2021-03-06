import { Modal, Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import editAccountResolver from "../../../validations/editAccountResolver";
import roles from "../../../helpers/roles";
import useAuth from "../../../auth/useAuth";

function EditModal({ isOpen, close, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editAccountResolver });
  const { updateUser, hasRole } = useAuth();
  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if(!isDirty) return;
    let newUserData;
    if(formData.role){
        newUserData = formData;
    } else {
        const {role, ...resFormData} = formData;
        newUserData = resFormData;
    }

    updateUser(newUserData)
    close()
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    }
  }, [reset, user]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Escribre un nombre"
              type="text"
              {...register("name")}
            />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Escribre un correo electronico"
              type="email"
              {...register("email")}
            />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Control as="select" disabled={!hasRole("admin")} {...register("role")}>
              {Object.keys(roles).map(role => <option key={role}>{role}</option>)}
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}
            disabled={!isDirty}
        >
          Actualizar Mi Cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditModal;
