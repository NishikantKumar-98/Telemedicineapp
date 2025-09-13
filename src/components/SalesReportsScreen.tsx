import { Button } from "./ui/button";
import { ArrowLeft, BarChart2, TrendingUp, TrendingDown, Calendar, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { motion } from "motion/react";

interface SalesReportsScreenProps {
  onBack: () => void;
  language: string;
}

export function SalesReportsScreen({ onBack, language }: SalesReportsScreenProps) {
  console.log('Rendering SalesReportsScreen');
  const [timeframe, setTimeframe] = useState('monthly');
  const translations = {
    en: {
      title: 'Sales Reports',
      overallSales: 'Overall Sales',
      totalRevenue: 'Total Revenue',
      medicinesSold: 'Medicines Sold',
      avgOrderValue: 'Avg. Order Value',
      salesTrend: 'Sales Trend',
      topSellingMedicines: 'Top Selling Medicines',
      monthly: 'Monthly',
      quarterly: 'Quarterly',
      yearly: 'Yearly',
      medicineName: 'Medicine Name',
      revenue: 'Revenue',
      unitsSold: 'Units Sold',
      paracetamol: 'Paracetamol 500mg',
      crocin: 'Crocin Advance',
      azithromycin: 'Azithromycin 500mg',
      omeprazole: 'Omeprazole 20mg',
    },
    hi: {
      title: 'बिक्री रिपोर्ट',
      overallSales: 'कुल बिक्री',
      totalRevenue: 'कुल राजस्व',
      medicinesSold: 'बिक्री हुई दवाएं',
      avgOrderValue: 'औसत ऑर्डर मूल्य',
      salesTrend: 'बिक्री का रुझान',
      topSellingMedicines: 'सबसे ज्यादा बिकने वाली दवाएं',
      monthly: 'मासिक',
      quarterly: 'त्रैमासिक',
      yearly: 'वार्षिक',
      medicineName: 'दवा का नाम',
      revenue: 'राजस्व',
      unitsSold: 'बेची गई इकाइयाँ',
      paracetamol: 'पैरासिटामोल 500mg',
      crocin: 'क्रोसिन एडवांस',
      azithromycin: 'एज़िथ्रोमाइसिन 500mg',
      omeprazole: 'ओमेप्राज़ोल 20mg',
    },
    pa: {
      title: 'ਵਿਕਰੀ ਰਿਪੋਰਟਾਂ',
      overallSales: 'ਕੁੱਲ ਵਿਕਰੀ',
      totalRevenue: 'ਕੁੱਲ ਮਾਲੀਆ',
      medicinesSold: 'ਵੇਚੀਆਂ ਗਈਆਂ ਦਵਾਈਆਂ',
      avgOrderValue: 'ਔਸਤ ਆਰਡਰ ਮੁੱਲ',
      salesTrend: 'ਵਿਕਰੀ ਦਾ ਰੁਝਾਨ',
      topSellingMedicines: 'ਸਭ ਤੋਂ ਵੱਧ ਵਿਕਣ ਵਾਲੀਆਂ ਦਵਾਈਆਂ',
      monthly: 'ਮਾਸਿਕ',
      quarterly: 'ਤਿਮਾਹੀ',
      yearly: 'ਸਾਲਾਨਾ',
      medicineName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
      revenue: 'ਮਾਲੀਆ',
      unitsSold: 'ਵੇਚੀਆਂ ਗਈਆਂ ਯੂਨਿਟਾਂ',
      paracetamol: 'ਪੈਰਾਸਿਟਾਮੋਲ 500mg',
      crocin: 'ਕ੍ਰੋਸਿਨ ਐਡਵਾਂਸ',
      azithromycin: 'ਅਜ਼ੀਥਰੋਮਾਈਸਿਨ 500mg',
      omeprazole: 'ਓਮੇਪ੍ਰੋਜ਼ੋਲ 20mg',
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const salesData = {
    monthly: [
      { name: 'Jan', revenue: 4000, units: 2400 },
      { name: 'Feb', revenue: 3000, units: 1398 },
      { name: 'Mar', revenue: 2000, units: 9800 },
      { name: 'Apr', revenue: 2780, units: 3908 },
      { name: 'May', revenue: 1890, units: 4800 },
      { name: 'Jun', revenue: 2390, units: 3800 },
    ],
    quarterly: [
      { name: 'Q1', revenue: 9000, units: 13598 },
      { name: 'Q2', revenue: 7060, units: 8608 },
    ],
    yearly: [
      { name: '2023', revenue: 30000, units: 25000 },
      { name: '2024', revenue: 45000, units: 35000 },
    ],
  };

  const topSelling = [
    { name: t.paracetamol, revenue: '₹12,000', units: 800 },
    { name: t.crocin, revenue: '₹8,500', units: 550 },
    { name: t.omeprazole, revenue: '₹7,000', units: 400 },
  ];

  const currentSalesData = salesData[timeframe as keyof typeof salesData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
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
        {/* Overall Sales Stats */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.overallSales}</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">₹65,000</div>
                <div className="text-sm text-muted-foreground">{t.totalRevenue}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">5,200</div>
                <div className="text-sm text-muted-foreground">{t.medicinesSold}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">₹125</div>
                <div className="text-sm text-muted-foreground">{t.avgOrderValue}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Sales Trend Chart */}
        <section>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{t.salesTrend}</CardTitle>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly">{t.monthly}</SelectItem>
                  <SelectItem value="quarterly">{t.quarterly}</SelectItem>
                  <SelectItem value="yearly">{t.yearly}</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentSalesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" name={t.revenue} />
                    <Line type="monotone" dataKey="units" stroke="#82ca9d" name={t.unitsSold} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Selling Medicines */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.topSellingMedicines}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSelling.map((medicine, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Pill className="w-5 h-5 text-purple-500" />
                      <span className="font-medium">{medicine.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {medicine.revenue} ({medicine.units} {t.unitsSold})
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
