import { useState, useContext } from "react";
import AuthContent from "../../components/Auth/AuthContent";
import { createUser } from "../../util/auth";
import Loading from "../.././components/UI/Loading";
import { Alert } from "react-native";
import {AuthContext} from '../../store/AuthContext';

function SignupScreen() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authCtx = useContext(AuthContext);
  
  async function signupHandler({email, password}) {
    setIsAuthenticated(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch(error) {
      Alert.alert("Authentication Failed", "Could not creat a user, please try again later");
    }
    setIsAuthenticated(false);
  }

  if(isAuthenticated) {
    return <Loading message="Creating User" />
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;