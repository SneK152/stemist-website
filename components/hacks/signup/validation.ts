import {object, string} from 'yup'

export let validationSchema = object({
    name: string().required("Required"),
    password: string().required("Required"),
})
