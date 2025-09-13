import { Button } from "./ui/button";
import { ArrowLeft, Search, Building, Phone, Mail, MapPin, Edit, Trash2, Plus, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";

interface PharmacyNetworkManagementScreenProps {
  onBack: () => void;
  language: string;
}

export function PharmacyNetworkManagementScreen({ onBack, language }: PharmacyNetworkManagementScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Pharmacy Network Management',
      searchPlaceholder: 'Search pharmacies...',
      addPharmacy: 'Add Pharmacy',
      pharmacyName: 'Pharmacy Name',
      contact: 'Contact',
      address: 'Address',
      rating: 'Rating',
      actions: 'Actions',
      noPharmacies: 'No pharmacies found.',
      apolloPharmacy: 'Apollo Pharmacy',
      medPlusPharmacy: 'MedPlus Pharmacy',
      reliancePharmacy: 'Reliance Smart Pharmacy',
      email1: 'apollo@pharmacy.com',
      email2: 'medplus@pharmacy.com',
      email3: 'reliance@pharmacy.com',
      phone1: '+91 98765 11111',
      phone2: '+91 98765 22222',
      phone3: '+91 98765 33333',
      edit: 'Edit',
      delete: 'Delete'
    },
    hi: {
      title: 'फार्मेसी नेटवर्क प्रबंधन',
      searchPlaceholder: 'फार्मेसियों को खोजें...',
      addPharmacy: 'फार्मेसी जोड़ें',
      pharmacyName: 'फार्मेसी का नाम',
      contact: 'संपर्क',
      address: 'पता',
      rating: 'रेटिंग',
      actions: 'कार्यवाहियां',
      noPharmacies: 'कोई फार्मेसी नहीं मिली।',
      apolloPharmacy: 'अपोलो फार्मेसी',
      medPlusPharmacy: 'मेडप्लस फार्मेसी',
      reliancePharmacy: 'रिलायंस स्मार्ट फार्मेसी',
      email1: 'apollo@pharmacy.com',
      email2: 'medplus@pharmacy.com',
      email3: 'reliance@pharmacy.com',
      phone1: '+91 98765 11111',
      phone2: '+91 98765 22222',
      phone3: '+91 98765 33333',
      edit: 'संपादित करें',
      delete: 'मिटाएं'
    },
    pa: {
      title: 'ਫਾਰਮੇਸੀ ਨੈੱਟਵਰਕ ਪ੍ਰਬੰਧਨ',
      searchPlaceholder: 'ਫਾਰਮੇਸੀਆਂ ਖੋਜੋ...',
      addPharmacy: 'ਫਾਰਮੇਸੀ ਸ਼ਾਮਲ ਕਰੋ',
      pharmacyName: 'ਫਾਰਮੇਸੀ ਦਾ ਨਾਮ',
      contact: 'ਸੰਪਰਕ',
      address: 'ਪਤਾ',
      rating: 'ਰੇਟਿੰਗ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noPharmacies: 'ਕੋਈ ਫਾਰਮੇਸੀ ਨਹੀਂ ਮਿਲੀ।',
      apolloPharmacy: 'ਅਪੋਲੋ ਫਾਰਮੇਸੀ',
      medPlusPharmacy: 'ਮੇਡਪਲਸ ਫਾਰਮੇਸੀ',
      reliancePharmacy: 'ਰਿਲਾਇੰਸ ਸਮਾਰਟ ਫਾਰਮੇਸੀ',
      email1: 'apollo@pharmacy.com',
      email2: 'medplus@pharmacy.com',
      email3: 'reliance@pharmacy.com',
      phone1: '+91 98765 11111',
      phone2: '+91 98765 22222',
      phone3: '+91 98765 33333',
      edit: 'ਸੰਪਾਦਿਤ ਕਰੋ',
      delete: 'ਮਿਟਾਓ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: t.apolloPharmacy,
      address: 'Main St, City Center',
      phone: t.phone1,
      email: t.email1,
      rating: 4.5,
    },
    {
      id: 2,
      name: t.medPlusPharmacy,
      address: 'East Ave, Downtown',
      phone: t.phone2,
      email: t.email2,
      rating: 4.2,
    },
    {
      id: 3,
      name: t.reliancePharmacy,
      address: 'North Rd, Suburb',
      phone: t.phone3,
      email: t.email3,
      rating: 3.9,
    },
  ]);

  const filteredPharmacies = pharmacies.filter(pharmacy =>
    pharmacy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pharmacy.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pharmacy.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
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
            {t.addPharmacy}
          </Button>
        </div>

        {/* Pharmacies List */}
        <div className="space-y-4">
          {filteredPharmacies.length > 0 ? (
            filteredPharmacies.map((pharmacy) => (
              <Card key={pharmacy.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{pharmacy.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{pharmacy.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>{pharmacy.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>{pharmacy.email}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {pharmacy.rating}
                      </Badge>
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
                  </div>
                </CardHeader>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center">{t.noPharmacies}</p>
          )}
        </div>
      </div>
    </div>
  );
}

