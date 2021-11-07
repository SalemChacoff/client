import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import roles from "../helpers/roles";

const schema = yup.object().shape({
  name: yup
    .string("El nombre no es valido")
    .required("Debe ingresar el nombre")
    .min(3, "El nombre debe poseer mas de 2 caracteres"),
  email: yup
    .string("El email debe ser de caracter alfanumerico")
    .email("Debe ser un correo valido")
    .required("Debe ingresar el email"),
  password: yup
    .string("La contraseña debe ser de caracteres alfanumericos")
    .required("Debes ingresar la contraseña")
    .min(6, "La contraseña debe tener al menos 6 carácteres"),
  role: yup
    .string("El rol debe ser de caracter alfanumerico")
    .required("Debe ingresar un rol valido")
    .oneOf(Object.keys(roles)),
});

export default yupResolver(schema)