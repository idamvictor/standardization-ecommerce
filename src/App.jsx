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

        <section>
          <FeaturedPosts />
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
        <h1 className="text-2xl font-bold text-slate-800 pr-[75px] pl-5">
          Bandage
        </h1>
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
                Defalcate is most focused in helping you discover your most
                beautiful smile
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

//=================================== Featured Post ========================================

const featuredPostsData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/137ee045d17db0d8a843f46a2c028f3e0b6d45d06f9d76690996c1d3a40c90ad?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5176f8123efc5e5ed77a3e39715f08848ef3edc6070d32ebef7506fce3a25b47?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6ce86feaff67972207477c94e6a4f89822e7f477eb3e71586c0d1fb2a6ed1319?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];

function FeaturedPosts() {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
        <header className="flex overflow-hidden flex-col items-center max-w-full font-bold text-center w-[692px]">
          <div className="flex overflow-hidden flex-col items-center w-full">
            <p className="text-sm leading-6 text-sky-500">Practice Advice</p>
            <h2 className="mt-2.5 text-4xl leading-none text-slate-800">
              Featured Posts
            </h2>
          </div>
        </header>
        <div className="flex flex-wrap gap-8 justify-center items-start mt-20 max-md:mt-10 max-md:max-w-full">
          {featuredPostsData.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

//==================================================== Post Cards ==============================================

function PostCard({ imageSrc, category, title, description, date, comments }) {
  return (
    <article className="flex flex-col items-center min-w-[240px] w-[328px]">
      <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
        <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
          <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
            <img
              loading="lazy"
              src={imageSrc}
              alt=""
              className="object-cover absolute inset-0 size-full"
            />
            <div className=" relative px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
              NEW
            </div>
          
          </div>
        </div>
        <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
          <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
            <span className="self-stretch my-auto text-blue-300">
              {category}
            </span>
            <span className="self-stretch my-auto">Trending</span>
            <span className="self-stretch my-auto">New</span>
          </div>
          <h3 className="mt-2.5 text-xl leading-8 text-slate-800">{title}</h3>
          <p className="mt-2.5 text-sm leading-5">{description}</p>
          <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
            <time className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e8a43b443fc7fd89703c103b429c334a984578935b884dbd82434d5da88ab61?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span className="self-stretch my-auto">{date}</span>
            </time>
            <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52faff3b7c96f3ca81be691a4cbe9db7e976facbe51b598b38dd5b19a6f32d39?apiKey=bc155cd4463f4c48a216b01c1991193c&"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.14]"
              />
              <span className="self-stretch my-auto">{comments} comments</span>
            </div>
          </div>
          <a
            href="#"
            className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6"
          >
            <span className="self-stretch my-auto">Learn More</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/712c57a79312d8124af9434f43b3862dfd68b5030aa3d81e79f25f89dca37c3d?apiKey=bc155cd4463f4c48a216b01c1991193c&"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
