import { Card } from "@/components/ui/card";

const generateOrders = (count: number, isBuy: boolean) => {
  return Array.from({ length: count }, (_, i) => ({
    price: isBuy ? 45234.56 - i * 50 : 45234.56 + i * 50,
    amount: Math.random() * 2,
    total: Math.random() * 100000,
  }));
};

export const OrderBook = () => {
  const buyOrders = generateOrders(8, true);
  const sellOrders = generateOrders(8, false);

  return (
    <Card className="p-6 bg-card border-border">
      <h2 className="text-lg font-semibold text-foreground mb-4">Order Book</h2>
      
      <div className="space-y-1 mb-2">
        <div className="grid grid-cols-3 text-xs text-muted-foreground font-medium">
          <span>Price (USDT)</span>
          <span className="text-right">Amount (BTC)</span>
          <span className="text-right">Total</span>
        </div>
      </div>

      {/* Sell Orders */}
      <div className="space-y-1 mb-4">
        {sellOrders.reverse().map((order, i) => (
          <div key={`sell-${i}`} className="grid grid-cols-3 text-sm py-1 hover:bg-danger/5 transition-colors relative">
            <div className="absolute inset-y-0 right-0 bg-danger/5" style={{ width: `${(order.total / 100000) * 100}%` }} />
            <span className="text-danger relative z-10">{order.price.toFixed(2)}</span>
            <span className="text-foreground text-right relative z-10">{order.amount.toFixed(4)}</span>
            <span className="text-muted-foreground text-right relative z-10">{order.total.toFixed(0)}</span>
          </div>
        ))}
      </div>

      {/* Current Price */}
      <div className="py-3 mb-4 flex items-center justify-center border-y border-border">
        <span className="text-xl font-bold text-success">45,234.56</span>
        <span className="text-sm text-success ml-2">↑</span>
      </div>

      {/* Buy Orders */}
      <div className="space-y-1">
        {buyOrders.map((order, i) => (
          <div key={`buy-${i}`} className="grid grid-cols-3 text-sm py-1 hover:bg-success/5 transition-colors relative">
            <div className="absolute inset-y-0 right-0 bg-success/5" style={{ width: `${(order.total / 100000) * 100}%` }} />
            <span className="text-success relative z-10">{order.price.toFixed(2)}</span>
            <span className="text-foreground text-right relative z-10">{order.amount.toFixed(4)}</span>
            <span className="text-muted-foreground text-right relative z-10">{order.total.toFixed(0)}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
