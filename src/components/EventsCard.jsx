import React from 'react';
import { ConferenceIcon, InfoIcon } from '../assets/icons';

const eImg =
   'https://s3-alpha-sig.figma.com/img/fa5b/298f/c3f8ba4a8f0f8e8b018e25d34b26efbf?Expires=1655078400&Signature=e6zMOVEbINOxLC9CtdUI7s58WD4pr4gWlUboFiD3LLw7k91V8Avfb6iDum5TkDEsyzNZ-j9HnSKKWg8YzO-WaMlHLeuRhm83mTK2ZKzxQn2KMjWnaPvsECNfsksOpYgaDowYQ2OxsJ3MFh1AkCjPT1Q11hXU~nVsB42D129RjpBtWpk87Slswbe8lP0aorbHjt~IGDIZwhuSy20EDh4hnanDknMec2-XbSRXOnlMsvq~zFHfkeilcBh5wC165k-9J0G7e-mQeXfq9~Er10Yb5cUjnAkHIxKD8eQgYRanqEU9O2eiwuBJ8Jz9TiZh1vNJJ7cbdpTYi~116XVE6up-tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';
export default function EventsCard({ name, isVirtual, isFree }) {
   return (
      <div className="sm:w-[272px] xs:w-full rounded-[13.5px] shadow-event-card">
         <img src={eImg} alt="event" className="sm:h-[170px] xs:h-[160px] object-cover w-full rounded-t-[13.5px]" />
         <div className="grid gap-2 px-[14px] pt-[32px] pb-[19px] font-[Prompt]">
            <h4 className="font-semibold text-base text-[#000] cut-text">{name}</h4>
            <div className="flex justify-between items-center text-[10.8px]">
               <div className="flex items-center gap-[6.2px]">
                  <ConferenceIcon /> <span>Raddison Blue</span>
               </div>
               <div className="flex items-center gap-[6.2px]">
                  <InfoIcon />
                  <div>
                     {isFree ? 'Free' : 'Paid'} | {isVirtual ? 'Online' : 'Offline'}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
