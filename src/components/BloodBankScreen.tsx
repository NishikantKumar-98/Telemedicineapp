import { Button } from "./ui/button";
import { ArrowLeft, Syringe, MapPin, Phone, Mail, Clock, CalendarCheck, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { useState } from "react";
import { motion } from "motion/react";

interface BloodBankScreenProps {
  onBack: () => void;
  language: string;
}

export function BloodBankScreen({ onBack, language }: BloodBankScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const translations = {
    en: {
      title: 'Blood Bank',
      searchPlaceholder: 'Search blood banks or locations...',
      bloodBankName: 'Blood Bank Name',
      address: 'Address',
      contact: 'Contact',
      availability: 'Availability',
      bloodTypes: 'Blood Types',
      actions: 'Actions',
      noBloodBanks: 'No blood banks found.',
      viewDetails: 'View Details',
      bookAppointment: 'Book Appointment',
      apolloBloodBank: 'Apollo Blood Bank',
      redCrossBloodBank: 'Red Cross Blood Bank',
      cityHospitalBloodBank: 'City Hospital Blood Bank',
      address1: '123 Main St, Cityville',
      address2: '456 Oak Ave, Townsville',
      address3: '789 Pine Ln, Villageton',
      phone1: '+91 99999 11111',
      phone2: '+91 99999 22222',
      phone3: '+91 99999 33333',
      open: 'Open',
      closed: 'Closed',
      bloodA: 'A+', bloodB: 'B+', bloodAB: 'AB+', bloodO: 'O+'
    },
    hi: {
      title: 'ब्लड बैंक',
      searchPlaceholder: 'ब्लड बैंक या स्थान खोजें...',
      bloodBankName: 'ब्लड बैंक का नाम',
      address: 'पता',
      contact: 'संपर्क',
      availability: 'उपलब्धता',
      bloodTypes: 'ब्लड ग्रुप',
      actions: 'कार्यवाहियां',
      noBloodBanks: 'कोई ब्लड बैंक नहीं मिला।',
      viewDetails: 'विवरण देखें',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      apolloBloodBank: 'अपोलो ब्लड बैंक',
      redCrossBloodBank: 'रेड क्रॉस ब्लड बैंक',
      cityHospitalBloodBank: 'सिटी हॉस्पिटल ब्लड बैंक',
      address1: '123 मेन स्ट्रीट, सिटीविले',
      address2: '456 ओक एवेन्यू, टाउनस्विले',
      address3: '789 पाइन लेन, विलेजेटन',
      phone1: '+91 99999 11111',
      phone2: '+91 99999 22222',
      phone3: '+91 99999 33333',
      open: 'खुला',
      closed: 'बंद',
      bloodA: 'ए+', bloodB: 'बी+', bloodAB: 'एबी+', bloodO: 'ओ+'
    },
    pa: {
      title: 'ਬਲੱਡ ਬੈਂਕ',
      searchPlaceholder: 'ਬਲੱਡ ਬੈਂਕ ਜਾਂ ਸਥਾਨ ਖੋਜੋ...',
      bloodBankName: 'ਬਲੱਡ ਬੈਂਕ ਦਾ ਨਾਮ',
      address: 'ਪਤਾ',
      contact: 'ਸੰਪਰਕ',
      availability: 'ਉਪਲਬਧਤਾ',
      bloodTypes: 'ਖੂਨ ਦੇ ਸਮੂਹ',
      actions: 'ਕਾਰਵਾਈਆਂ',
      noBloodBanks: 'ਕੋਈ ਬਲੱਡ ਬੈਂਕ ਨਹੀਂ ਮਿਲਿਆ।',
      viewDetails: 'ਵੇਰਵੇ ਵੇਖੋ',
      bookAppointment: 'ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ',
      apolloBloodBank: 'ਅਪੋਲੋ ਬਲੱਡ ਬੈਂਕ',
      redCrossBloodBank: 'ਰੈੱਡ ਕਰਾਸ ਬਲੱਡ ਬੈਂਕ',
      cityHospitalBloodBank: 'ਸਿਟੀ ਹਸਪਤਾਲ ਬਲੱਡ ਬੈਂਕ',
      address1: '123 ਮੇਨ ਸਟ੍ਰੀਟ, ਸਿਟੀਵਿਲ',
      address2: '456 ਓਕ ਐਵੇਨਿਊ, ਟਾਊਨਸਵਿਲ',
      address3: '789 ਪਾਈਨ ਲੇਨ, ਵਿਲੇਜੇਟਨ',
      phone1: '+91 99999 11111',
      phone2: '+91 99999 22222',
      phone3: '+91 99999 33333',
      open: 'ਖੁੱਲ੍ਹਾ',
      closed: 'ਬੰਦ',
      bloodA: 'ਏ+', bloodB: 'ਬੀ+', bloodAB: 'ਏਬੀ+', bloodO: 'ਓ+'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const [bloodBanks, setBloodBanks] = useState([
    {
      id: 1,
      name: t.apolloBloodBank,
      address: t.address1,
      phone: t.phone1,
      email: 'apollo@bloodbank.com',
      hours: '9:00 AM - 6:00 PM',
      status: 'open',
      bloodTypes: [t.bloodA, t.bloodB, t.bloodO]
    },
    {
      id: 2,
      name: t.redCrossBloodBank,
      address: t.address2,
      phone: t.phone2,
      email: 'redcross@bloodbank.com',
      hours: '10:00 AM - 5:00 PM',
      status: 'closed',
      bloodTypes: [t.bloodA, t.bloodB, t.bloodAB, t.bloodO]
    },
    {
      id: 3,
      name: t.cityHospitalBloodBank,
      address: t.address3,
      phone: t.phone3,
      email: 'cityhospital@bloodbank.com',
      hours: '24/7',
      status: 'open',
      bloodTypes: [t.bloodA, t.bloodO]
    },
  ]);

  const filteredBloodBanks = bloodBanks.filter(bank =>
    bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bank.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bank.bloodTypes.some(type => type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge className="bg-green-500">{t.open}</Badge>;
      case 'closed':
        return <Badge variant="destructive">{t.closed}</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50">
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

        {/* Blood Banks List */}
        <div className="space-y-4">
          {filteredBloodBanks.length > 0 ? (
            filteredBloodBanks.map((bank) => (
              <Card key={bank.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-base mb-1">{bank.name}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        <span>{bank.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Phone className="w-4 h-4" />
                        <span>{bank.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{bank.hours}</span>
                        {getStatusBadge(bank.status)}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => alert('View details for ' + bank.name)}>
                        {t.viewDetails}
                      </Button>
                      <Button size="sm" onClick={() => alert('Book appointment for ' + bank.name)}>
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        {t.bookAppointment}
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h4 className="text-sm font-medium mb-2">{t.bloodTypes}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {bank.bloodTypes.map((type, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-red-100 text-red-800 border-red-300">
                        <Syringe className="w-3 h-3 mr-1" /> {type}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-muted-foreground text-center">{t.noBloodBanks}</p>
          )}
        </div>
      </div>
    </div>
  );
}


