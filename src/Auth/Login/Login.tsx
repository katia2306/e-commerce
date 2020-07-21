import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../components/common/constRoutes';
import { auth, PersistanceLocal, database } from '../../firebase/firebase';
import Input from '../../components/Input';

const formValues = {
  user: "",
  password: "",
};

interface IUser {
  user: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState<IUser>(formValues);

  const handleOnchange = (
    value: string,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setUser({ ...user, [value]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    auth.setPersistence(PersistanceLocal).then(() => {
      auth.signInWithEmailAndPassword(user.user, user.password).then(() => {
        database.collection("users")
          .where("email", "==", user.user).get()
          .then((result) => {
            result.forEach((doc: any) => {
              localStorage.setItem('name', doc.data().name);
            });
            window.location.href = './home';
          }).catch(error => {
            console.log(error);
          })
      })
    })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      })
  };

  return (
    <div className="flex flex-row w-screen h-screen">
      <section className="w-full xl:w-5/12">
        <div className="h-16 text-4xl font-bold">
          <span>LogoMe</span>
        </div>
        <div className="h-auto mx-16 md:m-40 lg:m-64 xl:mx-16 xl:my-0">
          <span className="text-3xl xl:text-5xl font-bold">Login to Your Account!</span>
          <div className="inline-block w-full xl:flex xl:flex-row">
            <button
              className="bg-transparent border border-gray-800 hover:bg-gray-800 text-base text-gray-800 hover:text-white font-bold py-2 px-4 rounded w-full mb-2">
              Login with Facebook
            </button>
            <button
              className="bg-gray-800 hover:bg-white text-white hover:text-gray-800 text-base hover: border hover:border-gray-800 font-bold py-2 px-4 rounded w-full mb-2">
              Login with Twitter
            </button>
          </div>
          <div className="text-xl mb-2 text-center">
            <span>-OR-</span>
          </div>
          <div>
            <form onSubmit={onSubmit}>
              <Input type="email" name="Email adress" value={user.user} onChange={(event) => handleOnchange('user', event)} />
              <Input type="password" name="Password" value={user.password} onChange={(event) => handleOnchange('password', event)} />
              <div className="inline-block w-full md:flex md:flex-row xl:flex xl:flex-row mt-4">
                <span className="w-full block"><input type="radio" /> Remember me</span>
                <a className="w-full text-right" href="#">Forgot password</a>
              </div>
              <button className="bg-yellow-500 text-gray-800 border border-gray-800 rounded p-2 my-2" type="submit">Login To Your Account</button>
            </form>
            <div>
              <span>Don't have an account? <Link to={ROUTES.SIGNUP}>Signup</Link></span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 bg-white w-full p-4 pin-b">
          <div>
            <a href="#"> Facebook</a> |
            <a href="#"> Linkedin</a> |
            <a href="#"> Twitter</a> |
          </div>
        </div>
      </section>
      <section className="hidden bg-blue-500 xl:w-7/12">
        {/* <img className={classes.image} src="https://nosidebar.com/images/minimalist-fashion.jpg" alt="shopping" /> */}
      </section>
    </div >
  );
};

export default Login;
