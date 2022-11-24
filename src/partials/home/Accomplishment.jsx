import React from 'react';
import AccomplishmentCard from './AccomplishmentCard'

export default function Accomplishment() {
    
      return (
        //           flex justify-center items-center flex-row gap-12 bg-black-dark
        <div className='relative max-w-6xl mx-auto px-5 sm:px-6 py-12 
        '>
            {/* // sm:flex sm:justify-center sm:items-center */}
            <div class=" 
                grid gap-6 sm:grid-cols-3 grid-cols-1 
                ">
                        {/* bg-red-light     */}
                {/*   */}
                
                <AccomplishmentCard num={"80+"} desc={" عدد تلاميذ"} />
                <AccomplishmentCard num={"6000+"} desc={" عدد ساعات التدريب "}/>
                <AccomplishmentCard num={"100+"} desc={" عدد الحصص "}/>
                
             </div>
        </div>
  );
}

