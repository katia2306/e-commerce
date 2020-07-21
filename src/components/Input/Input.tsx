import React, { useState, ChangeEvent } from 'react';

interface IInput {
  type: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInput) => {
  const { type, name, value, onChange } = props;
  const [visibility, setVisibility] = useState(false);
  const [focus, setFocus] = useState(false);

  return (
    <div className="shadow appearance-none border rounded w-full leading-thigt mt-4">
      <label className="">
        <span
          className={`transition-width ease-in-out duration-500 absolute h-12 w-40 xl:w-5/12 mx-1 text-gray-600 ${(focus || value.length > 0) ? 'mt-0 text-xs' : 'mt-4 text-base'}`}
        >
          {name}
        </span>
        <input
          className={`block h-12 ${type === 'password' ? 'w-8/12' : 'w-11/12'} pt-3 mx-1 focus:outline-none`}
          type={type !== 'password' ? type : visibility ? 'text' : 'password'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onChange}
          value={value}
          name={name}
        />
        <div className="float-right relative -m-8 mr-1">
          {
            type === 'password' ?
              <button
                className="font-bold focus:outline-none text-sm"
                onClick={() => setVisibility(!visibility)}
                type="button"
              >
                {visibility ? 'Ocultar' : 'Mostrar'}
              </button> :
              ''
          }
        </div>
      </label>
    </div>
  );
}

export default Input;