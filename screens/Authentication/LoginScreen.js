import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../../components/Auth/AuthContent";
import Loading from "../../components/UI/Loading";
import { AuthContext } from "../../store/AuthContext";
import { login } from "../../util/auth";

function LoginScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authCtx = useContext(AuthContext);
  
  async function loginHandler({email, password}) {
    setIsAuthenticated(true);
    try{
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert('Authentication Failed', "Could not login");
    }
    setIsAuthenticated(false);
  }

  if(isAuthenticated) {
    return <Loading message="Logging in User" />
  }

  return <AuthContent isLogin onAuthenticate={loginHandler}/>;
}

export default LoginScreen;