const Feat = ({title,subtitle,li1,li2,li3,li4,li5,li6}) => (
  <div className="relative flex flex-col items-center px-5 py-4 bg-white rounded outline outline-1 outline-gray-100">

    <h4 className="text-xl font-bold leading-snug tracking-tight text-center text-red-primary h-15 mb-3">
      {title}
    </h4>
    <p className=" text-center text-lg font-medium mb-2">
      {subtitle}
    </p>
    <div className="text-black-primary w-60">
    <ul className="text-gray-900 list-inside leading-normal text-left font-medium ">
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li>{li4}</li>
            <li>{li5}</li>
            <li>{li6}</li>
    </ul>
    </div>
    <div className="mt-4">
      <a
        className="btn font-extrabold text-red-primary outline outline-1 outline-red-primary hover:bg-red-primary hover:text-white w-full m-1 sm:w-auto sm:mb-0 "
        href="#checkout"
      >
        بغيت نبدا
      </a>
    </div>
  </div>
);
export default Feat;
