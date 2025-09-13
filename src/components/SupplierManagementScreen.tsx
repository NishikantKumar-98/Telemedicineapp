import { Button } from "./ui/button";
import { ArrowLeft, Plus, Edit, Trash2, Search, Building, Phone, Mail, Package, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";

interface SupplierManagementScreenProps {
  onBack: () => void;
  language: string;
}

export function SupplierManagementScreen({ onBack, language }: SupplierManagementScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Supplier Management',
      searchPlaceholder: 'Search suppliers...',
      addSupplier: 'Add Supplier',
      supplierName: 'Supplier Name',
      contact: 'Contact',
      email: 'Email',
      recentOrders: 'Recent Orders',
      actions: 'Actions',
      noSuppliers: 'No suppliers found.',
      pharmaCorp: 'PharmaCorp',
      mediLife: 'MediLife',
      globalMeds: 'GlobalMeds',
      email1: 'info@pharmarcorp.com',
      email2: 'contact@medilife.com',
      email3: 'sales@globalmeds.com',
      phone1: '+91 12345 67890',
      phone2: '+91 12345 67891',
      phone3: '+91 12345 67892',
      orderDate: 'Order Date',
      totalItems: 'Total Items',
      status: 'Status',
      pending: 'Pending',
      completed: 'Completed',
      edit: 'Edit',
      delete: 'Delete'
    },
    hi: {
      title: 'आपूर्तिकर्ता प्रबंधन',
      searchPlaceholder: 'आपूर्तिकर्ताओं को खोजें...',
      addSupplier: 'आपूर्तिकर्ता जोड़ें',
      supplierName: 'आपूर्तिकर्ता का नाम',
      contact: 'संपर्क',
      email: 'ईमेल',
      recentOrders: 'हाल के ऑर्डर',
      actions: 'कार्यवाहियां',
      noSuppliers: 'कोई आपूर्तिकर्ता नहीं मिला।',
      pharmaCorp: 'फार्माकॉर्प',
      mediLife: 'मेडीलाइफ',
      globalMeds: 'ग्लोबलमेड्स',
      email1: 'info@pharmarcorp.com',
      email2: 'contact@medilife.com',
      email3: 'sales@globalmeds.com',
      phone1: '+91 12345 67890',
      phone2: '+91 12345 67891',
      phone3: '+91 12345 67892',
      orderDate: 'ऑर्डर तिथि',
      totalItems: 'कुल आइटम',
      status: 'स्थिति',
      pending: 'लंबित',
      completed: 'पूर्ण',
      edit: 'संपादित करें',
      delete: 'मिटाएं'
    },
    pa: {
      title: 'ਸਪਲਾਇਰ ਪ੍ਰਬੰਧਨ',
      searchPlaceholder: 'ਸਪਲਾਇਰ ਖੋਜੋ...',
      addSupplier: 'ਸਪਲਾਇਰ ਸ਼ਾਮਲ ਕਰੋ',
      supplierName: 'ਸਪਲਾਇਰ ਦਾ ਨਾਮ',
      contact: 'ਸੰਪਰਕ',
      email: 'ਈਮੇਲ',
      recentOrders: 'ਹਾਲ ਦੇ ਆਰਡਰ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noSuppliers: 'ਕੋਈ ਸਪਲਾਇਰ ਨਹੀਂ ਮਿਲਿਆ।',
      pharmaCorp: 'ਫਾਰਮਾਕੌਰਪ',
      mediLife: 'ਮੈਡੀਲਾਈਫ',
      globalMeds: 'ਗਲੋਬਲਮੇਡਸ',
      email1: 'info@pharmarcorp.com',
      email2: 'contact@medilife.com',
      email3: 'sales@globalmeds.com',
      phone1: '+91 12345 67890',
      phone2: '+91 12345 67891',
      phone3: '+91 12345 67892',
      orderDate: 'ਆਰਡਰ ਮਿਤੀ',
      totalItems: 'ਕੁੱਲ ਵਸਤੂਆਂ',
      status: 'ਸਥਿਤੀ',
      pending: 'ਬਕਾਇਆ',
      completed: 'ਪੂਰਾ ਹੋਇਆ',
      edit: 'ਸੰਪਾਦਿਤ ਕਰੋ',
      delete: 'ਮਿਟਾਓ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: t.pharmaCorp,
      contactPerson: 'Rahul Sharma',
      phone: t.phone1,
      email: t.email1,
      recentOrders: [
        { id: 101, date: '2025-09-01', items: 5, status: 'completed' },
        { id: 102, date: '2025-08-25', items: 3, status: 'pending' },
      ],
    },
    {
      id: 2,
      name: t.mediLife,
      contactPerson: 'Priya Singh',
      phone: t.phone2,
      email: t.email2,
      recentOrders: [
        { id: 201, date: '2025-09-05', items: 8, status: 'completed' },
      ],
    },
    {
      id: 3,
      name: t.globalMeds,
      contactPerson: 'Amit Kumar',
      phone: t.phone3,
      email: t.email3,
      recentOrders: [
        { id: 301, date: '2025-08-10', items: 2, status: 'pending' },
        { id: 302, date: '2025-07-20', items: 10, status: 'completed' },
      ],
    },
  ]);

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.contactPerson.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getOrderStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-500">{t.completed}</Badge>;
      case 'pending':
        return <Badge variant="destructive" className="bg-orange-500">{t.pending}</Badge>;
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
        {/* Search and Add */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Plus className="w-5 h-5 mr-2" />
            {t.addSupplier}
          </Button>
        </div>

        {/* Suppliers List */}
        <div className="space-y-4">
          {filteredSuppliers.length > 0 ? (
            filteredSuppliers.map((supplier) => (
              <Card key={supplier.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{supplier.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Phone className="w-4 h-4" />
                        <span>{supplier.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{supplier.email}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                        <span className="sr-only">{t.edit}</span>
                      </Button>
                      <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                        <span className="sr-only">{t.delete}</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h4 className="text-sm font-medium mb-2">{t.recentOrders}:</h4>
                  {supplier.recentOrders.length > 0 ? (
                    <div className="space-y-2">
                      {supplier.recentOrders.map(order => (
                        <div key={order.id} className="flex items-center justify-between text-sm bg-gray-50 p-2 rounded">
                          <div className="flex items-center gap-2">
                            <Package className="w-4 h-4 text-muted-foreground" />
                            <span>#{order.id} ({order.items} {t.totalItems})</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span>{order.date}</span>
                            {getOrderStatusBadge(order.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">No recent orders.</p>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center">{t.noSuppliers}</p>
          )}
        </div>
      </div>
    </div>
  );
}

