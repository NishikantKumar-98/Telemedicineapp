import { Button } from "./ui/button";
import { ArrowLeft, Search, Package, Calendar, Truck, CheckCircle, XCircle, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";

interface OrderTrackingScreenProps {
  onBack: () => void;
  language: string;
}

export function OrderTrackingScreen({ onBack, language }: OrderTrackingScreenProps) {
  console.log('Rendering OrderTrackingScreen');
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Order Tracking',
      searchPlaceholder: 'Search orders or medicines...',
      orderId: 'Order ID',
      customer: 'Customer',
      orderDate: 'Order Date',
      deliveryDate: 'Delivery Date',
      status: 'Status',
      actions: 'Actions',
      noOrders: 'No orders found.',
      viewDetails: 'View Details',
      medicineA: 'Medicine A',
      medicineB: 'Medicine B',
      medicineC: 'Medicine C',
      pending: 'Pending',
      shipped: 'Shipped',
      delivered: 'Delivered',
      cancelled: 'Cancelled'
    },
    hi: {
      title: 'ऑर्डर ट्रैकिंग',
      searchPlaceholder: 'ऑर्डर या दवाएं खोजें...',
      orderId: 'ऑर्डर आईडी',
      customer: 'ग्राहक',
      orderDate: 'ऑर्डर तिथि',
      deliveryDate: 'वितरण तिथि',
      status: 'स्थिति',
      actions: 'कार्यवाहियां',
      noOrders: 'कोई ऑर्डर नहीं मिला।',
      viewDetails: 'विवरण देखें',
      medicineA: 'दवा ए',
      medicineB: 'दवा बी',
      medicineC: 'दवा सी',
      pending: 'लंबित',
      shipped: 'भेजा गया',
      delivered: 'वितरित',
      cancelled: 'रद्द'
    },
    pa: {
      title: 'ਆਰਡਰ ਟਰੈਕਿੰਗ',
      searchPlaceholder: 'ਆਰਡਰ ਜਾਂ ਦਵਾਈਆਂ ਖੋਜੋ...',
      orderId: 'ਆਰਡਰ ID',
      customer: 'ਗਾਹਕ',
      orderDate: 'ਆਰਡਰ ਮਿਤੀ',
      deliveryDate: 'ਡਿਲਿਵਰੀ ਮਿਤੀ',
      status: 'ਸਥਿਤੀ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noOrders: 'ਕੋਈ ਆਰਡਰ ਨਹੀਂ ਮਿਲਿਆ।',
      viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
      medicineA: 'ਦਵਾਈ ਏ',
      medicineB: 'ਦਵਾਈ ਬੀ',
      medicineC: 'ਦਵਾਈ ਸੀ',
      pending: 'ਬਕਾਇਆ',
      shipped: 'ਭੇਜਿਆ ਗਿਆ',
      delivered: 'ਡਿਲੀਵਰ ਕੀਤਾ ਗਿਆ',
      cancelled: 'ਰੱਦ ਕੀਤਾ ਗਿਆ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customer: 'Rajesh Kumar',
      orderDate: '2025-09-10',
      deliveryDate: '2025-09-15',
      status: 'shipped',
      items: [
        { name: t.medicineA, qty: 2 },
        { name: t.medicineB, qty: 1 }
      ]
    },
    {
      id: 'ORD002',
      customer: 'Priya Sharma',
      orderDate: '2025-09-12',
      deliveryDate: '2025-09-18',
      status: 'pending',
      items: [
        { name: t.medicineC, qty: 3 }
      ]
    },
    {
      id: 'ORD003',
      customer: 'Amit Singh',
      orderDate: '2025-09-08',
      deliveryDate: '2025-09-10',
      status: 'delivered',
      items: [
        { name: t.medicineA, qty: 1 },
        { name: t.medicineC, qty: 2 }
      ]
    },
  ]);

  const filteredOrders = orders.filter(order =>
    order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary" className="bg-orange-500">{t.pending}</Badge>;
      case 'shipped':
        return <Badge className="bg-blue-500">{t.shipped}</Badge>;
      case 'delivered':
        return <Badge className="bg-green-500">{t.delivered}</Badge>;
      case 'cancelled':
        return <Badge variant="destructive">{t.cancelled}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center gap-3 p-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-semibold text-primary">{t.title}</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <Card key={order.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{t.orderId}: {order.id}</CardTitle>
                    {getStatusBadge(order.status)}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <p className="text-sm text-muted-foreground">{t.customer}: {order.customer}</p>
                  <p className="text-sm text-muted-foreground">{t.orderDate}: {order.orderDate}</p>
                  <p className="text-sm text-muted-foreground">{t.deliveryDate}: {order.deliveryDate}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {order.items.map((item, idx) => (
                      <Badge key={idx} variant="outline" className="flex items-center gap-1">
                        <Pill className="w-3 h-3" />
                        {item.name} (x{item.qty})
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      {t.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center">{t.noOrders}</p>
          )}
        </div>
      </div>
    </div>
  );
}
