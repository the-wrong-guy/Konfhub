import React from 'react';

export default function Select({ options, onChange, value }) {
   return (
      <div className="grid gap-2 sm:w-40 xs:w-full">
         <label className="font-semibold">Past Events</label>
         <select
            onChange={onChange}
            className="bg-white rounded-md py-2 px-3 border-[1px] border-[grey] flex flex-1"
            placeholder="Select Type"
            value={value}
         >
            {/* <option value="" disabled selected>
               Select Type
            </option> */}
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
      </div>
   );
}
