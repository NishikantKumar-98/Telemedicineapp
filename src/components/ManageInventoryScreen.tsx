import { Button } from "./ui/button";
import { ArrowLeft, Plus, Edit, Trash2, Search, Pill, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface ManageInventoryScreenProps {
  onBack: () => void;
  language: string;
}

export function ManageInventoryScreen({ onBack, language }: ManageInventoryScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Manage Inventory',
      searchPlaceholder: 'Search medicines...',
      addMedicine: 'Add Medicine',
      medicineName: 'Medicine Name',
      stock: 'Stock',
      expiry: 'Expiry Date',
      supplier: 'Supplier',
      actions: 'Actions',
      noMedicines: 'No medicines found.',
      paracetamol: 'Paracetamol 500mg',
      crocin: 'Crocin Advance',
      azithromycin: 'Azithromycin 500mg',
      omeprazole: 'Omeprazole 20mg',
      available: 'Available',
      limited: 'Limited',
      outOfStock: 'Out of Stock',
      edit: 'Edit',
      delete: 'Delete',
      addMedicineFeatureComingSoon: 'Add Medicine feature is coming soon!'
    },
    hi: {
      title: 'इन्वेंटरी प्रबंधित करें',
      searchPlaceholder: 'दवाएं खोजें...',
      addMedicine: 'दवा जोड़ें',
      medicineName: 'दवा का नाम',
      stock: 'स्टॉक',
      expiry: 'समाप्ति तिथि',
      supplier: 'आपूर्तिकर्ता',
      actions: 'कार्यवाहियां',
      noMedicines: 'कोई दवा नहीं मिली।',
      paracetamol: 'पैरासिटामोल 500mg',
      crocin: 'क्रोसिन एडवांस',
      azithromycin: 'एज़िथ्रोमाइसिन 500mg',
      omeprazole: 'ओमेप्राज़ोल 20mg',
      available: 'उपलब्ध',
      limited: 'सीमित',
      outOfStock: 'स्टॉक खत्म',
      edit: 'संपादित करें',
      delete: 'मिटाएं',
      addMedicineFeatureComingSoon: 'दवा जोड़ने की सुविधा जल्द आ रही है!'
    },
    pa: {
      title: 'ਸੂਚੀ ਪ੍ਰਬੰਧਿਤ ਕਰੋ',
      searchPlaceholder: 'ਦਵਾਈਆਂ ਖੋਜੋ...',
      addMedicine: 'ਦਵਾਈ ਸ਼ਾਮਲ ਕਰੋ',
      medicineName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
      stock: 'ਸਟਾਕ',
      expiry: 'ਮਿਆਦ ਪੁੱਗਣ ਦੀ ਮਿਤੀ',
      supplier: 'ਸਪਲਾਇਰ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noMedicines: 'ਕੋਈ ਦਵਾਈ ਨਹੀਂ ਮਿਲੀ।',
      paracetamol: 'ਪੈਰਾਸਿਟਾਮੋਲ 500mg',
      crocin: 'ਕ੍ਰੋਸਿਨ ਐਡਵਾਂਸ',
      azithromycin: 'ਅਜ਼ੀਥਰੋਮਾਈਸਿਨ 500mg',
      omeprazole: 'ਓਮੇਪ੍ਰੋਜ਼ੋਲ 20mg',
      available: 'ਉਪਲਬਧ',
      limited: 'ਸੀਮਤ',
      outOfStock: 'ਸਟਾਕ ਖਤਮ',
      edit: 'ਸੰਪਾਦਿਤ ਕਰੋ',
      delete: 'ਮਿਟਾਓ',
      addMedicineFeatureComingSoon: 'ਦਵਾਈ ਸ਼ਾਮਲ ਕਰਨ ਦਾ ਵਿਸ਼ਵਾਂ ਆ ਰਹੀ ਹੈ!'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: t.paracetamol, stock: 150, expiry: '12/2025', supplier: 'PharmaCorp', status: 'available' },
    { id: 2, name: t.crocin, stock: 30, expiry: '06/2024', supplier: 'MediLife', status: 'limited' },
    { id: 3, name: t.azithromycin, stock: 0, expiry: '09/2025', supplier: 'GlobalMeds', status: 'outOfStock' },
    { id: 4, name: t.omeprazole, stock: 80, expiry: '03/2026', supplier: 'PharmaCorp', status: 'available' },
  ]);

  const filteredItems = inventoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.supplier.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => toast.info(t.addMedicineFeatureComingSoon)}>
            <Plus className="w-5 h-5 mr-2" />
            {t.addMedicine}
          </Button>
        </div>

        {/* Inventory Table/List */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.medicineName}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.stock}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.expiry}</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t.supplier}</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">{t.actions}</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Pill className="w-5 h-5 text-indigo-500 mr-3" />
                            <span className="text-sm font-medium text-gray-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-indigo-300 text-indigo-700">{item.stock}</Badge>
                            {getStockStatusBadge(item.status)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.expiry}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.supplier}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-center items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4" />
                            <span className="sr-only">{t.edit}</span>
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4" />
                            <span className="sr-only">{t.delete}</span>
                          </Button>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                        {t.noMedicines}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
