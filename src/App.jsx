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

        <section>
          <Testimonial />
        </section>

        <section>
          <CTA />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
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
    <section className="flex overflow-hidden flex-col items-center max-w-[68.4rem] py-20 ">
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

// ======================================== Testimonial =========================
function Testimonial() {
  return (
    <section className="flex overflow-hidden flex-col items-start px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col justify-center py-20 w-full max-w-[1128px] max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-10 justify-between items-center p-12 w-full max-md:px-5">
          <TestimonialCard />
          <ImageGrid />
        </div>
      </div>
    </section>
  );
}

// ============================== Testimonial Card ============================
function TestimonialCard() {
  return (
    <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] w-[438px] max-md:max-w-full">
      <h2 className="text-2xl font-bold tracking-normal leading-none text-center text-slate-800">
        What they say about us
      </h2>
      <div className="flex justify-center items-start px-0.5 py-8 mt-7 max-w-full bg-white rounded-md w-[446px]">
        <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[442px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c94bda080bfcf8fbf937b234173d70cc17b73d79287fcb99a8e8ab9b1735d77?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
            className="object-contain aspect-square w-[90px]"
            alt="Testimonial avatar"
          />
          <StarRating rating={4} />
          <p className="mt-5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500 max-md:max-w-full">
            Slate helps you see how many more days you need to work to
            <br />
            reach your financial goal.
          </p>
          <div className="flex flex-col items-center mt-5 text-sm font-bold tracking-wide leading-6 text-center">
            <span className="text-sky-500">Regina Miles</span>
            <span className="text-slate-800">Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===================================== Star Rating ============================
const StarRating = ({ rating }) => {
  // Create an array of length 5 for the 5 stars.
  const stars = Array(5).fill(0);

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <span
          key={index}
          className={`text-3xl ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

//=================================== Image Grid =============================
function ImageGrid() {
  const images = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/580b0d5c38633877ba076d9c8ec4c5639e23ba3062aeb93a076241488758fb12?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f464271b63ee1c2cc924f51a6165f588ef811b90b05cd533a3cf36be021df598?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/61bb4007303e5c34033226be6cccb14405e9251c41134f8cbffce5e4ecfe2b61?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/36d4deca689cf75eae3eaf17eff247049eba9e6ab728f4798b577ac1f2b81b73?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc37ba9ebdc3a9534708a3d1f4d2e25d94d82d8cb2cb51ddbb534b0d2703826f?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 5",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/30d98506cc136b4143e0d9b30f6d26740a4db2e7cb79d624e320ecfa5cc22c34?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 6",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8b197438b7635fd208a4977f621863b6cce655d05cf853343a1d62079116c683?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 7",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4445ce4678ea0f5fd5d845472cfe5a895f15e7c5bbf6de0ba7c9642319547688?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 8",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5549d21d39dd3021c62b11979f8e010169c408c64b82034a36d4c42757b5ed85?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c",
      alt: "Grid image 9",
    },
  ];

  return (
    <div className="flex gap-5 max-md:flex-col h-[426px] min-w-[240px] w-[464px] max-md:max-w-full flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col w-[30%] max-md:ml-0 max-md:w-full wrap"
        >
          <img
            loading="lazy"
            src={image.src}
            className="object-contain shrink-0 max-w-full aspect-square w-[143px] max-md:mt-5"
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}

// ===================================== CTA ====================================
function CTA() {
  return (
    <main className="flex overflow-hidden flex-col w-full text-sm font-bold tracking-wide text-center bg-white max-md:max-w-full">
      <section className="flex relative flex-col items-center px-20 w-full min-h-[640px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88d9b2e98869b6064b89f65841b206eeba1d41ffa763effd6b3ac93d978f89f9?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
          className="object-cover absolute inset-0 size-full"
          alt=""
        />
        <div className="flex overflow-hidden relative flex-col items-center pt-40 pb-28 w-full max-w-[1050px] max-md:py-24 max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[607px]">
            {/* Header Content */}
            <header className="flex overflow-hidden flex-col items-center max-md:max-w-full">
              <h1 className="leading-6 text-sky-500">
                Designing Better Experience
              </h1>
              <h2 className="mt-8 text-4xl leading-[50px] text-slate-800 max-md:max-w-full">
                Problems trying to resolve <br /> the conflict between{" "}
              </h2>
              <p className="mt-8 leading-5 text-neutral-500 w-[447px] max-md:max-w-full">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics:{" "}
              </p>
            </header>

            {/* MainContent */}
            <div className="gap-1.5 px-1 mt-8 text-2xl tracking-normal leading-none text-teal-700 whitespace-nowrap">
              $16.48
            </div>
            <div className="flex gap-2.5 items-start mt-8 leading-loose text-white">
              <button className="overflow-hidden px-10 py-4 bg-sky-500 rounded-md min-h-[52px] min-w-[240px] max-md:px-5">
                ADD YOUR CALL TO ACTION
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

//============================= Footer ===========================================
const Footer = () => {
  const footerColumns = [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Legal",
      items: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
      title: "Features",
      items: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <footer className="flex flex-col w-full bg-white">
      {/* Top section */}
      <div className="flex flex-col items-center px-20 py-1 bg-neutral-50 max-md:px-5">
        <div className="w-full max-w-[1057px] flex flex-col py-10">
          <div className="flex flex-wrap items-center gap-10 justify-between">
            {/* Brand */}
            <div className="text-2xl font-bold text-slate-800 whitespace-nowrap w-[236px]">
              <div className="py-3.5">Bandage</div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-5 items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4993d3160bcfae09f21f29b17bcb50566d8ea6e33494d025df088d79ecbdb5?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
                className="w-6 object-contain"
                alt="Icon 1"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d3ea0706a35f6c79abd462fe0f2bb6b6acd061c3ded46a31123656f142f86a?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
                className="w-6 object-contain"
                alt="Icon 2"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7f7aac6c0005852ad352a0291d051682fd982d589f5edf4f349bf374f1aa981?placeholderIfAbsent=true&apiKey=bc155cd4463f4c48a216b01c1991193c"
                className="w-6 object-contain"
                alt="Icon 3"
              />
            </div>
          </div>
          <hr className="mt-10 border-neutral-200" />
        </div>
      </div>

      {/* Middle section */}
      <div className="flex flex-col items-center px-20 py-1 bg-white max-md:px-5">
        <div className="w-full max-w-[1050px] py-12 flex flex-wrap gap-7">
          {footerColumns.map((column, index) => (
            <FooterColumn
              key={index}
              title={column.title}
              items={column.items}
            />
          ))}
          {/* Subscribe Section */}
          <div className="w-[321px]">
            <h2 className="text-base font-bold text-slate-800">Get In Touch</h2>
            <SubscribeForm />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col items-center px-20 py-6 bg-neutral-50 text-neutral-500 text-sm font-bold">
        <div className="w-full max-w-[1050px] text-center">
          Made With Love By Finland - All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

// =========================== Footer Column ===================================
const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex overflow-hidden flex-col font-bold w-[152px]">
      <h2 className="text-base tracking-normal text-slate-800">{title}</h2>
      <nav className="flex flex-col self-start mt-5 text-sm tracking-wide leading-6 text-neutral-500">
        {items.map((item, index) => (
          <a href="#" key={index} className="mt-2.5 first:mt-0">
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

//============================= Subscribe Form ================================
const SubscribeForm = () => {
  return (
    <div className="flex flex-col mt-5 w-full tracking-wide leading-7 max-w-[321px]">
      <form className="flex overflow-hidden gap-5 justify-between pl-5 text-sm rounded-md border border-solid bg-stone-50 border-neutral-200">
        <label htmlFor="emailInput" className="sr-only">
          Your Email
        </label>
        <input
          type="email"
          id="emailInput"
          placeholder="Your Email"
          className="my-auto text-neutral-500 bg-transparent border-none outline-none"
          aria-label="Your Email"
        />
        <button
          type="submit"
          className="overflow-hidden px-6 py-4 text-center text-white whitespace-nowrap bg-sky-500 rounded-none border border-solid border-neutral-200 max-md:px-5"
        >
          Subscribe
        </button>
      </form>
      <p className="self-start mt-2 text-xs text-neutral-500">
        Lore imp sum dolor Amit
      </p>
    </div>
  );
};
