const Feat = ({title,desc}) => (
  <div className="relative flex flex-col items-center p-6 bg-white rounded">

    <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
      {title}
    </h4>
    <p className="text-gray-600 text-center">
      {desc}
    </p>
    <div className="mt-4">
      <a
        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
        href="#0"
      >
        بغيت نتعلم
      </a>
    </div>
  </div>
);
export default Feat;
