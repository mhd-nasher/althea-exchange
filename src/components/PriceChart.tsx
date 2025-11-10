import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const generateMockData = (points: number) => {
  const data = [];
  let basePrice = 45000;
  
  for (let i = 0; i < points; i++) {
    const change = (Math.random() - 0.5) * 2000;
    basePrice += change;
    data.push({
      time: `${i}:00`,
      price: Math.max(basePrice, 40000),
    });
  }
  return data;
};

export const PriceChart = () => {
  const [timeframe, setTimeframe] = useState("1H");
  const data = generateMockData(24);
  const currentPrice = data[data.length - 1].price;
  const previousPrice = data[0].price;
  const priceChange = currentPrice - previousPrice;
  const percentChange = ((priceChange / previousPrice) * 100).toFixed(2);
  const isPositive = priceChange >= 0;

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-sm text-muted-foreground mb-1">BTC/USDT</h3>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-foreground">
              ${currentPrice.toFixed(2)}
            </span>
            <span className={`text-sm font-medium ${isPositive ? 'text-success' : 'text-danger'}`}>
              {isPositive ? '+' : ''}{percentChange}%
            </span>
          </div>
        </div>

        <Tabs value={timeframe} onValueChange={setTimeframe} className="w-auto">
          <TabsList className="bg-secondary">
            <TabsTrigger value="1M" className="text-xs">1M</TabsTrigger>
            <TabsTrigger value="5M" className="text-xs">5M</TabsTrigger>
            <TabsTrigger value="15M" className="text-xs">15M</TabsTrigger>
            <TabsTrigger value="1H" className="text-xs">1H</TabsTrigger>
            <TabsTrigger value="4H" className="text-xs">4H</TabsTrigger>
            <TabsTrigger value="1D" className="text-xs">1D</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" opacity={0.1} />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickLine={false}
            domain={['dataMin - 1000', 'dataMax + 1000']}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
