import React,{useState} from "react";
// import TestimonialsData from "./Testimonials";

export default function TestimonyCard(props) { 
    // {li1}
    //     let malak ="I'm very much impressed and satisfied with my experience in lkhibra because I got all the training and support that I was looking for, the tutor was very helpful, he took care of any needs I required. <br /> I'm glad I have done this training.";
    // let malakk="heelo "+{quote};
    let [showMore, setShowMore] = useState(false);
    // let {str} =TestimonialsData;
    // const str ={quote};
    // console.log(malak);
    // console.log(text.substring(0,50));
    // console.log(text.sort());
    
    return (
        
        <div className='shadow-md rounded-md p-3 border'>
                        <blockquote className="px-3 bg-white">
                            <div className="flex items-center">                         
                            <img src={props.pic} alt="" className="object-cover w-12 h-12 rounded-full"/>
                            <div className="ml-4">
                                <p className="font-medium text-base mb-0">{props.name}</p>
                                <p className="font-light text-sm text-gray-800">{props.status}</p>
                            </div>
                            </div>
                            <p className="relative mt-1.5 leading-tight text-gray-500 text-base">
                            <span className="">&ldquo;</span>
                            {showMore ? `${props.quote}` : `${props.quote.substring(0, 150)+"..."}`}
                            <span className="">&rdquo;</span>
                            <a className="text-gray-700 font-semibold text-right" 
                            onClick={() => setShowMore(!showMore)}>
                            {showMore ? "  Show less " : "  Show more "}</a> 
                            </p>
                        </blockquote>
                    </div>
    
  );
}
  