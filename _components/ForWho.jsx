const FaqBlock = require("./ForWhoBlock");

exports.default = function ForWho({ ctx }) {
  const i18n = ctx.getFilter("i18n");
  const faq = ctx.getLocale("ForWhoPython.profiles");
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-8 md:py-8">
        <div className="md:gap-4">
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
            <p className="px-2 mb-4 font-bold leading-tight text-2xl md:text-3xl text-right">
              {i18n("ForWhoPython.title")}
            </p>
            <div className="space-y-2">
              {Array.isArray(faq) && faq.map((item, index) => (
                <ForWhoBlock
                title={item.title}
                goal={item.goal}
                goals={item.goals}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
