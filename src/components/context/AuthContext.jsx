import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { auth } from '../../utils/firebase';
import jwt_decode from 'jwt-decode';
import { editMemberData } from '../../api/data';
import useImgLoading from '../hooks/useImgLoading';
const defaultAuthContext = {
  isAuthentic: false,
  currentMember: null,
  login: null,
};
const AuthContext = createContext(defaultAuthContext);
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [memberId, setMemberId] = useState('');
  const [isAuthentic, setIsAuthentic] = useState(false);
  const { isImageLoaded } = useImgLoading();
  const { pathname } = useLocation();
  useEffect(() => {
    const checkTokenisValid = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setIsAuthentic(false);
        setMemberId(null);
        return;
      }
      if (authToken) {
        const tempPayload = jwt_decode(authToken);
        setIsAuthentic(true);
        setMemberId(tempPayload.user_id);
        return;
      }
    };
    checkTokenisValid();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{
        isAuthentic,
        memberId,
        isImageLoaded,
        login: async (email, password) => {
          try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            // console.log('login', res);
            const token = res.user.accessToken;
            localStorage.setItem('authToken', token);
            setMemberId(res.user.uid);
            setIsAuthentic(true);
            return { success: true, message: '登入成功' };
          } catch (error) {
            return { success: false, message: error.code };
          }
        },
        signUp: async (email, password) => {
          try {
            const res = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const token = res.user.accessToken;
            localStorage.setItem('authToken', token);
            setMemberId(res.user.uid);
            editMemberData({
              memberName: '匿名',
              memberDescription: '',
              memberAvatar:
                'https://cdn2.aprico-media.com/production/imgs/images/000/029/940/original.png?1553946576',
              memberId: res.user.uid,
            });
            return { success: true, message: '註冊成功' };
          } catch (error) {
            return { success: false, message: error.code };
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
