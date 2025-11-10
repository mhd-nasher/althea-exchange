import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const TradingPanel = () => {
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("45234.56");
  const { toast } = useToast();

  const handleTrade = (type: "buy" | "sell") => {
    toast({
      title: `${type === "buy" ? "Buy" : "Sell"} Order Placed`,
      description: `Your ${type} order for ${amount} BTC at $${price} has been placed.`,
    });
  };

  return (
    <Card className="p-6 bg-card border-border">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-secondary">
          <TabsTrigger value="buy" className="data-[state=active]:bg-success/20 data-[state=active]:text-success">
            Buy
          </TabsTrigger>
          <TabsTrigger value="sell" className="data-[state=active]:bg-danger/20 data-[state=active]:text-danger">
            Sell
          </TabsTrigger>
        </TabsList>

        <TabsContent value="buy" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="order-type">Order Type</Label>
            <Select defaultValue="market">
              <SelectTrigger id="order-type" className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="limit">Limit</SelectItem>
                <SelectItem value="stop-limit">Stop-Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price (USDT)</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount (BTC)</Label>
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="flex gap-2">
            {[25, 50, 75, 100].map((percent) => (
              <Button
                key={percent}
                variant="outline"
                size="sm"
                className="flex-1 border-border"
                onClick={() => setAmount((parseFloat(price) * percent / 100 / parseFloat(price)).toFixed(8))}
              >
                {percent}%
              </Button>
            ))}
          </div>

          <div className="p-3 bg-secondary/50 rounded-lg space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="text-foreground font-medium">
                {amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : '0.00'} USDT
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-success hover:bg-success/90 text-success-foreground"
            size="lg"
            onClick={() => handleTrade("buy")}
          >
            Buy BTC
          </Button>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="sell-order-type">Order Type</Label>
            <Select defaultValue="market">
              <SelectTrigger id="sell-order-type" className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="market">Market</SelectItem>
                <SelectItem value="limit">Limit</SelectItem>
                <SelectItem value="stop-limit">Stop-Limit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sell-price">Price (USDT)</Label>
            <Input
              id="sell-price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sell-amount">Amount (BTC)</Label>
            <Input
              id="sell-amount"
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-secondary border-border"
            />
          </div>

          <div className="flex gap-2">
            {[25, 50, 75, 100].map((percent) => (
              <Button
                key={percent}
                variant="outline"
                size="sm"
                className="flex-1 border-border"
              >
                {percent}%
              </Button>
            ))}
          </div>

          <div className="p-3 bg-secondary/50 rounded-lg space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="text-foreground font-medium">
                {amount && price ? (parseFloat(amount) * parseFloat(price)).toFixed(2) : '0.00'} USDT
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-danger hover:bg-danger/90 text-danger-foreground"
            size="lg"
            onClick={() => handleTrade("sell")}
          >
            Sell BTC
          </Button>
        </TabsContent>
      </Tabs>
    </Card>
  );
};
