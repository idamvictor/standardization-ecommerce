/*eslint-disable react/prop-types */

function App() {
  return (
    <>
      <header>
        <GreenHeader />
        <LightHeader />
      </header>

      <main>
        <section className="flex w-full justify-center">
          <FeaturedProducts />
        </section>

        <section>
          <Services />
        </section>
      </main>
    </>
  );
}

export default App;

//==================================== Green Header ================================
const GreenHeader = () => {
  return (
    <header className="flex overflow-hidden flex-col justify-center pt-2.5 text-sm font-bold tracking-wide leading-6 text-white bg-teal-700">
      <div className="flex overflow-hidden justify-between items-start">
        <div className="flex flex-wrap gap-10 justify-between items-start px-6 min-w-[15rem] w-[100%] max-md:px-5 max-md:max-w-full">
          <div className="flex overflow-hidden gap-2.5 items-center min-h-[2.875rem] min-w-[15rem]">
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch p-2.5 my-auto rounded-md ">
              <img
                loading="lazy"
                src="https://shorturl.at/HvtGl"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <div className="self-stretch my-auto">(225) 555-0118</div>
            </div>

            <div className="flex overflow-hidden gap-1.5 items-center self-stretch p-2.5 my-auto rounded-md">
              <img
                loading="lazy"
                src="https://shorturl.at/UzkDL"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <div className="self-stretch my-auto">
                michelle.rivera@example.com
              </div>
            </div>
          </div>
          <p className="overflow-hidden gap-2.5 p-2.5 min-w-[15rem]">
            Follow Us and get a chance to win 80% off
          </p>
          <div className="flex overflow-hidden gap-2.5 items-start p-2.5 min-h-[2.875rem]">
            <p>Follow Us :</p>
            <img
              loading="lazy"
              src="https://shorturl.at/jk6rA"
              alt="Social media icons"
              className="object-contain shrink-0 aspect-[4.61] w-[7.5rem]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

//======================================= Light Header =============================

const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", isActive: false },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Pages", href: "/pages" },
];

