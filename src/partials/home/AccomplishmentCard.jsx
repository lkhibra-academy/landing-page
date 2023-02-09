
export default function AccomplishmentCard({num,desc}) { 
    
    return (
    // {li1}
    <div href="" className="relative p-2 border border-red-primary 
    rounded-xl shadow-xl text-center 
    justify-self-center sm:w-full  lg:w-72 min-w-72 w-full
    mx-8
    ">
        {/* sm:bg-red-400 md:bg-yellow-400 lg:bg-cyan-400 bg-green-400  */}
        {/* sm:mx-20 md:mx-0 lg:mx-4 mx-5 */}
        <h5 className="text-5xl font-bold">{num}</h5>
        <p className="mt-1 mb-3 text-lg font-medium text-gray-500 " dir='rtl'>
        {desc}</p>
    </div>
  );}
 AccomplishmentCard;
  