import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Modal from '../../utils/Modal';
import LeadForm from './LeadForm';

export default function Offers(props) {
  const [ModalOpen, setModalOpen] = useState(false);
  let src1 = props.src;
  let content = {
    Arabic: {
      title: ': يتضمن  هذا تدريب ',
      item1: '12 حصة برمجية (Google Meet)',
      item2: '6 حصص Soft skills',
      item3: '10 مشاريع برمجية ',
      item4: 'شهادة معتمدة',
      item5: 'متابعة شخصية',
      item6: 'أكتر من 20 ملفات دروس لتحميل',
      item7: 'تمارين تطبيقية',
      
      item11:" 4 حصص برمجية (Google Meet)",
      item22:" حصتين Soft skills",
      item33:" 3 مشاريع برمجية ",
      item44:"متابعة شخصية",
      item55:"تمارين تطبيقية",
    },
    French: {},
  };
  props.language === 'Arabic'
    ? (content = content.Arabic)
    : (content = content.French);

  const [code, setCode] = useState('');
  const [options, setOptions] = useState([
    {
      value: 1050,
      label: `1050dh - ثلاثة أشهر كاملة`,
    },
    {
      value: 490,
      label: `490dh - كل شهر`,
    },
  ]);

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let q2 = new URLSearchParams();
    if(query.has('code') && query.get('code') !== '') {
      q2.set('code', query.get('code'));
      setCode(query.get('code'));
    }
    axios
      .get('https://lkhibra.alwaysdata.net/api/price.php?' + q2.toString())
      .then((response) => {
        const arr = response.data;
        if (arr == null) {
          query.delete('code');
          navigate(`?${query.toString()}`, {replace: true});
          setOptions([
            {
              value: 1050,
              label: `1050dh - ثلاثة أشهر كاملة`,
            },
            {
              value: 490,
              label: `490dh - كل شهر`,
            },
          ]);
        } else {
          setOptions([
            {
              value: arr[0],
              label: `${arr[0]}dh - ثلاثة أشهر كاملة ${q2.has('code')?`(with ${100*(1050-arr[0])/1050}% discount)`:''}`,
            },
            {
              value: arr[1],
              label: `${arr[1]}dh - كل شهر ${q2.has('code')?`(with ${100*(490-arr[1])/490}% discount)`:''}`,
            },
          ]);
        }
      })
      .catch((error) => {
        console.error('Error fetching discount:', error);
      });
  }, []);

  return (
    <section id="offers" className="relative max-w-6xl mx-auto px-0 sm:px-6 mb-4 mt-2">
      <div className="relative items-center w-fit mx-auto px-3 md:px-1 lg:px-16 max-w-7xl">
        <div className="relative md:p-2 overflow-hidden md:grid md:grid-cols-2 rounded-xl md:space-x-4 md:space-y-0 space-y-4 gap-x-1 md:gap-x-8">
          {/* left card */}
          <div dir="rtl" className="relative flex flex-col p-5 bg-white rounded-2xl">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-neutral-600 white">
                العرض أساسي
              </h3>
              <p className="flex items-baseline text-neutral-600 space-x-2 leading-tight">
                <span className="text-6xl font-bold">
                  {options[1]?.value}
                </span>
                <span className="text-2xl font-semibold text-neutral-500">
                  {' '}
                  درهم{' '}
                </span>
              </p>
              <p className="mb-3">
                <span className="text-base font-medium text-white bg-neutral-400 px-3 py-1 rounded-lg">
                  كل شهر
                </span>
              </p>
              <ul dir="rtl" className="text-gray-700 text-base md:text-lg list-inside pt-3">
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-users-rectangle w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item11}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-users w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item22}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-brands fa-python w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item33}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-brands fa-whatsapp w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item44}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-code w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item55}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4 rounded-lg">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setModalOpen(true);
                }}
                aria-controls="modal"
                className="flex justify-around items-center rounded-md text-lg mt-2 font-normal p-2 bg-red-primary text-white w-full text-center"
                type="submit"
              >
                تسجيل
              </a>
            </div>
          </div>

          {/* right card */}
          <div dir="rtl" className="relative flex flex-col p-5 bg-red-primary rounded-2xl md:order-last">
            <div className="relative flex-1">
              <h3 className="font-semibold text-lg text-white">أحسن عرض</h3>
              <p className="flex items-baseline text-white space-x-2 leading-tight">
                <span className="text-6xl font-bold">
                  {options[0]?.value}
                </span>
                <span className="text-2xl font-semibold "> درهم </span>
              </p>
              <p className="mb-3">
                <span className="text-base font-medium text-red-primary bg-white px-3 py-1 rounded-lg">
                  3 أشهر كاملة
                </span>
              </p>
              <ul dir="rtl" className="text-white text-base md:text-lg list-inside pt-3">
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-users-rectangle w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item1}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-users w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item2}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-brands fa-python w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item3}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-award w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item4}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-brands fa-whatsapp w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item5}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-regular fa-file-code w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item6}</p>
                  </div>
                </li>
                <li className="flex items-start flex-row mb-1">
                  <i className="fa-solid fa-code w-8 p-1 lg:ml-1 text-center"></i>
                  <div className="">
                    <p>{content.item7}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-4 rounded-lg">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setModalOpen(true);
                }}
                aria-controls="modal"
                className="flex justify-around items-center rounded-md text-lg mt-2 font-medium p-2 text-red-primary bg-white w-full text-center"
                type="submit"
              >
                تسجيل
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal id="modal" ariaLabel="modal-headline" show={ModalOpen} handleClose={() => setModalOpen(false)}>
        <div className="relative">
          <LeadForm src={props.src} options={options} setOptions={setOptions} code={code} setCode={setCode}/>
        </div>
      </Modal>
    </section>
  );
}
