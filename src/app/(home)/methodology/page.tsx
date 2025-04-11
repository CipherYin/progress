import Image from "next/image";


export default function MethodologyPage() {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="relative  w-full h-[50vw] lg:h-[40vw] 2xl:h-[28vw] overflow-hidden">
                                    <Image
                                        src="/images/home/Main Building 1.jpg"
                                        alt="icon"
                                        fill
                                        className="object-cover" 
                                    />
                    
        </div>
        <div className="flex flex-col py-3 lg:py-0 mt-[-15vw] 2xl:mt-[-8vw] z-10 w-[76.5%] font-bold text-[4vw] lg:text-[3.2vw] items-center justify-center bg-white ">
          Proposed Methodology
          <div className="px-10 lg:px-0 text-[3vw] lg:text-[1.4vw] font-thin mt-2 2xl:mt-8">
            To address these challenges, we propose the following framework
            <div className="relative  w-full h-[30vw] lg:h-[18vw] 2xl:h-[15vw] overflow-hidden">
                                    <Image
                                        src="/images/progress/mindmap.png"
                                        alt="icon"
                                        fill
                                        className="object-contain" 
              />
                    
        </div>
          </div>
        </div>
        
        <div className="flex bg-[#E9EAEB] w-full mt-14 2xl:mt-4 pb-10 pt-10 lg:pt-30">
          <div className="flex flex-col bg-white w-[50vw] lg:w-[60vw] pb-2 lg:pb-10  items-center lg:px-40 lg:pt-10 z-10 shrink-0">
            
              <span className="lg:text-[2.3vw] text-[2.7vw] font-bold">1. Data Acquisition and Management            </span>
              <span className="lg:text-[1.4vw] text-[2vw] mt-4 leading-loose">To support AI-driven trading strategies and market analysis, a robust data acquisition framework should be established. 
                We propose using Binance and OKX APIs to collect detailed transaction data, order book snapshots, and market depth information in real-time. To efficiently store and manage this data, a distributed storage solution such as Apache Kafka or ClickHouse could be implemented. This will ensure low-latency access to historical and real-time data, enabling traders to make informed decisions quickly.</span>
            </div>
            <div className="bg-[#AAAAAA] w-[60vw] h-[29vw] lg:h-[33vw] 2xl:h-[27vw] -mt-5 lg:-mt-20 -ml-[20vw] lg:-ml-[26vw] shrink-0">
              <div className="relative w-full h-[55vw] lg:h-[36vw] 2xl:h-[30vw] overflow-hidden">
                        <Image
                                            src="/images/progress/binance.webp"
                                            alt="icon"
                                            fill
                                            className="object-contain" 
                />
          </div>
        
                    
        </div>
        </div>

        <div className="bg-white py-5 lg:py-16 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr]  gap-2 lg:gap-40 mb-5 lg:mb-20">
            <h2 className="text-[2vw] font-bold">
              2. AI-Powered Trading<br />Algorithm and Market-Making Strategies
            </h2>
            <p className="lg:text-[1.3vw] text-[2vw] leading-loose">

            By analyzing historical and real-time order book data, we can extract high-frequency trading features that reveal potential arbitrage opportunities and liquidity imbalances. Implementing market-making strategies would allow us to enhance liquidity while capturing bid-ask spreads.

Furthermore, we will leverage machine learning (ML) and deep learning (DL) techniques,  to optimize order placement and execution timing dynamically, ensuring profitability under varying market conditions.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2 lg:gap-40">
            <h2 className="text-[2vw] font-bold">
              3. Trading and Monitoring<br />System
            </h2>
            <div className="lg:text-[1.3vw] text-[2vw] leading-loose space-y-4">
              <p>

              To ensure efficient execution of trading strategies, we propose building a real-time trading system that incorporates key components such as:              </p>
              <p className="leading-relaxed ml-4 lg:ml-20">
                <strong>Market Quotation:</strong> Real-time feeds for monitoring order book changes, trade executions, and market-wide trends.
              </p>
              <p className="leading-relaxed ml-4 lg:ml-20">
                <strong>Order Management:</strong> A low-latency execution engine capable of handling large volumes of buy and sell orders across multiple exchanges.
              </p >
              <p className="leading-relaxed  ml-4 lg:ml-20">
                <strong>Strategy Management:</strong> An adaptive AI-driven strategy execution module that utilizes ML and DL techniques to continuously learn from market data and adjust trading strategies accordingly.
              </p>
              <p className="leading-relaxed  ml-4 lg:ml-20">
                <strong>Backtesting:</strong>A historical data simulation engine to evaluate and optimize strategies before deploying them in live markets.
              </p>
              <p>
              For effective monitoring and visualization, we propose developing a customized dashboard to provide real-time insights into trading processes, strategy performance, and resource utilization. This will allow traders to track critical metrics such as execution speed, slippage, and risk exposure, ensuring continuous optimization of trading operations.
              </p>
            </div>
          </div>
        </div>

    </div>

  );
}
