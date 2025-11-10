import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, TrendingDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const markets = [
  { symbol: "BTC/USDT", price: 45234.56, change: 5.67, volume: "28.5B", high: 46200, low: 43100, favorite: true },
  { symbol: "ETH/USDT", price: 2345.78, change: 3.21, volume: "12.3B", high: 2400, low: 2280, favorite: true },
  { symbol: "BNB/USDT", price: 312.45, change: -1.45, volume: "2.1B", high: 325, low: 308, favorite: false },
  { symbol: "SOL/USDT", price: 98.76, change: 8.92, volume: "1.8B", high: 102, low: 89, favorite: false },
  { symbol: "ADA/USDT", price: 0.5234, change: 2.34, volume: "890M", high: 0.55, low: 0.51, favorite: false },
  { symbol: "XRP/USDT", price: 0.6123, change: -2.45, volume: "1.2B", high: 0.64, low: 0.60, favorite: false },
  { symbol: "DOT/USDT", price: 7.89, change: 4.56, volume: "456M", high: 8.1, low: 7.5, favorite: false },
  { symbol: "MATIC/USDT", price: 0.8234, change: 1.23, volume: "678M", high: 0.85, low: 0.80, favorite: false },
];

const Markets = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-foreground">Markets</h1>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search markets..."
                className="pl-10 bg-secondary border-border"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Pair</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Price</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">24h Change</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">24h High</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">24h Low</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Volume</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((market) => {
                  const isPositive = market.change >= 0;
                  return (
                    <tr key={market.symbol} className="border-b border-border hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Star className={`h-4 w-4 ${market.favorite ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                          </Button>
                          <span className="font-medium text-foreground">{market.symbol}</span>
                        </div>
                      </td>
                      <td className="text-right py-4 px-4 font-semibold text-foreground">
                        ${market.price.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-4">
                        <div className={`flex items-center justify-end gap-1 ${isPositive ? 'text-success' : 'text-danger'}`}>
                          {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                          <span className="font-medium">{isPositive ? '+' : ''}{market.change.toFixed(2)}%</span>
                        </div>
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        ${market.high.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        ${market.low.toLocaleString()}
                      </td>
                      <td className="text-right py-4 px-4 text-muted-foreground">
                        ${market.volume}
                      </td>
                      <td className="text-center py-4 px-4">
                        <Button size="sm" variant="default" className="bg-primary hover:bg-primary/90">
                          Trade
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Markets;
