import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { 
  Search, 
  MapPin, 
  Phone, 
  Clock,
  Navigation,
  ArrowLeft,
  Star,
  ShoppingCart
} from "lucide-react";

interface PharmacyAvailabilityScreenProps {
  onBack: () => void;
  language: string;
}

export function PharmacyAvailabilityScreen({ onBack, language }: PharmacyAvailabilityScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const translations = {
    en: {
      title: 'Medicine Finder',
      searchPlaceholder: 'Search medicines...',
      nearbyPharmacies: 'Nearby Pharmacies',
      popularMedicines: 'Popular Medicines',
      available: 'Available',
      outOfStock: 'Out of Stock',
      limited: 'Limited Stock',
      open: 'Open',
      closed: 'Closed',
      openUntil: 'Open until',
      rating: 'Rating',
      distance: 'away',
      call: 'Call',
      directions: 'Directions',
      order: 'Order',
      paracetamol: 'Paracetamol 500mg',
      crocin: 'Crocin Advance',
      dolo: 'Dolo 650',
      azithromycin: 'Azithromycin 500mg',
      omeprazole: 'Omeprazole 20mg',
      cetirizine: 'Cetirizine 10mg',
      apolloPharmacy: 'Apollo Pharmacy',
      medPlusPharmacy: 'MedPlus Pharmacy',
      reliancePharmacy: 'Reliance Smart Pharmacy',
      localPharmacy: 'Local Medical Store'
    },
    hi: {
      title: 'दवा खोजकर्ता',
      searchPlaceholder: 'दवाएं खोजें...',
      nearbyPharmacies: 'नजदीकी दवाखाने',
      popularMedicines: 'लोकप्रिय दवाएं',
      available: 'उपलब्ध',
      outOfStock: 'स्टॉक खत्म',
      limited: 'सीमित स्टॉक',
      open: 'खुला',
      closed: 'बंद',
      openUntil: 'तक खुला',
      rating: 'रेटिंग',
      distance: 'दूर',
      call: 'कॉल करें',
      directions: 'दिशा',
      order: 'ऑर्डर करें',
      paracetamol: 'पैरासिटामोल 500mg',
      crocin: 'क्रोसिन एडवांस',
      dolo: 'डोलो 650',
      azithromycin: 'एज़िथ्रोमाइसिन 500mg',
      omeprazole: 'ओमेप्राज़ोल 20mg',
      cetirizine: 'सेटिरिज़िन 10mg',
      apolloPharmacy: 'अपोलो फार्मेसी',
      medPlusPharmacy: 'मेडप्लस फार्मेसी',
      reliancePharmacy: 'रिलायंस स्मार्ट फार्मेसी',
      localPharmacy: 'स्थानीय मेडिकल स्टोर'
    },
    pa: {
      title: 'ਦਵਾਈ ਖੋਜਕਰਤਾ',
      searchPlaceholder: 'ਦਵਾਈਆਂ ਖੋਜੋ...',
      nearbyPharmacies: 'ਨੇੜਲੇ ਦਵਾਖਾਨੇ',
      popularMedicines: 'ਮਸ਼ਹੂਰ ਦਵਾਈਆਂ',
      available: 'ਉਪਲਬਧ',
      outOfStock: 'ਸਟਾਕ ਖਤਮ',
      limited: 'ਸੀਮਤ ਸਟਾਕ',
      open: 'ਖੁੱਲ੍ਹਾ',
      closed: 'ਬੰਦ',
      openUntil: 'ਤੱਕ ਖੁੱਲ੍ਹਾ',
      rating: 'ਰੇਟਿੰਗ',
      distance: 'ਦੂਰ',
      call: 'ਕਾਲ ਕਰੋ',
      directions: 'ਦਿਸ਼ਾ',
      order: 'ਆਰਡਰ ਕਰੋ',
      paracetamol: 'ਪੈਰਾਸਿਟਾਮੋਲ 500mg',
      crocin: 'ਕ੍ਰੋਸਿਨ ਐਡਵਾਂਸ',
      dolo: 'ਡੋਲੋ 650',
      azithromycin: 'ਅਜ਼ਿਥ੍ਰੋਮਾਈਸਿਨ 500mg',
      omeprazole: 'ਓਮੇਪ੍ਰਾਜ਼ੋਲ 20mg',
      cetirizine: 'ਸੇਟਿਰਿਜ਼ਿਨ 10mg',
      apolloPharmacy: 'ਅਪੋਲੋ ਫਾਰਮੇਸੀ',
      medPlusPharmacy: 'ਮੇਡਪਲਸ ਫਾਰਮੇਸੀ',
      reliancePharmacy: 'ਰਿਲਾਇੰਸ ਸਮਾਰਟ ਫਾਰਮੇਸੀ',
      localPharmacy: 'ਸਥਾਨਕ ਮੈਡੀਕਲ ਸਟੋਰ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const pharmacies = [
    {
      name: t.apolloPharmacy,
      address: 'Main Market, Sector 14',
      distance: '0.8 km',
      rating: 4.5,
      isOpen: true,
      openUntil: '11:00 PM',
      phone: '+91 98765 43210',
      medicines: {
        [t.paracetamol]: 'available',
        [t.crocin]: 'available',
        [t.azithromycin]: 'limited'
      }
    },
    {
      name: t.medPlusPharmacy,
      address: 'Civil Lines Road',
      distance: '1.2 km',
      rating: 4.2,
      isOpen: true,
      openUntil: '10:30 PM',
      phone: '+91 98765 43211',
      medicines: {
        [t.paracetamol]: 'available',
        [t.dolo]: 'available',
        [t.omeprazole]: 'outOfStock'
      }
    },
    {
      name: t.reliancePharmacy,
      address: 'Shopping Complex, Near Bus Stand',
      distance: '2.1 km',
      rating: 4.0,
      isOpen: false,
      openUntil: '9:00 AM tomorrow',
      phone: '+91 98765 43212',
      medicines: {
        [t.paracetamol]: 'available',
        [t.cetirizine]: 'available',
        [t.azithromycin]: 'available'
      }
    },
    {
      name: t.localPharmacy,
      address: 'Village Road, Near School',
      distance: '3.5 km',
      rating: 3.8,
      isOpen: true,
      openUntil: '9:00 PM',
      phone: '+91 98765 43213',
      medicines: {
        [t.paracetamol]: 'available',
        [t.crocin]: 'limited',
        [t.dolo]: 'outOfStock'
      }
    }
  ];

  const popularMedicines = [
    { name: t.paracetamol, price: '₹15', type: 'Fever, Pain' },
    { name: t.crocin, price: '₹25', type: 'Fever, Headache' },
    { name: t.dolo, price: '₹30', type: 'Fever, Pain' },
    { name: t.azithromycin, price: '₹85', type: 'Antibiotic' },
    { name: t.omeprazole, price: '₹45', type: 'Acidity' },
    { name: t.cetirizine, price: '₹20', type: 'Allergy' }
  ];

  const getStockStatus = (status: string) => {
    switch (status) {
      case 'available':
        return { label: t.available, variant: 'default' as const, color: 'bg-green-500' };
      case 'limited':
        return { label: t.limited, variant: 'secondary' as const, color: 'bg-yellow-500' };
      case 'outOfStock':
        return { label: t.outOfStock, variant: 'destructive' as const, color: 'bg-red-500' };
      default:
        return { label: t.available, variant: 'default' as const, color: 'bg-green-500' };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Popular Medicines */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.popularMedicines}</h2>
          <div className="grid grid-cols-2 gap-3">
            {popularMedicines.map((medicine, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-medium text-sm mb-1">{medicine.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{medicine.type}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{medicine.price}</span>
                    <Button size="sm" variant="outline">
                      <ShoppingCart className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nearby Pharmacies */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.nearbyPharmacies}</h2>
          <div className="space-y-4">
            {pharmacies.map((pharmacy, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{pharmacy.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{pharmacy.address}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{pharmacy.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{pharmacy.distance} {t.distance}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant={pharmacy.isOpen ? "default" : "secondary"}>
                        {pharmacy.isOpen ? t.open : t.closed}
                      </Badge>
                      <div className="text-xs text-muted-foreground text-right">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {pharmacy.isOpen ? t.openUntil : ''} {pharmacy.openUntil}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Available Medicines */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Stock Status:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(pharmacy.medicines).map(([medicine, status]) => {
                        const stockInfo = getStockStatus(status);
                        return (
                          <div key={medicine} className="flex items-center justify-between text-sm">
                            <span>{medicine}</span>
                            <Badge variant={stockInfo.variant} className="text-xs">
                              {stockInfo.label}
                            </Badge>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {t.call}
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Navigation className="w-4 h-4 mr-2" />
                      {t.directions}
                    </Button>
                    <Button size="sm" className="flex-1" disabled={!pharmacy.isOpen}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {t.order}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}