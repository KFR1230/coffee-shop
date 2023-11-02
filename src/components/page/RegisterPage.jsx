import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import coffeeLogo from '@/assets/image/coffee-logo.png';
import paper from '@/assets/image/paper1920.jpg';
function RegisterPage() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { signUp, isAuthentic } = useAuth();
  const notify = (message) =>
    toast.error(`${message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  async function handlerSignUp() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { success, message } = await signUp(email, password);
    if (success) {
      alert('註冊成功');
      navigate('/setting');
    } else {
      // console.log(message);
      const error = checkError(message);
      notify(error);
    }
  }

  function checkError(error) {
    switch (error) {
      case 'auth/email-already-in-use':
        return '郵件已註冊過';
      case 'auth/invalid-email':
        return '郵件格式不正確';
      case 'auth/weak-password':
        return '密碼強度不足';
      default:
        return '輸入格式不正確，請再確認。';
    }
  }

  useEffect(() => {
    if (isAuthentic) {
      navigate('/home');
    }
  }, [navigate, isAuthentic]);
  useEffect(() => {
    const img = new Image();
    img.src = `${paper}`;
    if (img.complete) {
      console.log('img.complete', img);
      setIsImageLoaded(true);
    } else {
      img.onload = () => {
        setIsImageLoaded(true);
        console.log('img.onload', img);
      };
    }
  }, []);
  return (
    <>
      <div
        className={
          isImageLoaded
            ? `flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 overflow-y-auto h-16 bg-[url(@/assets/image/paper1920.jpg)]`
            : `flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8 overflow-y-auto h-16 bg-[#d6b892]`
        }
      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto"
            src={coffeeLogo}
            alt="Your Company"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            註冊
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            method="POST"
            onSubmit={(e) => {
              handlerSignUp();
              e.preventDefault();
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                電子郵件
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  ref={emailRef}
                  required
                  className="bg-slate-200/75 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3"
                  placeholder="輸入電子郵件..."
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  密碼
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  required
                  className="bg-slate-200/75 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-3 pl-3"
                  placeholder="輸入密碼..."
                />
              </div>
            </div>

            <div className="flex flex-col">
              <Link
                type="submit"
                className="font-semibold text-green-900 hover:text-green-700 w-auto text-end
                self-end
                "
                to="/login"
              >
                登入
              </Link>
              <button
                type="submit"
                className="flex w-full m-2 justify-center rounded-md bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                註冊
              </button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default RegisterPage;
