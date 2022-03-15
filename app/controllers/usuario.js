//modelos del controlador
import { userModel } from "../models/usuario.js"

//excepciones
import { ApolloError } from "apollo-server-express"

//Utilidades
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userController = {}

//Buscar un usuario por Id
userController.emailLogin = async (email,password)=>{
	try {
		let user = await userModel.find({email:email});
		let result= bcrypt.compareSync(password, user.password);
		if(result){
			return user
		}else{
			throw ApolloError("Wrong Input")
		}
		
	}catch (error) {
		return error;
	}
};
export default userController;