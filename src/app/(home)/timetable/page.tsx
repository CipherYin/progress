import Image from "next/image";


export default function TimeablePage() {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="relative  w-full h-[50vw] lg:h-[50vw] 2xl:h-[28vw] overflow-hidden">
                                    <Image
                                        src="/images/progress/timeable.avif"
                                        alt="icon"
                                        fill
                                        className="object-cover" 
                                    />
                    
        </div>
        <div className="flex flex-col mt-[-10vw] 2xl:mt-[-8vw] z-10 w-[76.5%] lg:h-[30vw] font-bold text-[4vw] lg:text-[3.2vw] items-center justify-center bg-white ">
                Timetable & Milestone

                    <div className="relative lg:mt-4  w-full  h-[30vw] lg:h-[50vw] 2xl:h-[20vw] overflow-hidden">
                                            <Image
                                                src="/images/progress/gantt_v1.png"
                                                alt="icon"
                                                fill
                                                className="object-contain" 
                      />
                            
                  </div>
          </div>
          <div className="bg-white py-16 mt-14 px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2 lg:gap-40 mb-5 lg:mb-20">
              <h2 className="text-[2vw] font-bold">
              Phase 1:<br />Data Collection and Framework Development<br />(Month 1-2)

              </h2>
              <div className="lg:text-[1.3vw] text-[2vw] leading-loose space-y-2 lg:space-y-16">
                <p className="lg:text-[1.3vw] text-[2vw] leading-loose">
                  Setup infrastructure based on docker-compose, use Docker to set up ClickHouse database, Kafka messaging middleware, Zookeeper, and Grafana dashboards as the system&apos;s infrastructure, providing foundational support for data collection, data processing, and data visualization.
    ​           </p>
              <p>
              Use the open-source framework Backtrader as the mid-low frequency trading system framework, serving as the platform for deploying medium to low-frequency strategies. It imports market data, attaches trading strategies, and evaluates strategy performance.
              </p>
              </div>
            

            </div>

            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2 lg:gap-40 mb-5 lg:mb-20">
              <h2 className="text-[2vw] font-bold">
                
              Phase 2:<br />Strategy Design
              <br />(Month 2-5)
              </h2>
              <div className="lg:text-[1.3vw] text-[2vw] leading-loose space-y-4">
                <p>
                Strategy development is divided into two types of strategies. The first type is the market-making strategy based on the AS model, used to process order book data and simulate the behavior of market makers. The second type is a multifactor strategy based on a machine learning model, which operates on one-minute data frequency. By extracting factors, it predicts future market trends. The exposure of the medium-to-low-frequency strategy can be used to hedge the inventory risk of the AS market-making strategy.              </p>          
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2 lg:gap-40 mb-5 lg:mb-20">
            <h2 className="text-[2vw] font-bold">
                
            Phase 3:<br />System Integration and Visualization
              <br />(Month 5)
              </h2>
              <div className="lg:text-[1.3vw] text-[2vw] leading-loose space-y-4">
                <p>

                Integrate all systems in the production environment, allowing the two strategies to run in a real-time system environment. Use Grafana to display the system&apos;s operational status, enabling monitoring of the trading system and implementing performance evaluation for the strategies.
                </p>              </div>
               </div>


               <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-2 lg:gap-40 mb-5 lg:mb-20">
            <h2 className="text-[2vw] font-bold">
                
            Phase 4:<br />Testing and Deployment 
              <br />(Month 5-6)
              </h2>
              <div className="lg:text-[1.3vw] text-[2vw] leading-loose space-y-4">
                <p>

                Conduct the final system testing and resolve any remaining system issues. Based on feedback from actual strategies, propose optimization and improvement suggestions.                </p>              </div>
               </div>
        </div>
    </div>

  );
}
