import { Button } from "./ui/button";
import { ArrowLeft, Search, Building, TrendingUp, TrendingDown, Star, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

interface SupplierPerformanceScreenProps {
  onBack: () => void;
  language: string;
}

export function SupplierPerformanceScreen({ onBack, language }: SupplierPerformanceScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Supplier Performance',
      searchPlaceholder: 'Search suppliers...',
      overallPerformance: 'Overall Performance',
      avgDeliveryTime: 'Avg. Delivery Time',
      onTimeDelivery: 'On-time Delivery Rate',
      defectRate: 'Defect Rate',
      performanceTrend: 'Performance Trend',
      topSuppliers: 'Top Suppliers',
      supplierName: 'Supplier Name',
      score: 'Score',
      pharmaCorp: 'PharmaCorp',
      mediLife: 'MediLife',
      globalMeds: 'GlobalMeds',
      days: 'days',
      excellent: 'Excellent',
      good: 'Good',
      average: 'Average',
      poor: 'Poor'
    },
    hi: {
      title: 'आपूर्तिकर्ता प्रदर्शन',
      searchPlaceholder: 'आपूर्तिकर्ताओं को खोजें...',
      overallPerformance: 'कुल प्रदर्शन',
      avgDeliveryTime: 'औसत वितरण समय',
      onTimeDelivery: 'समय पर वितरण दर',
      defectRate: 'दोष दर',
      performanceTrend: 'प्रदर्शन का रुझान',
      topSuppliers: 'शीर्ष आपूर्तिकर्ता',
      supplierName: 'आपूर्तिकर्ता का नाम',
      score: 'स्कोर',
      pharmaCorp: 'फार्माकॉर्प',
      mediLife: 'मेडीलाइफ',
      globalMeds: 'ग्लोबलमेड्स',
      days: 'दिन',
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      average: 'औसत',
      poor: 'खराब'
    },
    pa: {
      title: 'ਸਪਲਾਇਰ ਪ੍ਰਦਰਸ਼ਨ',
      searchPlaceholder: 'ਸਪਲਾਇਰ ਖੋਜੋ...',
      overallPerformance: 'ਕੁੱਲ ਪ੍ਰਦਰਸ਼ਨ',
      avgDeliveryTime: 'ਔਸਤ ਡਿਲੀਵਰੀ ਸਮਾਂ',
      onTimeDelivery: 'ਸਮੇਂ ਸਿਰ ਡਿਲੀਵਰੀ ਦਰ',
      defectRate: 'ਨੁਕਸ ਦਰ',
      performanceTrend: 'ਪ੍ਰਦਰਸ਼ਨ ਦਾ ਰੁਝਾਨ',
      topSuppliers: 'ਚੋਟੀ ਦੇ ਸਪਲਾਇਰ',
      supplierName: 'ਸਪਲਾਇਰ ਦਾ ਨਾਮ',
      score: 'ਸਕੋਰ',
      pharmaCorp: 'ਫਾਰਮਾਕੌਰਪ',
      mediLife: 'ਮੈਡੀਲਾਈਫ',
      globalMeds: 'ਗਲੋਬਲਮੇਡਸ',
      days: 'ਦਿਨ',
      excellent: 'ਸ਼ਾਨਦਾਰ',
      good: 'ਚੰਗਾ',
      average: 'ਔਸਤ',
      poor: 'ਮਾੜਾ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const performanceData = [
    { name: 'Jan', PharmaCorp: 85, MediLife: 70, GlobalMeds: 90 },
    { name: 'Feb', PharmaCorp: 88, MediLife: 75, GlobalMeds: 92 },
    { name: 'Mar', PharmaCorp: 90, MediLife: 80, GlobalMeds: 88 },
    { name: 'Apr', PharmaCorp: 87, MediLife: 78, GlobalMeds: 91 },
    { name: 'May', PharmaCorp: 92, MediLife: 82, GlobalMeds: 95 },
  ];

  const topSuppliers = [
    { id: 1, name: t.pharmaCorp, score: 92, status: 'excellent' },
    { id: 2, name: t.globalMeds, score: 91, status: 'excellent' },
    { id: 3, name: t.mediLife, score: 82, status: 'good' },
  ];

  const filteredSuppliers = topSuppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'excellent':
        return <Badge className="bg-green-500">{t.excellent}</Badge>;
      case 'good':
        return <Badge className="bg-blue-500">{t.good}</Badge>;
      case 'average':
        return <Badge className="bg-orange-500">{t.average}</Badge>;
      case 'poor':
        return <Badge variant="destructive">{t.poor}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
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
        {/* Overall Performance Stats */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.overallPerformance}</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">2.5 {t.days}</div>
                <div className="text-sm text-muted-foreground">{t.avgDeliveryTime}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-sm text-muted-foreground">{t.onTimeDelivery}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-red-600">0.5%</div>
                <div className="text-sm text-muted-foreground">{t.defectRate}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Performance Trend Chart */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.performanceTrend}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="PharmaCorp" stroke="#8884d8" name={t.pharmaCorp} />
                    <Line type="monotone" dataKey="MediLife" stroke="#82ca9d" name={t.mediLife} />
                    <Line type="monotone" dataKey="GlobalMeds" stroke="#ffc658" name={t.globalMeds} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Top Suppliers List */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{t.topSuppliers}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredSuppliers.length > 0 ? (
                  filteredSuppliers.map((supplier) => (
                    <div key={supplier.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Building className="w-5 h-5 text-indigo-500" />
                        <span className="font-medium">{supplier.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="border-indigo-300 text-indigo-700">{t.score}: {supplier.score}</Badge>
                        {getStatusBadge(supplier.status)}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center">{t.noSuppliers}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}


