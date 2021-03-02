import userService from "../../../Adapter/userService ";
const userResolver = async () => {
  return await userService.post();
};
export default userResolver;
