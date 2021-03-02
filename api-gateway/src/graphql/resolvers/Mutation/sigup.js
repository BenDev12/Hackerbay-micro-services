import userService from '../../../Adapter/userService'

const signupResolver=(obj, email,password)=>{
 return await userService.signup({email,password,name})
}
export default signupResolver