function LightHeader() {
  return (
    <header className="flex flex-wrap gap-2.5 p-4 overflow-hidden">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-slate-800 pr-[75px] pl-5">Bandage</h1>
      </div>

      <nav className="flex-grow">
        <ul className="flex gap-4 list-none p-0 m-0 align-middle mt-3">
          {navItems.map((item) => (
            <li key={item.label} className="text-sm">
              <a
                href={item.href}
                className={`no-underline ${
                  item.isActive
                    ? "font-medium text-slate-800"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 p-2 border-none bg-transparent text-sky-500 font-bold text-sm cursor-pointer">
          <img src="https://shorturl.at/s4JJo" alt="" className="w-4 h-4" />
          <span>Login / Register</span>
        </button>

        <button className="bg-none border-none cursor-pointer p-2">
          <img
            src="https://shorturl.at/dc286"
            alt="Search"
            className="w-9 h-9 object-contain"
          />
        </button>

        <button className="bg-none border-none cursor-pointer p-2">
          <img
            src="https://shorturl.at/9H0JH"
            alt="Cart"
            className="w-9 h-9 object-contain"
          />
        </button>

        <button className="bg-none border-none cursor-pointer p-2">
          <img
            src="https://shorturl.at/tQ6YD"
            alt="Wishlist"
            className="w-9 h-9 object-contain"
          />
        </button>
      </div>
    </header>
  );
}

//====================================== Hero Section ================================

// ======================================  Featured Products section ====================

const FeaturedProducts = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center max-w-[68.4rem] ">
      {/*Header */}
      <h2 className="text-xl">Featured Products</h2>
      <h1 className="mt-2.5 text-2xl font-bold tracking-normal leading-none text-slate-800">
        BESTSELLER PRODUCTS
      </h1>
      <p className="mt-2.5 text-sm leading-none">
        Problems trying to resolve the conflict between
      </p>
      {/* Product Grid */}
      <ProductGrid />
      {/* Button to lode more product */}
      <button className="overflow-hidden px-2.5 py-1 mt-1.5 text-sm font-bold tracking-wide leading-7 text-center text-sky-500 rounded-md border border-sky-500 border-solid max-md:px-1.25">
        LOAD MORE PRODUCTS
      </button>
      
    </section>
  );
};

//=================================== Product Grid =======================================

const productData = [
  {
    imageSrc: "https://tinyurl.com/2p8sdssy",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/45spar3t",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/msfwwjz4",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/2e22y7nn",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/4jz3sdmr",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/4nnm5mur",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/3mkx8zbs",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/3uyjh9ed",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/y2bxy44v",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
  {
    imageSrc: "https://tinyurl.com/yxzjdyhe",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "16.48",
    discountedPrice: "6.48",
  },
];

const ProductGrid = () => {
  return (
    <section className="flex overflow-hidden flex-col p-6 max-md:px-5 max-md:max-w-full ">
      <div className="flex flex-wrap gap-8 items-start max-md:max-w-full">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

// ======================================= Product Card ========================================
const ProductCard = ({
  imageSrc,
  title,
  department,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <article className="flex flex-col w-[11.4375rem]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white w-[11.4375rem]">
        <div className="flex overflow-hidden flex-col w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={`${title} product image`}
            className="object-contain w-full aspect-[0.77]"
          />
        </div>
        <div className="flex overflow-hidden flex-col items-center pt-6 pr-5 pb-9 pl-5 w-full text-base font-bold tracking-normal text-center">
          <h3 className="text-slate-800">{title}</h3>
          <p className="mt-2.5 text-sm tracking-wide leading-6 text-neutral-500">
            {department}
          </p>
          <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 whitespace-nowrap">
            <span className="text-stone-300 w-[3.25rem]">${originalPrice}</span>
            <span className="text-teal-700 w-[2.8125rem]">
              ${discountedPrice}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

//=================================== Services ===================================================
function Services() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 pb-4 w-full text-center bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center py-20 w-full max-w-[1050px] max-md:max-w-full">
        <header className="flex overflow-hidden flex-col items-center max-w-full tracking-wide text-neutral-500 w-[692px]">
          <div className="flex overflow-hidden flex-col items-center w-full">
            <h2 className="text-xl">Featured Products</h2>
            <h3 className="mt-2.5 text-2xl font-bold tracking-normal leading-none text-slate-800">
              THE BEST SERVICES
            </h3>
            <p className="mt-2.5 text-sm leading-none">
              Problems trying to resolve the conflict between
            </p>
          </div>
        </header>

        <div className="flex flex-wrap gap-8 justify-center items-start mt-20 max-md:mt-10 max-md:max-w-full">
          {/* First Product */}
          <article className="flex flex-col items-center min-w-[240px] w-[328px]">
            <div className="flex overflow-hidden flex-col items-center px-10 py-9 max-w-full w-[315px] max-md:px-5">
              <img
                loading="lazy"
                src="https://tinyurl.com/5exf8mre"
                alt=""
                className="object-contain aspect-square w-[72px]"
              />
              <h4 className="mt-5 text-2xl font-bold tracking-normal leading-none text-slate-800">
                Easy Wins
              </h4>
              <p className="mt-5 text-sm tracking-wide leading-5 text-neutral-500">
                Get your best looking smile now!
              </p>
            </div>
          </article>

          {/* Second Product */}
          <article className="flex flex-col items-center min-w-[240px] w-[328px]">
            <div className="flex overflow-hidden flex-col items-center px-10 py-9 max-w-full w-[315px] max-md:px-5">
              <img
                loading="lazy"
                src="https://tinyurl.com/4je35mbz"
                alt=""
                className="object-contain aspect-square w-[72px]"
              />
              <h4 className="mt-5 text-2xl font-bold tracking-normal leading-none text-slate-800">
                Concrete
              </h4>
              <p className="mt-5 text-sm tracking-wide leading-5 text-neutral-500">
                Defalcate is most focused in helping you discover your most beautiful smile
              </p>
            </div>
          </article>

          {/* Third Product */}
          <article className="flex flex-col items-center min-w-[240px] w-[328px]">
            <div className="flex overflow-hidden flex-col items-center px-10 py-9 max-w-full w-[315px] max-md:px-5">
              <img
                loading="lazy"
                src="https://tinyurl.com/389y72a9"
                alt=""
                className="object-contain aspect-square w-[72px]"
              />
              <h4 className="mt-5 text-2xl font-bold tracking-normal leading-none text-slate-800">
                Hack Growth
              </h4>
              <p className="mt-5 text-sm tracking-wide leading-5 text-neutral-500">
                Overcame any hurdle or any other problem.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

//=================================== Testimonial Section ========================================
