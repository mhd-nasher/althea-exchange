import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { PortfolioStats } from "@/components/PortfolioStats";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const holdings = [
  { asset: "BTC", name: "Bitcoin", amount: 2.5, value: 113086.40, avgPrice: 42500, currentPrice: 45234.56, pnl: 6836.40 },
  { asset: "ETH", name: "Ethereum", amount: 12.3, value: 28852.59, avgPrice: 2200, currentPrice: 2345.78, pnl: 1792.59 },
  { asset: "BNB", name: "Binance Coin", amount: 50, value: 15622.50, avgPrice: 320, currentPrice: 312.45, pnl: -377.50 },
  { asset: "SOL", name: "Solana", amount: 150, value: 14814.00, avgPrice: 95, currentPrice: 98.76, pnl: 564.00 },
];

const chartData = holdings.map(h => ({ name: h.asset, value: h.value }));
const COLORS = ['hsl(var(--primary))', 'hsl(var(--success))', 'hsl(var(--accent))', 'hsl(var(--chart-positive))'];

const Portfolio = () => {
  const totalPnL = holdings.reduce((sum, h) => sum + h.pnl, 0);
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <PortfolioStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Asset Allocation</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--popover))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          <Card className="lg:col-span-2 p-6 bg-card border-border">
            <h2 className="text-lg font-semibold text-foreground mb-4">Holdings</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Asset</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Price</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Current Price</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Value</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {holdings.map((holding) => {
                    const isProfitable = holding.pnl >= 0;
                    return (
                      <tr key={holding.asset} className="border-b border-border hover:bg-secondary/50 transition-colors">
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-foreground">{holding.asset}</div>
                            <div className="text-xs text-muted-foreground">{holding.name}</div>
                          </div>
                        </td>
                        <td className="text-right py-4 px-4 text-foreground">
                          {holding.amount}
                        </td>
                        <td className="text-right py-4 px-4 text-muted-foreground">
                          ${holding.avgPrice.toLocaleString()}
                        </td>
                        <td className="text-right py-4 px-4 text-foreground font-medium">
                          ${holding.currentPrice.toLocaleString()}
                        </td>
                        <td className="text-right py-4 px-4 text-foreground font-semibold">
                          ${holding.value.toLocaleString()}
                        </td>
                        <td className="text-right py-4 px-4">
                          <span className={`font-medium ${isProfitable ? 'text-success' : 'text-danger'}`}>
                            {isProfitable ? '+' : ''}${holding.pnl.toFixed(2)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
