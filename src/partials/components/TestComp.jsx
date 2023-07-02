import React, { useState } from "react";
import axios from 'axios';

export default function TestComp(props) {
  let content = {
    Arabic: {
      title1: " ؟ ",
      title: "هل لديك ",
      item1: "رغبة في التعلم",
      item2: "حاسوب",
      item3: "أنترنيت",
    },
    French: {},
  };
  props.language === "Arabic"
    ? (content = content.Arabic)
    : (content = content.French);

  const [discount, setDiscount] = useState('');

  const handleSubmit = () => {
    // Send the discount value to the backend
    fetch('https://lkhibra.alwaysdata.net/discount.php', {
      method: 'POST',
      body: JSON.stringify({ discount }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
      })
      .catch((error) => {
        // Handle errors
        setErr(true)
      });
  };

  return (
    <section className="relative max-w-6xl text-center px-7 mx-auto sm:px-10 md:py-0 pb-4 pt-2">
      <details className="group">
        <summary dir="rtl" className="flex items-center justify-center cursor-pointer pt-2 px-4">
          <p className="text-sm md:text-lg font-light md:font-medium text-gray-600 text-center">
            {content.title}
            <span className="text-red-primary font-medium text-sm md:text-base"> COUPON CODE </span>
            {content.title1}
          </p>
        </summary>
        
        <div className="my-3 mx-auto leading-relaxed text-gray-700 max-w-sm rounded-md flex flex-row justify-center items-center border border-gray-200 shadow-lg">
        <form action="">
          <input
            type="text"
            placeholder="COUPON CODE"
            className="shrink w-full rounded-l-md"
            name="discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <button
            type={submit}
            className="text-white bg-red-primary px-3 py-2 rounded-r-md"
            onClick={clickHandler}
          >
            Apply
          </button>
          <div className={`${err?'':'hidden'}  text-center p-[20px] bg-red-600 text-white w-full mb-[15px]`}>
                        Wrong Code. try again!
                    </div>
        </form>
        </div>
      </details>
    </section>
  );
}
