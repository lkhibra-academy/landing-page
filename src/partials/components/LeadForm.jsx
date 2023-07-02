import axios from 'axios';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.ma';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TestComp from './TestComp';

export default function LeadForm({ src }) {
  // const [ok, setOk] = useState(false)
  let navigate = useNavigate();
  const [err, setErr] = useState(false)
  /** @type {React.MutableRefObject<HTMLInputElement>} */
  const fullName = useRef()
  /** @type {React.MutableRefObject<HTMLInputElement>} */
  const email = useRef()
  /** @type {React.MutableRefObject<HTMLFormElement>} */
  const form = useRef()
  /** @type {React.MutableRefObject<HTMLSelectElement>} */
  const offer = useRef()
  /** @type {React.MutableRefObject<HTMLSelectElement>} */
  const training = useRef()
  /** @type {React.MutableRefObject<HTMLSelectElement>} */
  const traffic = useRef()
  /** @type {React.MutableRefObject<HTMLSelectElement>} */
  const contact = useRef()
  const [phone, setPhone] = useState('')
  // /** @type {React.MutableRefObject<HTMLInputElement>} */
  // const phone = useRef()
  function clickHandler(e) {
    e.preventDefault();
    if (form.current.reportValidity()) {
      axios
        .post('https://lkhibra.alwaysdata.net/test.php', {
          name: fullName.current.value,
          email: email.current.value,
          phone: phone,
          offer: offer.current.value,
          training: training.current.value,
          traffic: traffic.current.value,
          contact: contact.current.value,
        })
        .then((rep) => {
          if (rep.data.ok) {
            fbq('track', 'Lead');
            if (src == 'Ads') {
              navigate('../ThankYou', { state: { price: offer.current.value } });
            } else navigate('./ThankYou', { state: { price: offer.current.value } });
          } else {
            setErr(true);
          }
        }).catch(() => {
          setErr(true);
        });
    }
  }

  function handleCoupon(code) {
    let q = new URLSearchParams();
    q.set('code', code);
    axios
    .get('https://lkhibra.alwaysdata.net/api/price.php?' + q.toString())
    .then((response) => {
      const arr = response.data;
      setOptions([
        {
          value: arr[0],
          label: `${arr[0]}dh - ثلاثة أشهر كاملة (with ${100*(1050-arr[0])/1050}% discount)`,
        },
        {
          value: arr[1],
          label: `${arr[1]}dh - كل شهر (with ${100*(490-arr[1])/490}% discount)`,
        },
      ]);
    })
    .catch((error) => {
      console.error('Error fetching discount:', error);
    });
  }

  const [options, setOptions] = useState([]);

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let q2 = new URLSearchParams();
    if(query.has('code'))q2.set('code', query.get('code'));
    axios
      .get('https://lkhibra.alwaysdata.net/api/price.php?' + q2.toString())
      .then((response) => {
        const arr = response.data;
        setOptions([
          {
            value: arr[0],
            label: `${arr[0]}dh - ثلاثة أشهر كاملة ${query.has('code')?`(with ${100*(1050-arr[0])/1050}% discount)`:''}`,
          },
          {
            value: arr[1],
            label: `${arr[1]}dh - كل شهر ${query.has('code')?`(with ${100*(490-arr[1])/490}% discount)`:''}`,
          },
        ]);
      })
      .catch((error) => {
        console.error('Error fetching discount:', error);
      });
  }, []);

  return (
    <div className="max-w-lg px-8 mx-4 lg:px-8 rounded-lg border border-gray-200 shadow-md py-4 m-2 bg-white">
      <form ref={form} className="space-y-3">
        <div className={`${err ? '' : 'hidden'}  text-center p-[20px] bg-red-600 text-white w-full mb-[15px]`}>
          An unexpected error occurred.
        </div>
        <div className="">
          <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="name">
            <span>Full Name</span>
            <span>الإسم الكامل</span>
          </label>
          <input ref={fullName} maxLength="30" className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="text" id="name" required />
        </div>
        <div className="">
          <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="phone">
            <span>Phone</span>
            <span>الهاتف</span>
          </label>
          <Cleave
            onChange={(ev) => setPhone(ev.target.rawValue)}
            className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
            options={{ phone: true, phoneRegionCode: 'MA' }}
            required
          />
        </div>
        <div className="">
          <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
            <span>Email</span>
            <span>البريد الإلكتروني</span>
          </label>
          <input ref={email} className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" type="email" id="email" required />
        </div>
        <div className="">
          <select id="training" ref={training} className="mb-2 pr-2 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5 hidden">
            <option value="Programming"></option>
            <option value="Programming" defaultValue>
              Programming Training
            </option>
          </select>
        </div>
        <div className="">
          <label className="mb-1 text-sm text-gray-600 flex justify-between" htmlFor="email">
            <span>Choose the offer</span>
            <span>اختر العرض </span>
          </label>
          <select id="offer" ref={offer} className="mb-2 pr-2 rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5" required>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <select id="traffic" ref={traffic} className="hidden">
          <option value={src} defaultValue></option>
        </select>
        <select id="contact" ref={contact} className="hidden">
          <option value="WA" defaultValue></option>
        </select>
        <div className="">
          <a
            onClick={clickHandler}
            className="btn rounded-lg bg-black text-lg p-2.5 text-white bg-red-primary w-full flex justify-around items-center"
            type="submit"
          >
            تسجيل
          </a>
        </div>
      </form>
      <TestComp language="Arabic" onClick={handleCoupon} />
    </div>
  );
}
