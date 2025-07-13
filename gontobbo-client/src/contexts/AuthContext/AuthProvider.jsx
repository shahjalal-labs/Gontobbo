import { AuthContext } from "./AuthContext";
import useFirebaseAuth from "./useFirebaseAuth";

const AuthProvider = ({ children }) => {
  const authInfo = useFirebaseAuth();

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
