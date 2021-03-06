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
   const [limit, setLimit] = useState(12);

   const apiUrl = `https://iitm1blt3l.execute-api.ap-southeast-1.amazonaws.com/dev/hosted-events?limit=${limit}&past_events=${selectedOption}&search_query=${searchText}`;

   async function fetchData() {
      const { data } = await axios.get(apiUrl);
      setData(data);
   }

   useEffect(() => {
      setLimit(12, () => fetchData());
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedOption]);

   useEffect(() => {
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [limit]);

   return (
      <div className="py-8 sm:px-[77px] xs:px-[20px]">
         <Header />
         <section className="bg-[#FFDBA6] md:rounded-[50px] px-6 pt-5  my-5 xs:rounded-[25px]">
            <div className="flex justify-between xs:flex-col sm:gap-10 lg:flex-row">
               <div>
                  <h6
                     className="font-[cursive] text-[72px] text-accent font-normal"
                     style={{ fontFamily: 'Caveat Brush' }}
                  >
                     Events
                  </h6>
                  <p className="font-[Nunito] text-[18px] text-accent md:pl-10 lg:w-2/3 xs:pl-0 xs:w-full">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                     venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum
                     facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                     lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                  </p>
               </div>
               <div className="xs:flex justify-center sm-w-[354px] h-[332px] xs:w-full">
                  <Octo />
               </div>
            </div>
            <div className="md:flex justify-center xs:block">
               <div
                  className="bg-white rounded-[15px] px-5 py-4 translate-y-[45%] flex items-center md:gap-8 xs:gap-3 xs:flex-col sm:flex-row"
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
         <section className="grid gap-8 sm:my-[78px] xs:mt-[150px] xs:mb-[50px]">
            <p className="font-[Nunito] font-bold text-3xl">{data && data.count} Events</p>
            <div className="flex items-center justify-between flex-wrap gap-x-[62px] gap-y-[29.55px]">
               {data &&
                  data.events.map((item, index) => (
                     <EventsCard
                        key={item.name + item.is_free + index}
                        name={item.name}
                        isFree={item.is_free}
                        isVirtual={item.is_virtual}
                     />
                  ))}
            </div>
         </section>
         {data && data.count > 12 && (
            <div className="flex items-center sm:gap-x-[40px] xs:gap-x-[15px]">
               <div className="flex flex-1 h-[2px] rounded-sm w-full bg-[#CCCCCC]" />
               <button
                  className="border-[#CCCCCC] border-[1px] w-[143px] h-[48px] rounded-full text-lg"
                  onClick={() => setLimit((prev) => prev + 12)}
               >
                  Load More
               </button>
               <div className="flex flex-1 h-[2px] rounded-sm w-full bg-[#CCCCCC]" />
            </div>
         )}
      </div>
   );
}

export default App;
