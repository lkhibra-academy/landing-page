const TestimonyCard = ({name,status,quote,pic}) => (
    // {li1}
    <div>
                    <blockquote className="px-3 py-4 bg-white">
                        <div className="flex items-center">
                        <img
                            src={pic}
                            alt=""
                            className="object-cover w-16 h-16 rounded-full"
                        />

                        <div className="ml-4 text-sm">
                            <p className="font-medium">{name}</p>
                            <p className="mt-1">{status}</p>
                        </div>
                        </div>

                        <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        {quote}
                        <span className="text-xl">&rdquo;</span>
                        </p>
                    </blockquote>
                    </div>
  );
  export default TestimonyCard;
  