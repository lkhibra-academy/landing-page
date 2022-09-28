const TrainingCard = ({title,desc,li1,li2,li3,pic}) => (
    // {li1}
    <a className="overflow-hidden rounded-xl 
    grid grid-cols-1 group sm:grid-cols-3 shadow-xl
    border border-gray-300"
    href="">

        <div className="relative">
            <img
            className="absolute inset-0 object-cover w-full h-full"
            src={pic}
            alt={title}
            />
        </div>

        <div className="p-8 sm:col-span-2 " dir='rtl'>
            <ul className="flex md:space-x-1 flex-wrap space-y-1">
                <li
                    className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-primary rounded-full ml-1" 
                >
                    {li1}
                </li>
                <li
                    className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-primary rounded-full"
                >
                    {li2}
                </li>
                <li
                    className="inline-block px-3 py-1 text-xs font-semibold text-white bg-red-primary rounded-full"
                >
                    {li3}
                </li>
            </ul>

            <h5 className="my-2.5 text-2xl font-bold">{title}</h5>

            <p className="mt-2 text-sm text-gray-500">
            {desc}</p>
            {/* <a type="button" className=" border border-red-primary focus:outline-none 
            hover:bg-red-primary focus:ring-4 focus:ring-red-primary hover:text-white
            font-bold text-red-primary
            rounded-lg px-3 py-2.5 mb-2 mt-5">
            بغيت نبدا
            </a>  */}
            <div
                className="inline-block pb-1 mt-4 font-medium text-red-primary
                border-b border-red-primary "
                >
                اكتشف المزيد
            </div>
        </div>
    </a>
  );
  export default TrainingCard;
  