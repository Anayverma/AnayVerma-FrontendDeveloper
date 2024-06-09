const BUTTONS = [
  {
    text: `Technology 💻`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `OutFits 👗`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 bg-zinc-300 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `Design 🎨`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `AI 🤖`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `Videos 🎥`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `Science 🔬`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `AI Chat Bot 🤖`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
    spanStyle:
      "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
  },
  {
    text: `Persona 👤`,
    style:
      "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",
      spanStyle:
        "relative px-6 py-3 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
    },
    {
      text: `People 🧑‍🤝‍🧑`,
      style:
        "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",
      spanStyle:
        "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
    },
    {
      text: `3D Videos 📹`,
      style:
        "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
      spanStyle:
        "relative px-6 py-3 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
    },
    {
      text: `Analyze 🔍`,
      style:
        "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
      spanStyle:
        "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
    },
  ];
  
  


// const BUTTONS = [
//   {
//     text: `Technology 💻`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `OutFits 👗`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `Design 🎨`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `AI 🤖`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `Videos 🎥`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `Science 🔬`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `AI Chat Bot 🤖`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `Persona 👤`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `People 🧑‍🤝‍🧑`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `3D Videos 📹`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `Analyze 🔍`,
//     style:
//       "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800",
//     spanStyle:
//       "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
// ];

// const InfiniteSlider = () => {
//   return (
//     <div className="relative m-auto w-full overflow-hidden bg-transparent">
//       {/* First Carousel */}
//       <div className="relative before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
//         <div className="animate-infinite-slider flex w-[calc(150px*20)]">
//           {BUTTONS.map((button, index) => (
//             <div
//               className="slide flex w-[150px] items-center justify-center"
//               key={index}
//             >
//               <button className={button.style}>
//                 <span className={button.spanStyle}>{button.text}</span>
//               </button>
//             </div>
//           ))}
//           {BUTTONS.map((button, index) => (
//             <div
//               className="slide flex w-[150px] items-center justify-center"
//               key={index + BUTTONS.length}
//             >
//               <button className={button.style}>
//                 <span className={button.spanStyle}>{button.text}</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Second Carousel */}
//       <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
//         <div className="animate-infinite-slider-reverse flex w-[calc(150px*20)]">
//           {BUTTONS.map((button, index) => (
//             <div
//               className="slide flex w-[150px] items-center justify-center"
//               key={index}
//             >
//               <button className={button.style}>
//                 <span className={button.spanStyle}>{button.text}</span>
//               </button>
//             </div>
//           ))}
//           {BUTTONS.map((button, index) => (
//             <div
//               className="slide flex w-[150px] items-center justify-center"
//               key={index + BUTTONS.length}
//             >
//               <button className={button.style}>
//                 <span className={button.spanStyle}>{button.text}</span>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };


// export default InfiniteSlider;
// const BUTTONS = [
//   {
//     text: `Technology 💻`,
//     style:
//       "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
//     spanStyle:
//       "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   {
//     text: `OutFits 👗`,
//     style:
//       "relative inline-flex items-center justify-center p-2 mb-2 me-4 overflow-hidden text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400",
//     spanStyle:
//       "relative px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 whitespace-nowrap",
//   },
//   // Add other buttons similarly
// ];

const InfiniteSlider = () => {
  return (
    <div className="relative m-auto w-full overflow-hidden bg-transparent">
      {/* First Carousel */}
      <div className="relative before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(200px*10)]">
          {BUTTONS.map((button, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index}
            >
              <button className={button.style+"backdrop-blur-sm"}>
                <span className={button.spanStyle+"backdrop-blur-sm bg-transparent whitespace-nowrap"}>{button.text}</span>
              </button>
            </div>
          ))}
          {BUTTONS.map((button, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index + BUTTONS.length}
            >
              <button className={button.style+"backdrop-blur-sm"}>
                <span className={button.spanStyle}>{button.text}</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Second Carousel */}
      <div className="relative mt-8 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="animate-infinite-slider-reverse flex w-[calc(200px*10)]">
          {BUTTONS.map((button, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index}
            >
              <button className={button.style}>
                <span className={button.spanStyle}>{button.text}</span>
              </button>
            </div>
          ))}
          {BUTTONS.map((button, index) => (
            <div
              className="slide flex w-[200px] items-center justify-center"
              key={index + BUTTONS.length}
            >
              <button className={button.style}>
                <span className={button.spanStyle}>{button.text}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteSlider;
