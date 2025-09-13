import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  ArrowLeft, 
  FileText, 
  Download, 
  Share,
  Calendar,
  User,
  Heart,
  Activity,
  Pill,
  TestTube,
  Eye,
  Filter,
  Search
} from "lucide-react";
import { motion } from "motion/react";
import { Input } from "./ui/input";

interface HealthRecordsScreenProps {
  onBack: () => void;
  language: string;
}

export function HealthRecordsScreen({ onBack, language }: HealthRecordsScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const translations = {
    en: {
      title: 'Health Records',
      subtitle: 'Your complete medical history',
      search: 'Search records...',
      all: 'All Records',
      prescriptions: 'Prescriptions',
      labReports: 'Lab Reports',
      consultations: 'Consultations',
      vitals: 'Vitals',
      download: 'Download',
      share: 'Share',
      view: 'View Details',
      recent: 'Recent Records',
      older: 'Older Records',
      bloodTest: 'Blood Test Report',
      consultation: 'Video Consultation',
      prescription: 'Prescription',
      vitalSigns: 'Vital Signs Check',
      drSharma: 'Dr. Priya Sharma',
      drPatel: 'Dr. Amit Patel',
      normalRange: 'Normal Range',
      completed: 'Completed',
      pending: 'Pending',
      reviewed: 'Reviewed'
    },
    hi: {
      title: 'स्वास्थ्य रिकॉर्ड',
      subtitle: 'आपका पूरा मेडिकल इतिहास',
      search: 'रिकॉर्ड खोजें...',
      all: 'सभी रिकॉर्ड',
      prescriptions: 'नुस्खे',
      labReports: 'लैब रिपोर्ट',
      consultations: 'परामर्श',
      vitals: 'जीवन संकेत',
      download: 'डाउनलोड',
      share: 'साझा करें',
      view: 'विवरण देखें',
      recent: 'हाल के रिकॉर्ड',
      older: 'पुराने रिकॉर्ड',
      bloodTest: 'रक्त जांच रिपोर्ट',
      consultation: 'वीडियो परामर्श',
      prescription: 'नुस्खा',
      vitalSigns: 'जीवन संकेत जांच',
      drSharma: 'डॉ. प्रिया शर्मा',
      drPatel: 'डॉ. अमित पटेल',
      normalRange: 'सामान्य सीमा',
      completed: 'पूर्ण',
      pending: 'लंबित',
      reviewed: 'समीक्षित'
    },
    pa: {
      title: 'ਸਿਹਤ ਰਿਕਾਰਡ',
      subtitle: 'ਤੁਹਾਡਾ ਪੂਰਾ ਮੈਡੀਕਲ ਇਤਿਹਾਸ',
      search: 'ਰਿਕਾਰਡ ਖੋਜੋ...',
      all: 'ਸਾਰੇ ਰਿਕਾਰਡ',
      prescriptions: 'ਨੁਸਖੇ',
      labReports: 'ਲੈਬ ਰਿਪੋਰਟ',
      consultations: 'ਸਲਾਹ',
      vitals: 'ਜੀਵਨ ਸੰਕੇਤ',
      download: 'ਡਾਉਨਲੋਡ',
      share: 'ਸਾਂਝਾ ਕਰੋ',
      view: 'ਵੇਰਵਾ ਦੇਖੋ',
      recent: 'ਹਾਲ ਦੇ ਰਿਕਾਰਡ',
      older: 'ਪੁਰਾਣੇ ਰਿਕਾਰਡ',
      bloodTest: 'ਖੂਨ ਦੀ ਜਾਂਚ ਰਿਪੋਰਟ',
      consultation: 'ਵੀਡੀਓ ਸਲਾਹ',
      prescription: 'ਨੁਸਖਾ',
      vitalSigns: 'ਜੀਵਨ ਸੰਕੇਤ ਜਾਂਚ',
      drSharma: 'ਡਾ. ਪ੍ਰਿਯਾ ਸ਼ਰਮਾ',
      drPatel: 'ਡਾ. ਅਮਿਤ ਪਟੇਲ',
      normalRange: 'ਸਧਾਰਣ ਸੀਮਾ',
      completed: 'ਪੂਰਾ ਹੋਇਆ',
      pending: 'ਬਾਕੀ',
      reviewed: 'ਸਮੀਖਿਆ ਕੀਤੀ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const healthRecords = [
    {
      id: 1,
      type: 'lab',
      title: t.bloodTest,
      doctor: t.drPatel,
      date: '2024-01-15',
      status: 'completed',
      icon: TestTube,
      color: 'bg-red-500'
    },
    {
      id: 2,
      type: 'consultation',
      title: t.consultation,
      doctor: t.drSharma,
      date: '2024-01-12',
      status: 'completed',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      type: 'prescription',
      title: t.prescription,
      doctor: t.drSharma,
      date: '2024-01-12',
      status: 'reviewed',
      icon: Pill,
      color: 'bg-green-500'
    },
    {
      id: 4,
      type: 'vitals',
      title: t.vitalSigns,
      doctor: 'Self-recorded',
      date: '2024-01-10',
      status: 'completed',
      icon: Heart,
      color: 'bg-purple-500'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-700">{t.completed}</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700">{t.pending}</Badge>;
      case 'reviewed':
        return <Badge className="bg-blue-100 text-blue-700">{t.reviewed}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredRecords = healthRecords.filter(record => {
    const matchesFilter = activeFilter === 'all' || record.type === activeFilter;
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         record.doctor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg border-b border-green-100"
      >
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5"></div>
          
          <div className="relative z-10 p-6">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="sm" onClick={onBack}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-primary">{t.title}</h1>
                  <p className="text-muted-foreground">{t.subtitle}</p>
                </div>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder={t.search}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="p-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="mb-6">
            <TabsList className="grid w-full grid-cols-5 h-12">
              <TabsTrigger value="all" className="text-sm">{t.all}</TabsTrigger>
              <TabsTrigger value="consultation" className="text-sm">{t.consultations}</TabsTrigger>
              <TabsTrigger value="prescription" className="text-sm">{t.prescriptions}</TabsTrigger>
              <TabsTrigger value="lab" className="text-sm">{t.labReports}</TabsTrigger>
              <TabsTrigger value="vitals" className="text-sm">{t.vitals}</TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Records List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          {filteredRecords.map((record, index) => (
            <motion.div
              key={record.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${record.color} flex items-center justify-center`}>
                        <record.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">{record.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <User className="w-4 h-4" />
                          <span>{record.doctor}</span>
                          <span>•</span>
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(record.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {getStatusBadge(record.status)}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          {t.view}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          {t.download}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredRecords.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center py-12"
          >
            <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No records found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}