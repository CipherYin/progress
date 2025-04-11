import Image from "next/image";


export default function IntroductionPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative  w-full h-[50vw] lg:h-[50vw] 2xl:h-[28vw] overflow-hidden">
                                    <Image
                                        src="/images/home/introduction.jpg"
                                        alt="icon"
                                        fill
                                        className="object-cover" 
                                    />
                    
        </div>
        <div className="flex mt-[-8vw] lg:mt-[-8vw] z-10 w-[76.5%] h-[18vw] lg:h-[14vw] font-bold lg:text-[3.2vw] items-center justify-center bg-white ">
          Project Introduction
        </div>
        <div className="lg:max-w-6xl max-w-[79vw] mx-auto mt-10 lg:mt-40 text-[3.4vw] lg:text-[1.5vw] font-thin leading-loose indent-8">
        With the rapid growth of cryptocurrencies, automated financial algorithmic trading systems have been revolutionized. The decentralized and highly volatile nature of cryptocurrencies demands innovative strategies to manage risk and optimize profits. More and more top hedge-funds are coming into cryptocurrencies markets to compete the best market maker. Real-time data from exchanges like Binance and OKX provide valuable insights for constructing trading strategies but require robust frameworks for analysis and execution. This project focuses on building a trading system that integrates data acquisition, backtesting and order execution, market making algorithmic strategies, and ML/DL-based insights to improve efficiency and adaptability in crypto trading.
        </div>
        <div className=" w-full py-10 lg:py-28  lg:h-[50vw] 2xl:h-[28vw] overflow-hidden">
          <div className="flex items-center justify-center mb-12 px-4">
            <div className="flex-1 border-t-2 border-black"></div>
            <h2 className="px-16  lg:text-[2vw] font-bold">The Team</h2>
            <div className="flex-1 border-t-2 border-black"></div>
          </div>
          <div className="flex justify-between lg:px-20 2xl:px-40 lg:py-16">
            {/* Member 1 */}
            <div className="flex flex-col space-y-1 lg:px-10 items-center justify-center">
              <div className="font-bold text-[3vw] lg:text-[2vw]">WANG Yucheng</div>
              <div className="text-[2vw] lg:text-[1.2vw]">3036380509</div>
              <div className="text-[2vw] lg:text-[1.2vw]">u3638050@connect.hku.hk</div>
            </div>

            {/* Member 2 */}
            <div className="flex flex-col space-y-1 lg:px-10 items-center justify-center">
              <div className="font-bold text-[3vw] lg:text-[2vw]">Du Haolong</div>
              <div className="text-[2vw] lg:text-[1.2vw] lg:ml-10">3036413162</div>
              <div className="text-[2vw] lg:text-[1.2vw]">u3641316@connect.hku.hk</div>
            </div>

            {/* Member 3 */}
            <div className="flex flex-col space-y-1 lg:px-10 items-center justify-center">
              <div className="font-bold text-[3vw] lg:text-[2vw]">JIANG Xueru</div>
              <div className="text-[2vw] lg:text-[1.2vw]">3032450225</div>
              <div className="text-[2vw] lg:text-[1.2vw]">u3645022@connect.hku.hk</div>
            </div>
          </div>
        </div>
    </div>

  );
}
