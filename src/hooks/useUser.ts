import { ref } from "vue";

export const user = async (params: any) => {
  const userModel = ref({
    userName: "",
  });

  const login = async () => {
    userModel.value.userName = "刘正星";
  };

  const logout = async () => {
    userModel.value.userName = "";
  };



  const getUser = async () => { 
    return userModel.value;
  }

  return {
    userModel,
    login,
    logout,
  };
};
