import { Navigation } from "@/components/Navigation";
import { PriceChart } from "@/components/PriceChart";
import { MarketOverview } from "@/components/MarketOverview";
import { TradingPanel } from "@/components/TradingPanel";
import { OrderBook } from "@/components/OrderBook";
import { PortfolioStats } from "@/components/PortfolioStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <PortfolioStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PriceChart />
          </div>
          
          <div className="space-y-6">
            <TradingPanel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MarketOverview />
          </div>
          <div>
            <OrderBook />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
