/**
 * 
 * @param {{ title: string,goal: string,goals: string[] }} props 
 * @returns 
 */
module.exports = function ForWhoBlock({ title,goal,goals}) {
    
    return(
    <details dir='rtl' className=" group">
        <summary className="flex items-center justify-between cursor-pointer 
        py-3 px-4 border-y border-y-gray-300 mb-2">
        <p className="text-lg font-medium text-gray-800 lg:text-xl ">
        {title}
        </p>
        <i className="fa fa-chevron-down
        flex-shrink-0 p-1 text-center transition duration-300 group-open:hidden"></i>
        <i className="fa fa-chevron-up
        flex-shrink-0 p-1 text-center transition duration-300 hidden group-open:block"></i>
        </summary>

        <div className="py-1 px-4 leading-relaxed text-gray-700">
        <ul>                 
            <li className='font-bold mb-2 mr-2'>
                {goal}
            </li>

            {goals.map((item, index) => (
                <li key={index} className='flex items-start flex-row mb-1.5'>
                <i className="fa-solid fa-check w-8 p-1 ml-1 text-center"></i>
                <div className=''>
                    <p>{item}</p>
                </div>
                </li>
            ))}

        </ul>
        </div>
    </details>
    );
}