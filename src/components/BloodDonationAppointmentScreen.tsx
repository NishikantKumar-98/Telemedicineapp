import { Button } from "./ui/button";
import { ArrowLeft, CalendarPlus, Clock, MapPin, User, Syringe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface BloodDonationAppointmentScreenProps {
  onBack: () => void;
  language: string;
}

export function BloodDonationAppointmentScreen({ onBack, language }: BloodDonationAppointmentScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    bloodGroup: '',
    date: '',
    time: '',
    location: '',
    notes: '',
  });

  const translations = {
    en: {
      title: 'Book Blood Donation Appointment',
      name: 'Full Name',
      contact: 'Contact Number',
      bloodGroup: 'Blood Group',
      date: 'Date',
      time: 'Time',
      location: 'Preferred Location',
      notes: 'Additional Notes (Optional)',
      bookAppointment: 'Book Appointment',
      selectBloodGroup: 'Select Blood Group',
      selectLocation: 'Select Location',
      appointmentBooked: 'Appointment booked successfully!',
      fillAllFields: 'Please fill in all required fields.',
      bloodA: 'A+', bloodB: 'B+', bloodAB: 'AB+', bloodO: 'O+',
      apolloBloodBank: 'Apollo Blood Bank',
      redCrossBloodBank: 'Red Cross Blood Bank',
      cityHospitalBloodBank: 'City Hospital Blood Bank',
      address1: '123 Main St, Cityville',
      address2: '456 Oak Ave, Townsville',
      address3: '789 Pine Ln, Villageton',
    },
    hi: {
      title: 'रक्तदान अपॉइंटमेंट बुक करें',
      name: 'पूरा नाम',
      contact: 'संपर्क नंबर',
      bloodGroup: 'ब्लड ग्रुप',
      date: 'दिनांक',
      time: 'समय',
      location: 'पसंदीदा स्थान',
      notes: 'अतिरिक्त नोट्स (वैकल्पिक)',
      bookAppointment: 'अपॉइंटमेंट बुक करें',
      selectBloodGroup: 'ब्लड ग्रुप चुनें',
      selectLocation: 'स्थान चुनें',
      appointmentBooked: 'अपॉइंटमेंट सफलतापूर्वक बुक किया गया!',
      fillAllFields: 'कृपया सभी आवश्यक फ़ील्ड भरें।',
      bloodA: 'ए+', bloodB: 'बी+', bloodAB: 'एबी+', bloodO: 'ओ+',
      apolloBloodBank: 'अपोलो ब्लड बैंक',
      redCrossBloodBank: 'रेड क्रॉस ब्लड बैंक',
      cityHospitalBloodBank: 'सिटी हॉस्पिटल ब्लड बैंक',
      address1: '123 मेन स्ट्रीट, सिटीविले',
      address2: '456 ओक एवेन्यू, टाउनस्विले',
      address3: '789 पाइन लेन, विलेजेटन',
    },
    pa: {
      title: 'ਖੂਨਦਾਨ ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ',
      name: 'ਪੂਰਾ ਨਾਮ',
      contact: 'ਸੰਪਰਕ ਨੰਬਰ',
      bloodGroup: 'ਖੂਨ ਦਾ ਸਮੂਹ',
      date: 'ਤਾਰੀਖ',
      time: 'ਸਮਾਂ',
      location: 'ਪਸੰਦੀਦਾ ਸਥਾਨ',
      notes: 'ਵਾਧੂ ਨੋਟਸ (ਵਿਕਲਪਿਕ)',
      bookAppointment: 'ਅਪਾਇੰਟਮੈਂਟ ਬੁੱਕ ਕਰੋ',
      selectBloodGroup: 'ਖੂਨ ਦਾ ਸਮੂਹ ਚੁਣੋ',
      selectLocation: 'ਸਥਾਨ ਚੁਣੋ',
      appointmentBooked: 'ਅਪਾਇੰਟਮੈਂਟ ਸਫਲਤਾਪੂਰਵਕ ਬੁੱਕ ਕੀਤਾ ਗਿਆ!',
      fillAllFields: 'ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਲੋੜੀਂਦੇ ਖੇਤਰ ਭਰੋ।',
      bloodA: 'ਏ+', bloodB: 'ਬੀ+', bloodAB: 'ਏਬੀ+', bloodO: 'ਓ+',
      apolloBloodBank: 'ਅਪੋਲੋ ਬਲੱਡ ਬੈਂਕ',
      redCrossBloodBank: 'ਰੈੱਡ ਕਰਾਸ ਬਲੱਡ ਬੈਂਕ',
      cityHospitalBloodBank: 'ਸਿਟੀ ਹਸਪਤਾਲ ਬਲੱਡ ਬੈਂਕ',
      address1: '123 ਮੇਨ ਸਟ੍ਰੀਟ, ਸਿਟੀਵਿਲ',
      address2: '456 ਓਕ ਐਵੇਨਿਊ, ਟਾਊਨਸਵਿਲ',
      address3: '789 ਪਾਈਨ ਲੇਨ, ਵਿਲੇਜੇਟਨ',
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.contact || !formData.bloodGroup || !formData.date || !formData.time || !formData.location) {
      toast.error(t.fillAllFields);
      return;
    }
    // Here you would typically send data to a backend
    console.log('Blood donation appointment data:', formData);
    toast.success(t.appointmentBooked);
    onBack(); // Navigate back after successful booking
  };

  const bloodGroups = [t.bloodA, t.bloodB, t.bloodAB, t.bloodO];
  const locations = [
    { id: 'apollo', name: t.apolloBloodBank, address: t.address1 },
    { id: 'redcross', name: t.redCrossBloodBank, address: t.address2 },
    { id: 'cityhospital', name: t.cityHospitalBloodBank, address: t.address3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center gap-3 p-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-xl font-semibold text-primary">{t.title}</h1>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <Label htmlFor="name">{t.name}</Label>
              <Input id="name" placeholder={t.name} value={formData.name} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="contact">{t.contact}</Label>
              <Input id="contact" placeholder={t.contact} value={formData.contact} onChange={handleChange} />
            </div>
            <div>
              <Label htmlFor="bloodGroup">{t.bloodGroup}</Label>
              <Select value={formData.bloodGroup} onValueChange={(value) => handleSelectChange('bloodGroup', value)}>
                <SelectTrigger id="bloodGroup">
                  <SelectValue placeholder={t.selectBloodGroup} />
                </SelectTrigger>
                <SelectContent>
                  {bloodGroups.map((group, index) => (
                    <SelectItem key={index} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date">{t.date}</Label>
                <Input id="date" type="date" value={formData.date} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="time">{t.time}</Label>
                <Input id="time" type="time" value={formData.time} onChange={handleChange} />
              </div>
            </div>
            <div>
              <Label htmlFor="location">{t.location}</Label>
              <Select value={formData.location} onValueChange={(value) => handleSelectChange('location', value)}>
                <SelectTrigger id="location">
                  <SelectValue placeholder={t.selectLocation} />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc.id} value={loc.name}>
                      {loc.name} - {loc.address}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="notes">{t.notes}</Label>
              <Textarea id="notes" placeholder={t.notes} value={formData.notes} onChange={handleChange} />
            </div>
            <Button className="w-full" onClick={handleSubmit}>
              <CalendarPlus className="w-5 h-5 mr-2" />
              {t.bookAppointment}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


