import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import { Octo } from './assets/illustration';
import TextField from './components/TextField';
import Select from './components/Select';
import EventsCard from './components/EventsCard';

const pastEventsOptions = [
   { label: 'True', value: true },
   { label: 'False', value: false },
];

function App() {
   const [data, setData] = useState();
   const [searchText, setSearchText] = useState('');
   const [selectedOption, setSelectedOption] = useState(false);

   const apiUrl = `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=12&past_events=${selectedOption}&search_query=${searchText}`;

   async function fetchData() {
      const { data } = await axios.get(apiUrl);
      setData(data);
   }
   useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedOption]);

   return (
      <div className="py-8 px-[77px]">
         <Header />
         <section className="bg-[#FFDBA6] rounded-[50px] px-6 pt-5  my-5">
            <div className="flex justify-between">
               <div>
                  <h6
                     className="font-[cursive] text-[72px] text-accent font-normal"
                     style={{ fontFamily: 'Caveat Brush' }}
                  >
                     Events
                  </h6>
                  <p className="font-[Nunito] text-[18px] text-accent pl-10 w-2/3">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                     venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum
                     facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                     lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                  </p>
               </div>
               <div>
                  <Octo />
               </div>
            </div>
            <div className="flex justify-center">
               <div
                  className="bg-white rounded-[15px] px-5 py-4 translate-y-[45%] flex items-center gap-8"
                  style={{ boxShadow: '0px 4px 15px 0px #00000026' }}
               >
                  <TextField value={searchText} onChange={(e) => setSearchText(e.target.value)} onClick={fetchData} />
                  <Select
                     options={pastEventsOptions}
                     value={selectedOption}
                     onChange={(e) => setSelectedOption(e.target.value)}
                  />
               </div>
            </div>
         </section>
         <section className="grid gap-8 my-[78px]">
            <p className="font-[Nunito] font-bold text-3xl">{data && data.count} Events</p>
            <div className="flex items-center justify-between flex-wrap gap-x-[62px] gap-y-[29.55px]">
               {data &&
                  data.events.map((item) => (
                     <EventsCard name={item.name} isFree={item.is_free} isVirtual={item.is_virtual} />
                  ))}
            </div>
         </section>
      </div>
   );
}

export default App;
