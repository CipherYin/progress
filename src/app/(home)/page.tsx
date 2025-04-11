import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-8 lg:py-12 mb-24 lg:mb-30">

      <div className="lg:text-[3vw] font-bold">Cryptocurrency Trading System:</div>
      <div className="lg:text-[2.5vw] font-bold">Integrating AS Model with Deep</div>
      <div className="lg:text-[2.7vw] font-bold mb-6 lg:mb-10">Learning Techniques</div>
      <div className="relative  w-full h-[100vw] lg:h-[50vw] 2xl:h-[38vw] overflow-hidden">
                              <Image
                                  src="/images/home/bitcoin1.jpg"
                                  alt="icon"
                                  fill
                                  className="object-cover" 
                              />
              
        </div>
        <div className="2xl:mt-[-13vw] mt-[-38vw] lg:mt-[-19vw] w-[88%] lg:w-[76.5%] bg-white z-10 shadow-lg flex flex-col justify-center items-center">
        <section className="bg-white py-8 lg:py-16 text-center">
          <h2 className="text-[4.5vw] lg:text-[2.3vw] font-bold mb-8">Abstract</h2>
          <p className="2xl:max-w-6xl lg:max-w-3xl max-w-3/4 mx-auto  text-[3vw] lg:text-[1.3vw] leading-loose text-gray-800">
            Our group aims to develop a comprehensive digital currency trading system that leveraging
            data-driven techniques, algorithmic trading, and advanced analytics. The framework will
            harness real-time and historical data from Binance and OKX to implement high-frequency
            trading and market-making strategies, and integrate machine learning to extract key factors
            for prediction and decision-making. With a focus on scalability, efficiency, and profitability,
            this system aims to address the challenges of crypto trading, including data volume,
            volatility, and real-time execution.
          </p>
          <button  className="2xl:mt-36 lg:mt-28 mt-16 text-[3vw] lg:text-[1.4vw] cursor-pointer bg-[#3f51b5] text-white px-6 py-3 hover:bg-[#2f3ea1] transition">
              <Link href='/introduction'>
                Read More
              </Link>
          </button>
         
        </section>

      </div>
    </div>

  );
}
