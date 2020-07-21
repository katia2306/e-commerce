import React, { useState } from 'react';
import jwt from 'jwt-simple';
import { auth, database } from '../../firebase/firebase';
import Input from '../../components/Input';

const formValues = {
  email: '',
  repeatEmail: '',
  phoneNumber: '',
  password: '',
  name: '',
  birthday: ''
}

interface ISignup {
  email: string;
  repeatEmail: string;
  phoneNumber: string;
  password: string;
  name: string;
  birthday: string;
}

const Signup = () => {
  const [data, setData] = useState<ISignup>(formValues);

  const handleSubmit = () => {
    auth.createUserWithEmailAndPassword(data.email, data.password)
      .then(userRecord => {
        console.log(userRecord);
        database.collection('users').doc(jwt.encode(data, 'p455w0rd')).set({
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          birthday: data.birthday
        }).then(() => {
          window.location.href = './home';
        }).catch(error => {
          console.log(error);
        });
      })
      .catch(error => {
        console.log(error);
      })
  };

  const onChange = (value: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [value]: event.target.value });
  }

  return (
    <div className="">
      <div>
        <span>Signup for free</span>
      </div>
      <form>
        <Input type='email' name='Email' onChange={(event) => onChange('email', event)} value={data.email} />
        <Input type='email' name='Repeat email' onChange={(event) => onChange('repeatEmail', event)} value={data.repeatEmail} />
        <Input type='text' name='Name' onChange={(event) => onChange('name', event)} value={data.name} />
        <Input type='email' name='Phone number' onChange={(event) => onChange('phoneNumber', event)} value={data.phoneNumber} />
        <Input type='password' name='Password' onChange={(event) => onChange('password', event)} value={data.password} />
        <button type='button' onClick={handleSubmit}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;