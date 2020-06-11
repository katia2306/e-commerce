import React, { useState } from 'react';

const Input = (props) => {
  const { type, name } = props;
  const [visibility, setVisibility] = useState(false);
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState('');

  return (
    <div className="shadow appearance-none border rounded w-full leading-thigt mt-4">
      <label className="">
        <span
          className={`transition-width ease-in-out duration-500 absolute h-12 w-56 xl:w-5/12 mx-1 text-gray-600 ${(focus || text.length > 0) ? 'mt-0 text-xs' : 'mt-4 text-base'}`}
        >
          {name}
        </span>
        <input
          className={`block h-12 ${type === 'password' ? 'w-40' : 'w-56'} pt-3 mx-1 focus:outline-none`}
          type={type !== 'password' ? type : visibility ? 'text' : 'password'}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={event => setText(event.target.value)}
          value={text}
        />
        <div className="float-right relative -m-8 mr-1">
          {
            type === 'password' ?
              <button
                className="font-bold focus:outline-none"
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