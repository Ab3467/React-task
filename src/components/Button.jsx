import React from 'react';

export default function Button({ btnName, onClick, ...props }) {
  return (
    <button onClick={onClick} type={type} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 font-serif" {...props}>
      {btnName}
    </button>
  );
}
