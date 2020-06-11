import React from 'react';
import Input from '../Input/Input';

const Login = () => {
  return (
    <div className="flex flex-row w-screen h-screen">
      <section className="w-full xl:w-5/12">
        <div className="h-16 text-4xl font-bold">
          <span>LogoMe</span>
        </div>
        <div className="h-auto mx-16">
          <span className="text-3xl xl:text-5xl font-bold">Login to Your Account!</span>
          <div className="inline-block w-full xl:flex xl:flex-row">
            <button
              className="bg-transparent border border-gray-800 hover:bg-gray-800 text-xl text-gray-800 hover:text-white font-bold py-2 px-4 rounded w-full mb-2">
              Login with Facebook
            </button>
            <button
              className="bg-gray-800 hover:bg-white text-white hover:text-gray-800 text-xl hover: border hover:border-gray-800 font-bold py-2 px-4 rounded w-full mb-2">
              Login with Twitter
            </button>
          </div>
          <div className="ml-24 text-xl mb-2">
            <span>-OR-</span>
          </div>
          <div>
            <form>
              <Input type="email" name="Email adress" />
              <Input type="password" name="Password" />
              <div className="inline-block w-full xl:flex xl:flex-row mt-4">
                <span className="w-full block"><input type="radio" /> Remember me</span>
                <a className="w-full" href="#">Forgot password</a>
              </div>
              <button className="bg-yellow-500 text-gray-800 border border-gray-800 rounded p-2 my-2" type="button">Login To Your Account</button>
            </form>
            <div>
              <span>Don't have an account? <a href="#">Signup</a></span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 m-4">
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
