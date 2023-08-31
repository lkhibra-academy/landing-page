const Link = require("./Link");
const Logo = require("./Logo");

exports.default = function ({ctx}) {
  const url = ctx.getFilter("locale_url");
  const i18n = ctx.getFilter("i18n");
  return (
    <footer className="border-t md:mb-0 mb-16 border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="py-4 md:py-6">
          {/* 1st block */}
          <div className="">
            <div className="mb-2 flex flex-col md:flex-row gap-4 space-between items-center md:gap-8">
              {/* Logo */}
              <Link to={url("/")} className="inline-block " aria-label="Cruip">
                <Logo className="md:w-50 w-40" />
              </Link>

              <Link
                to={url("/responsibility")}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                {i18n("Footer.Disclaimer")}
              </Link>
              <Link
                to={url("/privacy")}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                {i18n("Footer.PrivacyPolicy")}
              </Link>
              <Link
                to={url("/termsofuse")}
                className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                {i18n("Footer.TermsOfUse")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};