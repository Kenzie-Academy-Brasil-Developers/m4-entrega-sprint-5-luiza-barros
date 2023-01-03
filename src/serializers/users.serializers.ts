import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserLogin, IUserRequest, IUserResponse, IUserUpdate } from "../interfaces/users"

const createLoginSerializer: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

const createUserSerializer: SchemaOf<IUserRequest> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    isAdm: yup.boolean().required()
})

const createUserWithoutPasswordSerializer: SchemaOf<IUserResponse> = yup.object().shape({
    email: yup.string().email().notRequired(),
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    isAdm: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    isActive: yup.boolean().notRequired()
})

const updateUserSerializer: SchemaOf<IUserUpdate> = yup.object().shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    password: yup.string().notRequired()
})

export { 
    createLoginSerializer, 
    createUserSerializer,
    createUserWithoutPasswordSerializer,
    updateUserSerializer 
}