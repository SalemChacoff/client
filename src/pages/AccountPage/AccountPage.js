import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import profile from "../../img/male_avatar.svg";
import DeleteModal from "./components/DeleteModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import useModal from "../../hooks/useModal";
import EditModal from "./components/EditModal";
import ProfilePicModal from "./components/ProfilePicModal";

const AccountPage = () => {
  const { user } = useAuth();
  //La logica se pasa al hook useModal
  /*     const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const openDeleteModal = () => { setIsOpenDeleteModal(true) };
    const closeDeleteModal = () => { setIsOpenDeleteModal(false) };

    const [isOpenChangePasswordModal, setIsOpenChangePasswordModal] = useState(false)
    const openChangePasswordModal = () => { setIsOpenChangePasswordModal(true) };
    const closeChangePasswordModal = () => { setIsOpenChangePasswordModal(false) }; */

  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
  const [
    isOpenChangePasswordModal,
    openChangePasswordModal,
    closeChangePasswordModal,
  ] = useModal();
  const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
  const [isOpenProfilePicModal, openProfilePicModal, closeProfilePicModal] =
    useModal();

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <img
              src={profile}
              alt="profile"
              onClick={openProfilePicModal}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col className="mt-4">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
              <p className="text-center">
                <b>Nombre: </b>
                {user.name}
              </p>
              <p className="text-center">
                <b>Correo: </b>
                {user.email}
              </p>
              <p className="text-center">
                <b>Rol: </b>
                {user.role}
              </p>
              <Button variant="warning" onClick={openEditModal}>
                Editar Cuenta
              </Button>
              <Button
                variant="link"
                className="mt-1"
                onClick={openChangePasswordModal}
              >
                Cambiar Contraseña
              </Button>
              <Button
                variant="link"
                className="mt-3 text-danger"
                onClick={openDeleteModal}
              >
                Eliminar Cuenta
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal} />
      <ChangePasswordModal
        isOpen={isOpenChangePasswordModal}
        close={closeChangePasswordModal}
      />
      <EditModal isOpen={isOpenEditModal} close={closeEditModal} user={user} />
      <ProfilePicModal
        isOpen={isOpenProfilePicModal}
        close={closeProfilePicModal}
        user={user}
      />
    </>
  );
};

export default AccountPage;
