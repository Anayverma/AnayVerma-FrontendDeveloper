import React from "react";
import Image from "next/image";
const RoadMap = () => {
  return (
    <div className="w-full h-[380vh] sm:h-[300vh] relative top-[90vh] gradient-bg-fourth">
      <div className="text-transparent w-fit bg-clip-text bg-gradient-to-r font-bold from-pink-500 to-purple-500 text-6xl mx-auto s my-[5%] z-[1000]">
        RoadMap
      </div>
      <div className="flex flex-wrap  justify-between items-center my-[20%]  sm:flex-nowrap  ">
        <div className="ml-[10%] w-full ">
          <div className="text-5xl text-transparent h-20 bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
            PHASE 1
          </div>
          <div className="text-zinc-400 text-2xl">
            <ul className="list-disc ml-4">
              <li className="my-[1%] whitespace-normal">
                Horizen dai dai harmony dogecoin waves nexo.
              </li>
              <li className="my-[1%]">
                Flow horizen waves dash tether zcash waves dash terraUSD.
              </li>
              <li className="my-[1%]">
                Quant harmony amp cosmos PancakeSwap decentraland decred.
              </li>
              <li className="my-[1%] flex flex-wrap">Serum TRON solana tether holo crypto.</li>
              <li className="my-[1%]">Flow eCash amp EOS digibyte stellar.</li>
            </ul>
          </div>
        </div>
        <Image
          src="https://i.postimg.cc/Gpk7WY8N/p1.png"
          alt="...image"
          width={700}
          height={500}
          className="relative right-[-25px]"
        />
      </div>
     <div className="flex flex-wrap justify-between items-center my-[20%] sm:flex-nowrap ">
  <div className="ml-[10%] w-full ">
    <div className="text-5xl text-transparent h-20 bg-clip-text bg-gradient-to-r from-pink-300 to-pink-900">
      PHASE 2
    </div>
    <div className="text-zinc-400 text-2xl">
      <ul className="list-disc ml-4">
        <li className="my-[1%]">
          BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox
          PancakeSwap.
        </li>
        <li className="my-[1%]">Tether ethereum helium eCash IOTA.</li>
        <li className="my-[1%]">Litecoin enjin shiba-inu dash audius monero.</li>
        <li className="my-[1%]">
          Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin
          celsius TRON.
        </li>
        <li className="my-[1%]">Hive stellar velas flow cardano.</li>
      </ul>
    </div>
  </div>
  <Image
    src="https://i.postimg.cc/wvnk3jmJ/p2.png"
    alt="...image"
    width={700}
    height={500}
    className="relative right-[-25px]"
  />
</div>

      <div className="flex  flex-wrap  justify-between items-center my-[20%] sm:flex-nowrap  ">
        <div className="ml-[10%] w-full ">
          <div className="text-5xl text-transparent h-20 bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500">
            PHASE 3
          </div>
          <div className="text-zinc-400 text-2xl">
            <ul className="list-disc ml-4">
              <li className="my-[1%]">
                Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.
              </li>
              <li className="my-[1%]">Waves TRON dogecoin bancor eCash quant secret.</li>
              <li className="my-[1%]">Celsius crypto bancor nexo litecoin decentraland crypto.</li>
            </ul>
          </div>
        </div>
        <Image
          src="https://i.postimg.cc/P5dQCcP6/p3.png"
          alt="...image"
          width={700}
          height={500}
          className="relative right-[-30px]"
        />
      </div>
    </div>
  );
};

export default RoadMap;
