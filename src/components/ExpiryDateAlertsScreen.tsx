import { Button } from "./ui/button";
import { ArrowLeft, Search, Pill, CalendarClock, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";

interface ExpiryDateAlertsScreenProps {
  onBack: () => void;
  language: string;
}

export function ExpiryDateAlertsScreen({ onBack, language }: ExpiryDateAlertsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Expiry Date Alerts',
      searchPlaceholder: 'Search medicines or suppliers...',
      medicineName: 'Medicine Name',
      expiryDate: 'Expiry Date',
      stock: 'Stock',
      supplier: 'Supplier',
      status: 'Status',
      actions: 'Actions',
      noAlerts: 'No expiry alerts.',
      expired: 'Expired',
      nearingExpiry: 'Nearing Expiry',
      safe: 'Safe',
      viewDetails: 'View Details',
      paracetamol: 'Paracetamol 500mg',
      crocin: 'Crocin Advance',
      azithromycin: 'Azithromycin 500mg',
      omeprazole: 'Omeprazole 20mg',
    },
    hi: {
      title: 'समाप्ति तिथि अलर्ट',
      searchPlaceholder: 'दवाएं या आपूर्तिकर्ता खोजें...',
      medicineName: 'दवा का नाम',
      expiryDate: 'समाप्ति तिथि',
      stock: 'स्टॉक',
      supplier: 'आपूर्तिकर्ता',
      status: 'स्थिति',
      actions: 'कार्यवाहियां',
      noAlerts: 'कोई समाप्ति अलर्ट नहीं।',
      expired: 'समाप्त',
      nearingExpiry: 'समाप्ति के करीब',
      safe: 'सुरक्षित',
      viewDetails: 'विवरण देखें',
      paracetamol: 'पैरासिटामोल 500mg',
      crocin: 'क्रोसिन एडवांस',
      azithromycin: 'एज़िथ्रोमाइसिन 500mg',
      omeprazole: 'ओमेप्राज़ोल 20mg',
    },
    pa: {
      title: 'ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ ਦੇ ਚਿਤਾਵਨੀਆਂ',
      searchPlaceholder: 'ਦਵਾਈਆਂ ਜਾਂ ਸਪਲਾਇਰ ਖੋਜੋ...',
      medicineName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
      expiryDate: 'ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ',
      stock: 'ਸਟਾਕ',
      supplier: 'ਸਪਲਾਇਰ',
      status: 'ਸਥਿਤੀ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noAlerts: 'ਕੋਈ ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਚਿਤਾਵਨੀ ਨਹੀਂ।',
      expired: 'ਮਿਆਦ ਪੁੱਗ ਗਈ',
      nearingExpiry: 'ਮਿਆਦ ਪੁੱਗਣ ਦੇ ਨੇੜੇ',
      safe: 'ਸੁਰੱਖਿਅਤ',
      viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
      paracetamol: 'ਪੈਰਾਸਿਟਾਮੋਲ 500mg',
      crocin: 'ਕ੍ਰੋਸਿਨ ਐਡਵਾਂਸ',
      azithromycin: 'ਅਜ਼ੀਥਰੋਮਾਈਸਿਨ 500mg',
      omeprazole: 'ਓਮੇਪ੍ਰੋਜ਼ੋਲ 20mg',
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [expiryItems, setExpiryItems] = useState([
    { id: 1, name: t.paracetamol, expiry: '2024-12-31', stock: 150, supplier: 'PharmaCorp', status: 'safe' },
    { id: 2, name: t.crocin, expiry: '2024-10-15', stock: 30, supplier: 'MediLife', status: 'nearingExpiry' },
    { id: 3, name: t.azithromycin, expiry: '2024-09-30', stock: 0, supplier: 'GlobalMeds', status: 'expired' },
    { id: 4, name: t.omeprazole, expiry: '2025-03-01', stock: 80, supplier: 'PharmaCorp', status: 'safe' },
  ]);

  const filteredItems = expiryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.supplier.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'expired':
        return <Badge variant="destructive" className="bg-red-500">{t.expired}</Badge>;
      case 'nearingExpiry':
        return <Badge className="bg-orange-500">{t.nearingExpiry}</Badge>;
      case 'safe':
        return <Badge className="bg-green-500">{t.safe}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
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

        {/* Expiry Alerts List */}
        <div className="space-y-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card key={item.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{item.name}</CardTitle>
                    {getStatusBadge(item.status)}
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-2">
                  <p className="text-sm text-muted-foreground">{t.expiryDate}: {item.expiry}</p>
                  <p className="text-sm text-muted-foreground">{t.stock}: {item.stock}</p>
                  <p className="text-sm text-muted-foreground">{t.supplier}: {item.supplier}</p>
                  <div className="pt-4 flex justify-end">
                    <Button variant="outline" size="sm">
                      {t.viewDetails}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center">{t.noAlerts}</p>
          )}
        </div>
      </div>
    </div>
  );
}

