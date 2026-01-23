export default function TopHeader() {
  return (
    <div className="w-full bg-black text-white py-3 md:py-4">
      {/* Main Container */}
      <div className="mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          
          {/* Left Section - Sale Message */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 flex-wrap text-center md:text-left">
            <p className="text-sm md:text-base font-medium text-gray-100">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <a 
              href="#"
              className="font-semibold text-white underline hover:text-yellow-400 transition-colors duration-300 ease-in-out cursor-pointer text-sm md:text-base whitespace-nowrap"
            >
              Shop Now
            </a>
          </div>

          {/* Right Section - Language Selector */}
          <div className="relative group">
            <button 
              className="flex items-center gap-1 px-3 py-1.5 text-sm md:text-base font-medium text-white hover:text-yellow-400 transition-colors duration-300 ease-in-out hover:bg-white/5 rounded"
            >
              <span>English</span>
              <svg 
                className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform origin-top-right group-hover:scale-100 scale-95 z-50">
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-gray-100 first:rounded-t transition-colors duration-200"
              >
                English
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
              >
                Español
              </a>
              <a 
                href="#" 
                className="block px-4 py-2 hover:bg-gray-100 last:rounded-b transition-colors duration-200"
              >
                中文
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
