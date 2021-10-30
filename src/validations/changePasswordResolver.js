import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    password: yup
        .string("La contraseña debe ser de caracteres alfanumericos")
        .required("Debes ingresar la contraseña")
        .min(6,"La contraseña debe tener al menos 6 carácteres")
})

export default yupResolver(schema)