import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Pill,
  Package,
  Truck,
  Bell,
  Settings,
  LogOut,
  Plus,
  Eye,
  FlaskConical,
  Percent,
  RefreshCcw,
  ArrowLeft,
  ShoppingCart,
  CalendarClock,
  BarChart2,
  Network,
  Award,
  Syringe,
  CalendarPlus,
  AlertTriangle,
  Ban,
  MessageSquare
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface PharmaceuticalDashboardProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  language: string;
}

export function PharmaceuticalDashboard({ onNavigate, onLogout, language }: PharmaceuticalDashboardProps) {
  const translations = {
    en: {
      welcome: 'Welcome,',
      pharmacistName: 'Mr. Anil Kumar',
      quickStats: 'Quick Stats',
      totalMedicines: 'Total Medicines',
      lowStock: 'Low Stock Items',
      pendingOrders: 'Pending Orders',
      inventoryOverview: 'Inventory Overview',
      medicineName: 'Medicine Name',
      stock: 'Stock',
      expiry: 'Expiry Date',
      supplier: 'Supplier',
      actions: 'Actions',
      quickActions: 'Quick Actions',
      manageInventory: 'Manage Inventory',
      manageInventoryDesc: 'View, add, or update medicine stock',
      supplierManagement: 'Supplier Management',
      supplierManagementDesc: 'Manage supplier details and orders',
      viewPharmacyAvailability: 'Pharmacy Availability',
      viewPharmacyAvailabilityDesc: 'Check medicine stock in nearby pharmacies',
      orderMedicines: 'Order Medicines',
      orderMedicinesDesc: 'Place new orders for medicines',
      orderTracking: 'Order Tracking',
      orderTrackingDesc: 'Track all medicine orders',
      expiryDateAlerts: 'Expiry Date Alerts',
      expiryDateAlertsDesc: 'Monitor medicines nearing expiry',
      salesReports: 'Sales Reports',
      salesReportsDesc: 'View sales performance and analytics',
      pharmacyNetworkManagement: 'Pharmacy Network Management',
      pharmacyNetworkManagementDesc: 'Manage network of associated pharmacies',
      supplierPerformance: 'Supplier Performance',
      supplierPerformanceDesc: 'Evaluate supplier reliability and metrics',
      noMedicines: 'No medicines in inventory',
      settings: 'Settings',
      logout: 'Logout',
      searchMedicines: 'Search Medicines',
      paracetamol: 'Paracetamol 500mg',
      crocin: 'Crocin Advance',
      azithromycin: 'Azithromycin 500mg',
      omeprazole: 'Omeprazole 20mg',
      available: 'Available',
      limited: 'Limited',
      outOfStock: 'Out of Stock',
      viewDetails: 'View Details',
      bloodBank: 'Blood Bank',
      bloodBankDesc: 'Find nearby blood banks and check availability',
      bloodDonationAppointment: 'Blood Donation Appointment',
      bloodDonationAppointmentDesc: 'Schedule an appointment to donate blood',
      chat: 'Chat',
      startChat: 'Start a chat with a supplier or colleague'
    },
    hi: {
      welcome: 'स्वागत है,',
      pharmacistName: 'श्री अनिल कुमार',
      quickStats: 'त्वरित आंकड़े',
      totalMedicines: 'कुल दवाएं',
      lowStock: 'कम स्टॉक वाले आइटम',
      pendingOrders: 'लंबित ऑर्डर',
      inventoryOverview: 'इन्वेंटरी अवलोकन',
      medicineName: 'दवा का नाम',
      stock: 'स्टॉक',
      expiry: 'समाप्ति तिथि',
      supplier: 'आपूर्तिकर्ता',
      actions: 'कार्यवाहियां',
      quickActions: 'त्वरित कार्य',
      manageInventory: 'इन्वेंटरी प्रबंधित करें',
      manageInventoryDesc: 'दवा स्टॉक देखें, जोड़ें या अपडेट करें',
      supplierManagement: 'आपूर्तिकर्ता प्रबंधन',
      supplierManagementDesc: 'आपूर्तिकर्ता विवरण और ऑर्डर प्रबंधित करें',
      viewPharmacyAvailability: 'फार्मेसी उपलब्धता देखें',
      viewPharmacyAvailabilityDesc: 'आस-पास की फार्मेसियों में दवा का स्टॉक जांचें',
      orderMedicines: 'दवाएं ऑर्डर करें',
      orderMedicinesDesc: 'दवाओं के लिए नए ऑर्डर दें',
      orderTracking: 'ऑर्डर ट्रैकिंग',
      orderTrackingDesc: 'सभी दवा ऑर्डर ट्रैक करें',
      expiryDateAlerts: 'समाप्ति तिथि अलर्ट',
      expiryDateAlertsDesc: 'समाप्ति के करीब दवाओं की निगरानी करें',
      salesReports: 'बिक्री रिपोर्ट',
      salesReportsDesc: 'बिक्री प्रदर्शन और विश्लेषण देखें',
      pharmacyNetworkManagement: 'फार्मेसी नेटवर्क प्रबंधन',
      pharmacyNetworkManagementDesc: 'संबद्ध फार्मेसियों के नेटवर्क का प्रबंधन करें',
      supplierPerformance: 'आपूर्तिकर्ता प्रदर्शन',
      supplierPerformanceDesc: 'आपूर्तिकर्ता विश्वसनीयता और मेट्रिक्स का मूल्यांकन करें',
      noMedicines: 'इन्वेंटरी में कोई दवा नहीं',
      settings: 'सेटिंग्स',
      logout: 'लॉगआउट',
      searchMedicines: 'दवाएं खोजें',
      paracetamol: 'पैरासिटामोल 500mg',
      crocin: 'क्रोसिन एडवांस',
      azithromycin: 'एज़िथ्रोमाइसिन 500mg',
      omeprazole: 'ओमेप्राज़ोल 20mg',
      available: 'उपलब्ध',
      limited: 'सीमित',
      outOfStock: 'स्टॉक खत्म',
      viewDetails: 'विवरण देखें',
      bloodBank: 'ब्लड बैंक',
      bloodBankDesc: 'आस-पास के ब्लड बैंक खोजें और उपलब्धता जांचें',
      bloodDonationAppointment: 'रक्तदान अपॉइंटमेंट',
      bloodDonationAppointmentDesc: 'रक्तदान के लिए अपॉइंटमेंट शेड्यूल करें',
      chat: 'चैट',
      startChat: 'आपूर्तिकर्ता या सहकर्मी से चैट शुरू करें'
    },
    pa: {
      welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ,',
      pharmacistName: 'ਸ਼੍ਰੀ ਅਨਿਲ ਕੁਮਾਰ',
      quickStats: 'ਤੁਰੰਤ ਅੰਕੜੇ',
      totalMedicines: 'ਕੁੱਲ ਦਵਾਈਆਂ',
      lowStock: 'ਘੱਟ ਸਟਾਕ ਵਾਲੀਆਂ ਵਸਤੂਆਂ',
      pendingOrders: 'ਬਕਾਇਆ ਆਰਡਰ',
      inventoryOverview: 'ਸੂਚੀ ਸੰਖੇਪ ਜਾਣਕਾਰੀ',
      medicineName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
      stock: 'ਸਟਾਕ',
      expiry: 'ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ',
      supplier: 'ਸਪਲਾਇਰ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      quickActions: 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ',
      manageInventory: 'ਸੂਚੀ ਪ੍ਰਬੰਧਿਤ ਕਰੋ',
      manageInventoryDesc: 'ਦਵਾਈ ਦੇ ਸਟਾਕ ਨੂੰ ਵੇਖੋ, ਸ਼ਾਮਲ ਕਰੋ ਜਾਂ ਅਪਡੇਟ ਕਰੋ',
      supplierManagement: 'ਸਪਲਾਇਰ ਪ੍ਰਬੰਧਨ',
      supplierManagementDesc: 'ਸਪਲਾਇਰ ਦੇ ਵੇਰਵੇ ਅਤੇ ਆਰਡਰ ਪ੍ਰਬੰਧਿਤ ਕਰੋ',
      viewPharmacyAvailability: 'ਫਾਰਮੇਸੀ ਦੀ ਉਪਲਬਧਤਾ ਵੇਖੋ',
      viewPharmacyAvailabilityDesc: 'ਨੇੜਲੀਆਂ ਫਾਰਮੇਸੀਆਂ ਵਿੱਚ ਦਵਾਈ ਦਾ ਸਟਾਕ ਚੈੱਕ ਕਰੋ',
      orderMedicines: 'ਦਵਾਈਆਂ ਆਰਡਰ ਕਰੋ',
      orderMedicinesDesc: 'ਦਵਾਈਆਂ ਲਈ ਨਵੇਂ ਆਰਡਰ ਦਿਓ',
      orderTracking: 'ਆਰਡਰ ਟਰੈਕਿੰਗ',
      orderTrackingDesc: 'ਸਾਰੇ ਦਵਾਈ ਆਰਡਰ ਟਰੈਕ ਕਰੋ',
      expiryDateAlerts: 'ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ ਦੇ ਚਿਤਾਵਨੀਆਂ',
      expiryDateAlertsDesc: 'ਮਿਆਦ ਪੁੱਗਣ ਦੇ ਨੇੜੇ ਦੀਆਂ ਦਵਾਈਆਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ',
      salesReports: 'ਵਿਕਰੀ ਰਿਪੋਰਟਾਂ',
      salesReportsDesc: 'ਵਿਕਰੀ ਪ੍ਰਦਰਸ਼ਨ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ ਵੇਖੋ',
      pharmacyNetworkManagement: 'ਫਾਰਮੇਸੀ ਨੈੱਟਵਰਕ ਪ੍ਰਬੰਧਨ',
      pharmacyNetworkManagementDesc: 'ਸਬੰਧਤ ਫਾਰਮੇਸੀਆਂ ਦੇ ਨੈੱਟਵਰਕ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ',
      supplierPerformance: 'ਸਪਲਾਇਰ ਪ੍ਰਦਰਸ਼ਨ',
      supplierPerformanceDesc: 'ਸਪਲਾਇਰ ਦੀ ਭਰੋਸੇਯੋਗਤਾ ਅਤੇ ਮਾਪਦੰਡਾਂ ਦਾ ਮੁਲਾਂਕਣ ਕਰੋ',
      noMedicines: 'ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਦਵਾਈ ਨਹੀਂ',
      settings: 'ਸੈਟਿੰਗਾਂ',
      logout: 'ਲੌਗਆਉਟ',
      searchMedicines: 'ਦਵਾਈਆਂ ਖੋਜੋ',
      paracetamol: 'ਪੈਰਾਸਿਟਾਮੋਲ 500mg',
      crocin: 'ਕ੍ਰੋਸਿਨ ਐਡਵਾਂਸ',
      azithromycin: 'ਅਜ਼ੀਥਰੋਮਾਈਸਿਨ 500mg',
      omeprazole: 'ਓਮੇਪ੍ਰੋਜ਼ੋਲ 20mg',
      available: 'ਉਪਲਬਧ',
      limited: 'ਸੀਮਤ',
      outOfStock: 'ਸਟਾਕ ਖਤਮ',
      viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
      bloodBank: 'ਬਲੱਡ ਬੈਂਕ',
      bloodBankDesc: 'ਨੇੜੇ ਦੇ ਬਲੱਡ ਬੈਂਕ ਲੱਭੋ ਅਤੇ ਉਪਲਬਧਤਾ ਵੇਖੋ',
      bloodDonationAppointment: 'ਖੂਨਦਾਨ ਅਪਾਇੰਟਮੈਂਟ',
      bloodDonationAppointmentDesc: 'ਖੂਨਦਾਨ ਲਈ ਅਪਾਇੰਟਮੈਂਟ ਨਿਯਤ ਕਰੋ',
      chat: 'ਚੈਟ',
      startChat: 'ਆਪੂਰਤੀਕਰਤਾ ਜਾਂ ਸਹਿਕਰਮੀ ਨਾਲ ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleNavigateWithToast = (screen: string, message: string) => {
    toast.info(message);
    // onNavigate(screen);
  };

  const inventoryItems = [
    {
      id: 1,
      name: t.paracetamol,
      stock: 150,
      expiry: '12/2025',
      supplier: 'PharmaCorp',
      status: 'available'
    },
    {
      id: 2,
      name: t.crocin,
      stock: 30,
      expiry: '06/2024',
      supplier: 'MediLife',
      status: 'limited'
    },
    {
      id: 3,
      name: t.azithromycin,
      stock: 0,
      expiry: '09/2025',
      supplier: 'GlobalMeds',
      status: 'outOfStock'
    },
    {
      id: 4,
      name: t.omeprazole,
      stock: 80,
      expiry: '03/2026',
      supplier: 'PharmaCorp',
      status: 'available'
    },
  ];

  const getStockStatusBadge = (status: string) => {
    switch (status) {
      case 'available':
        return <Badge variant="default" className="bg-green-500 hover:bg-green-600">{t.available}</Badge>;
      case 'limited':
        return <Badge variant="destructive" className="bg-yellow-500 hover:bg-yellow-600">{t.limited}</Badge>;
      case 'outOfStock':
        return <Badge variant="secondary" className="bg-red-500 hover:bg-red-600">{t.outOfStock}</Badge>;
      default:
        return <Badge>{t.available}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-xl font-semibold text-primary">{t.welcome}</h1>
            <p className="text-muted-foreground">{t.pharmacistName}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.quickStats}</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Pill className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{inventoryItems.length}</div>
                <div className="text-sm text-muted-foreground">{t.totalMedicines}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">
                  {inventoryItems.filter(item => item.stock <= 50 && item.stock > 0).length}
                </div>
                <div className="text-sm text-muted-foreground">{t.lowStock}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Ban className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-red-600">
                  {inventoryItems.filter(item => item.stock === 0).length}
                </div>
                <div className="text-sm text-muted-foreground">{t.outOfStock}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inventory Overview */}
        <section>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{t.inventoryOverview}</CardTitle>
              <Button variant="outline" size="sm" onClick={() => onNavigate('manage-inventory')}>
                <Eye className="w-4 h-4 mr-2" />
                {t.viewDetails}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {inventoryItems.length > 0 ? (
                inventoryItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Pill className="w-6 h-6 text-indigo-500" />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{t.supplier}: {item.supplier}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-indigo-300 text-indigo-700">{t.stock}: {item.stock}</Badge>
                      {getStockStatusBadge(item.status)}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center">{t.noMedicines}</p>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.quickActions}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('manage-inventory')}>
              <CardContent className="flex items-center p-4">
                <div className="w-20 h-20 rounded-lg bg-red-700 flex items-center justify-center mr-4">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.manageInventory}</h3>
                  <p className="text-sm text-muted-foreground">{t.manageInventoryDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('supplier-management')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mr-4">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.supplierManagement}</h3>
                  <p className="text-sm text-muted-foreground">{t.supplierManagementDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('pharmacy-availability')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500 flex items-center justify-center mr-4">
                  <FlaskConical className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.viewPharmacyAvailability}</h3>
                  <p className="text-sm text-muted-foreground">{t.viewPharmacyAvailabilityDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => {
              console.log('Navigating to order-tracking');
              onNavigate('order-tracking');
            }}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.orderTracking}</h3>
                  <p className="text-sm text-muted-foreground">{t.orderTrackingDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('expiry-date-alerts')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mr-4">
                  <CalendarClock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.expiryDateAlerts}</h3>
                  <p className="text-sm text-muted-foreground">{t.expiryDateAlertsDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => {
              console.log('Navigating to sales-reports');
              onNavigate('sales-reports');
            }}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mr-4">
                  <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.salesReports}</h3>
                  <p className="text-sm text-muted-foreground">{t.salesReportsDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('pharmacy-network-management')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center mr-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.pharmacyNetworkManagement}</h3>
                  <p className="text-sm text-muted-foreground">{t.pharmacyNetworkManagementDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('supplier-performance')}>
              <CardContent className="flex items-center p-4">
                <div className="w-20 h-20 rounded-lg bg-red-700 flex items-center justify-center mr-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.supplierPerformance}</h3>
                  <p className="text-sm text-muted-foreground">{t.supplierPerformanceDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('blood-bank')}>
              <CardContent className="flex items-center p-4">
                <div className="w-20 h-20 rounded-lg bg-red-700 flex items-center justify-center mr-4">
                  <Syringe className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.bloodBank}</h3>
                  <p className="text-sm text-muted-foreground">{t.bloodBankDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('blood-donation-appointment')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                  <CalendarPlus className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.bloodDonationAppointment}</h3>
                  <p className="text-sm text-muted-foreground">{t.bloodDonationAppointmentDesc}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('chat')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.chat}</h3>
                  <p className="text-sm text-muted-foreground">{t.startChat}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
