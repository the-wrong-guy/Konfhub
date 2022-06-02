import React from 'react';
import { SearchIcon } from '../assets/icons';

export default function TextField({ value, onChange, onClick }) {
   return (
      <div className="grid gap-2">
         <label className="font-semibold">Search</label>
         <div className="bg-white flex sm:items-center border-[1px] border-[grey] outline-none rounded-md py-2 px-3 justify-between">
            <input value={value} onChange={onChange} className="border-none outline-none bg-transparent" />
            <button onClick={onClick}>
               <SearchIcon />
            </button>
         </div>
      </div>
   );
}
