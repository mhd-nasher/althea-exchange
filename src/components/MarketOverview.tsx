import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const trendingCoins = [
  { symbol: "BTC", name: "Bitcoin", price: 45234.56, change: 5.67, volume: "28.5B" },
  { symbol: "ETH", name: "Ethereum", price: 2345.78, change: 3.21, volume: "12.3B" },
  { symbol: "BNB", name: "Binance Coin", price: 312.45, change: -1.45, volume: "2.1B" },
  { symbol: "SOL", name: "Solana", price: 98.76, change: 8.92, volume: "1.8B" },
  { symbol: "ADA", name: "Cardano", price: 0.5234, change: 2.34, volume: "890M" },
];

export const MarketOverview = () => {
  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Trending Now</h2>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>

      <div className="space-y-3">
        {trendingCoins.map((coin) => {
          const isPositive = coin.change >= 0;
          return (
            <div
              key={coin.symbol}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{coin.symbol.slice(0, 1)}</span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{coin.symbol}</div>
                  <div className="text-xs text-muted-foreground">{coin.name}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-semibold text-foreground">${coin.price.toLocaleString()}</div>
                <div className={`text-xs flex items-center gap-1 justify-end ${isPositive ? 'text-success' : 'text-danger'}`}>
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {isPositive ? '+' : ''}{coin.change.toFixed(2)}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
