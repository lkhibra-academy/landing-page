import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../utils/Modal';
import LeadForm from '../components/LeadForm';

export default function JoinUsTraining() {
    const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
      <section className="relative ">
          <div className=" flex flex-col items-center max-w-6xl mx-auto px-5 sm:px-6 py-8 ">
              <div className="flex flex-col w-full prose text-left max-w-max lg:max-w-2xl ">
                  <div dir='rtl' className="w-full mx-auto text-center">
                      <h1 className='h1 mb-4'>
                      إنضم إلى أكثر من 40 طالب 
                      </h1>
                      <p className='text-lg md:text-xl font-normal text-neutral-600'>
                      اختصر وقت تعلمك للمهارات الأكثر طلبا في سوق الشغل واحصل على شهادة معتمدة في التصميم والبرمجة
                      </p>
                  </div>
              </div>
              <div class="flex flex-wrap justify-center mt-8 gap-4">
                    <Link onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} 
                        aria-controls="modal"
                        class="block w-full px-12 py-3 text-base font-medium text-white bg-red-primary rounded shadow sm:w-auto "
                         to={"/Training"}>
                    ابدأ الآن
                    </Link>  
                </div>
          </div>
           <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
                <div className="relative ">
                <LeadForm />
                </div>
            </Modal>
      </section>
    );
}



                    
