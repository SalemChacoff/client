import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import roles from '../helpers/roles';

const schema = yup.object().shape({
    name: yup
        .string("El nombre debe ser de caracter alfanumerico")
        .required("Debe ingresar el nombre"),
    email: yup
        .string("El email debe ser de caracter alfanumerico")
        .email("Debe ser un correo valido")
        .required("Debe ingresar el email"),
    role: yup
        .string("El rol debe ser de caracter alfanumerico")
        .required("Debe ingresar un rol valido")
        .oneOf(Object.keys(roles))
})

export default yupResolver(schema)