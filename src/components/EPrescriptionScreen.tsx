import React, { useState } from 'react';
import { ArrowLeft, User, Stethoscope, Pill, Text, Calendar, Plus, Save } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner';
import { motion } from 'motion/react';

interface EPrescriptionScreenProps {
  onBack: () => void;
  language: string;
}

export function EPrescriptionScreen({ onBack, language }: EPrescriptionScreenProps) {
  const [patientName, setPatientName] = useState('');
  const [medicineName, setMedicineName] = useState('');
  const [dosage, setDosage] = useState('');
  const [instructions, setInstructions] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const translations = {
    en: {
      title: 'Create E-Prescription',
      patientName: 'Patient Name',
      medicineName: 'Medicine Name',
      dosage: 'Dosage',
      instructions: 'Instructions',
      addMedicine: 'Add Medicine',
      savePrescription: 'Save Prescription',
      prescriptionSaved: 'Prescription saved successfully!',
      fillAllFields: 'Please fill in all fields.',
      back: 'Back',
    },
    hi: {
      title: 'ई-प्रिस्क्रिप्शन बनाएं',
      patientName: 'मरीज़ का नाम',
      medicineName: 'दवा का नाम',
      dosage: 'खुराक',
      instructions: 'निर्देश',
      addMedicine: 'दवा जोड़ें',
      savePrescription: 'प्रिस्क्रिप्शन सहेजें',
      prescriptionSaved: 'प्रिस्क्रिप्शन सफलतापूर्वक सहेजा गया!',
      fillAllFields: 'कृपया सभी फ़ील्ड भरें।',
      back: 'वापस',
    },
    pa: {
      title: 'ਈ-ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਬਣਾਓ',
      patientName: 'ਮਰੀਜ਼ ਦਾ ਨਾਮ',
      medicineName: 'ਦਵਾਈ ਦਾ ਨਾਮ',
      dosage: 'ਖੁਰਾਕ',
      instructions: 'ਨਿਰਦੇਸ਼',
      addMedicine: 'ਦਵਾਈ ਸ਼ਾਮਲ ਕਰੋ',
      savePrescription: 'ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਸੇਵ ਕਰੋ',
      prescriptionSaved: 'ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਸਫਲਤਾਪੂਰਵਕ ਸੇਵ ਕੀਤਾ ਗਿਆ!',
      fillAllFields: 'ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ ਖੇਤਰ ਭਰੋ।',
      back: 'ਵਾਪਸ',
    },
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!patientName || !medicineName || !dosage || !instructions) {
      toast.error(t.fillAllFields);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(t.prescriptionSaved);
      // Clear form
      setPatientName('');
      setMedicineName('');
      setDosage('');
      setInstructions('');
      onBack(); // Go back after saving
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-800">{t.title}</h1>
      </div>

      <div className="p-4 space-y-6">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Label htmlFor="patientName" className="flex items-center gap-2 mb-2 font-medium"><User className="w-4 h-4" /> {t.patientName}</Label>
                <Input
                  id="patientName"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g., Raj Kumar"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Label htmlFor="medicineName" className="flex items-center gap-2 mb-2 font-medium"><Pill className="w-4 h-4" /> {t.medicineName}</Label>
                <Input
                  id="medicineName"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  placeholder="e.g., Paracetamol 500mg"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Label htmlFor="dosage" className="flex items-center gap-2 mb-2 font-medium"><Text className="w-4 h-4" /> {t.dosage}</Label>
                <Input
                  id="dosage"
                  value={dosage}
                  onChange={(e) => setDosage(e.target.value)}
                  placeholder="e.g., 1 tablet after meal, twice a day"
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Label htmlFor="instructions" className="flex items-center gap-2 mb-2 font-medium"><Stethoscope className="w-4 h-4" /> {t.instructions}</Label>
                <Textarea
                  id="instructions"
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder="e.g., Complete the full course. Avoid alcohol."
                  rows={4}
                  required
                />
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex gap-4">
                <Button type="submit" className="flex-1 bg-green-500 hover:bg-green-600 h-12 text-lg" disabled={isLoading}>
                  {isLoading ? (
                    <div className="flex items-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      {t.savePrescription}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Save className="mr-2 h-5 w-5" />
                      {t.savePrescription}
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


