import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full bg-white rounded-2xl p-10">
      <Tabs defaultValue="Grafana" className="w-full items-center">
        <TabsList className="bg-gray-200">
          <TabsTrigger  value="Grafana"  className="text-2xl px-10 cursor-pointer">Grafana Dashboard</TabsTrigger>
          <TabsTrigger value="Kalfka"  className="text-2xl px-10 cursor-pointer">Kalfka Cluster</TabsTrigger>
          <TabsTrigger value="Clickhouse"  className="text-2xl px-10 cursor-pointer">Clickhouse database cluster</TabsTrigger>
          <TabsTrigger value="video"  className="text-2xl px-10 cursor-pointer">Demo video</TabsTrigger>

        </TabsList>
        <TabsContent value="Grafana"> 
          <div className="text-xl mt-2">
            For the first phase of progress, we developed key infrastructure components for a quantitative trading system. 
          </div>
          <div className="text-xl mt-2">
          First, we implemented a Grafana dashboard to monitor server status and prepare for tracking market news and prices. Grafana’s flexibility allows us to customize and combine dashboards as needed. 
          </div>
          <div className="flex flex-col gap-6 rounded-2xl w-[100%] mt-6">
           
            <Image src="/images/Grafana.png" width={4000} height={3400} className="w-full h-auto object-cover rounded-2xl" alt="grafana"/>

            <Image src="/images/grafana2.png" width={4000} height={3400} className="w-full h-auto object-cover rounded-2xl" alt="grafana"/>
            <Image src="/images/grafana3.png" width={4000} height={3400} className="w-full h-auto object-cover rounded-2xl" alt="grafana"/>

          </div>
          
        </TabsContent>
        <TabsContent value="Kalfka">
          <div className="text-xl mt-2">
          Second, we established a Kafka cluster as a message queue to rebalance market data, ensuring the database remains secure and performs efficiently.          </div>
         
          <div className="flex flex-col gap-6 rounded-2xl w-[100%] mt-6  pb-40">
           

            <Image src="/images/garafana4.png" width={4000} height={3400} className="w-full h-auto object-cover rounded-2xl" alt="grafana"/>

          </div>
        </TabsContent>
        <TabsContent value="Clickhouse">
          <div className="text-xl mt-2">
          Finally, we deployed a ClickHouse database cluster for data storage, utilizing a Buffer Table to enable rapid querying of the latest market data.
          </div>
         
          <div className="flex flex-col gap-6 rounded-2xl w-[100%] mt-6">
           

            <Image src="/images/grafana5.png" width={4000} height={3400} className="w-full h-auto object-cover rounded-2xl" alt="grafana"/>

          </div>
        </TabsContent>
        <TabsContent value="video">
          <div className="text-2xl text-center my-20">
            Coming soon....
          </div>
           
        </TabsContent>

      </Tabs>
    </div>
    

  );
}
