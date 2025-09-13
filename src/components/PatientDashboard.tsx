import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Progress } from "./ui/progress";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"; // Import Sheet components
import { useMobile } from "./ui/use-mobile"; // Import useMobile hook
import {
  Video,
  Bot,
  FileText,
  Pill,
  Calendar,
  Bell,
  User,
  Settings,
  LogOut,
  Clock,
  Heart,
  Activity,
  TrendingUp,
  MapPin,
  Plus,
  ChevronRight,
  Syringe,
  CalendarPlus,
  BookOpen,
  MessageSquare,
  Menu, // Import Menu icon
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

interface PatientDashboardProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  language: string;
}

export function PatientDashboard({ onNavigate, onLogout, language }: PatientDashboardProps) {
  const translations = {
    en: {
      welcome: 'Welcome back',
      patientName: 'Raj Kumar',
      quickActions: 'Quick Actions',
      upcomingAppointments: 'Upcoming Appointments',
      recentActivity: 'Recent Activity',
      videoConsultation: 'Video Consultation',
      videoDesc: 'Connect with doctors online',
      aiSymptomChecker: 'AI Symptom Checker',
      aiDesc: 'Get instant health guidance',
      healthRecords: 'Health Records',
      recordsDesc: 'View your medical history',
      medicineAvailability: 'Medicine Finder',
      medicineDesc: 'Find medicines nearby',
      bloodBank: 'Blood Bank',
      bloodBankDesc: 'Find nearby blood banks',
      bloodDonationAppointment: 'Blood Donation Appointment',
      bloodDonationAppointmentDesc: 'Schedule an appointment to donate blood',
      viewUpcoming: 'View All Appointments',
      drSharma: 'Dr. Sharma - General Medicine',
      tomorrow: 'Tomorrow 10:00 AM',
      drPatel: 'Dr. Patel - Cardiology',
      nextWeek: 'Next Week 2:00 PM',
      noAppointments: 'No upcoming appointments',
      consultationCompleted: 'Consultation completed with Dr. Singh',
      prescriptionUploaded: 'Prescription uploaded for fever',
      personalizedInsights: 'Personalized Health Insights',
      insightMessage: 'Based on your recent activity, here are some personalized recommendations.',
      viewRecommendations: 'View All Recommendations',
      healthEducation: 'Health Education',
      browseTopics: 'Browse Health Topics',
      settings: 'Settings',
      logout: 'Logout',
      chat: 'Chat',
      startChat: 'Start a conversation'
    },
    hi: {
      welcome: 'वापस आपका स्वागत है',
      patientName: 'राज कुमार',
      quickActions: 'त्वरित कार्य',
      upcomingAppointments: 'आगामी अपॉइंटमेंट',
      recentActivity: 'हाल की गतिविधि',
      videoConsultation: 'वीडियो परामर्श',
      videoDesc: 'डॉक्टरों से ऑनलाइन जुड़ें',
      aiSymptomChecker: 'AI लक्षण जांचकर्ता',
      aiDesc: 'तुरंत स्वास्थ्य मार्गदर्शन पाएं',
      healthRecords: 'स्वास्थ्य रिकॉर्ड',
      recordsDesc: 'अपना मेडिकल इतिहास देखें',
      medicineAvailability: 'दवा खोजकर्ता',
      medicineDesc: 'नजदीकी दवाएं खोजें',
      bloodBank: 'रक्त बैंक',
      bloodBankDesc: 'नजदीकी रक्त बैंक खोजें',
      bloodDonationAppointment: 'रक्त दान अपॉइंटमेंट',
      bloodDonationAppointmentDesc: 'रक्त दान के लिए एक अपॉइंटमेंट बंद करें',
      viewUpcoming: 'सभी अपॉइंटमेंट देखें',
      drSharma: 'डॉ. शर्मा - सामान्य चिकित्सा',
      tomorrow: 'कल सुबह 10:00',
      drPatel: 'डॉ. पटेल - हृदय रोग',
      nextWeek: 'अगले सप्ताह दोपहर 2:00',
      noAppointments: 'कोई आगामी अपॉइंटमेंट नहीं',
      consultationCompleted: 'डॉ. सिंह के साथ परामर्श पूरा हुआ',
      prescriptionUploaded: 'बुखार के लिए नुस्खा अपलोड किया गया',
      personalizedInsights: 'व्यक्तिगत स्वास्थ्य अंतर्दृष्टि',
      insightMessage: 'आपकी हाल की गतिविधि के आधार पर, यहाँ कुछ व्यक्तिगत सिफारिशें दी गई हैं।',
      viewRecommendations: 'सभी सिफारिशें देखें',
      healthEducation: 'स्वास्थ्य शिक्षा',
      browseTopics: 'स्वास्थ्य विषय ब्राउज़ करें',
      settings: 'सेटिंग्स',
      logout: 'लॉगआउट',
      chat: 'चैट',
      startChat: 'बातचीत शुरू करें'
    },
    pa: {
      welcome: 'ਜੀ ਆਇਆਂ ਨੂੰ,',
      patientName: 'ਰਾਜ ਕੁਮਾਰ',
      quickActions: 'ਤੁਰੰਤ ਕਾਰਵਾਈਆਂ',
      upcomingAppointments: 'ਆਉਣ ਵਾਲੀਆਂ ਮੁਲਾਕਾਤਾਂ',
      recentActivity: 'ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ',
      videoConsultation: 'ਵੀਡੀਓ ਸਲਾਹ',
      videoDesc: 'ਡਾਕਟਰਾਂ ਨਾਲ ਔਨਲਾਈਨ ਜੁੜੋ',
      aiSymptomChecker: 'AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ',
      aiDesc: 'ਤੁਰੰਤ ਸਿਹਤ ਮਾਰਗਦਰਸ਼ਨ ਪਾਓ',
      healthRecords: 'ਸਿਹਤ ਰਿਕਾਰਡ',
      recordsDesc: 'ਆਪਣਾ ਮੈਡੀਕਲ ਇਤਿਹਾਸ ਦੇਖੋ',
      medicineAvailability: 'ਦਵਾਈ ਖੋਜਕਰਤਾ',
      medicineDesc: 'ਨੇੜਲੀਆਂ ਦਵਾਈਆਂ ਖੋਜੋ',
      bloodBank: 'ਰਕਤ ਬੈਂਕ',
      bloodBankDesc: 'ਨੇੜੀਆਂ ਰਕਤ ਬੈਂਕ ਖੋਜੋ',
      bloodDonationAppointment: 'ਰਕਤ ਦਾਨ ਅੱਪਾਉਣ ਦਾ ਅੱਪਾਉਣ',
      bloodDonationAppointmentDesc: 'ਰਕਤ ਦਾਨ ਕਰਨ ਲਈ ਇਕ ਅੱਪਾਉਣ ਬਂਦ ਕਰੋ',
      viewUpcoming: 'ਸਾਰੀਆਂ ਮੁਲਾਕਾਤਾਂ ਦੇਖੋ',
      drSharma: 'ਡਾ. ਸ਼ਰਮਾ - ਸਧਾਰਣ ਦਵਾਈ',
      tomorrow: 'ਕੱਲ ਸਵੇਰੇ 10:00',
      drPatel: 'ਡਾ. ਪਟੇਲ - ਦਿਲ ਦੀ ਬਿਮਾਰੀ',
      nextWeek: 'ਅਗਲੇ ਹਫ਼ਤੇ ਦੁਪਹਿਰ 2:00',
      noAppointments: 'ਕੋਈ ਆਉਣ ਵਾਲੀ ਮੁਲਾਕਾਤ ਨਹੀਂ',
      consultationCompleted: 'ਡਾ. ਸਿੰਘ ਨਾਲ ਸਲਾਹ ਪੂਰੀ ਹੋਈ',
      prescriptionUploaded: 'ਬੁਖਾਰ ਲਈ ਨੁਸਖਾ ਅੱਪਲੋਡ ਕੀਤਾ ਗਿਆ',
      personalizedInsights: 'ਵਿਕਲਪਿਕ ਸਿਹਤ ਦੇਖਭਾਲ',
      insightMessage: 'ਤੁਹਾਡੀ ਹਾਲ ਦੀ ਗਤੀਵਿਧੀ ਦੀ ਆਧਾਰ ਤੇ, ਕੁਝ ਵਿਕਲਪਿਕ ਸਿਫਾਰਿਸ਼ਾਂ ਤੁਹਾਡੇ ਕੋਲ ਹਨ।',
      viewRecommendations: 'ਸਾਰੀਆਂ ਸਿਫਾਰਿਸ਼ਾਂ ਦੇਖੋ',
      healthEducation: 'ਸਿਹਤ ਸ਼ਿਕਸ਼ਾ',
      browseTopics: 'ਸਿਹਤ ਵਿ਷ਯ ਬਰਾਊਜ਼ ਕਰੋ',
      settings: 'ਸੈਟਿੰਗਾਂ',
      logout: 'ਲਾਗਆਉਟ',
      chat: 'ਚੈਟ',
      startChat: 'ਬਾਤਚੀਤ ਸ਼ੁਰੂ ਕਰੋ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;
  const isMobile = useMobile(); // Use the useMobile hook

  const quickActions = [
    {
      icon: Video,
      title: t.videoConsultation,
      description: t.videoDesc,
      color: 'bg-blue-500',
      action: () => onNavigate('video-consultation')
    },
    {
      icon: Bot,
      title: t.aiSymptomChecker,
      description: t.aiDesc,
      color: 'bg-purple-500',
      action: () => onNavigate('ai-symptom-checker')
    },
    {
      icon: FileText,
      title: t.healthRecords,
      description: t.recordsDesc,
      color: 'bg-green-500',
      action: () => onNavigate('health-records')
    },
    {
      icon: Pill,
      title: t.medicineAvailability,
      description: t.medicineDesc,
      color: 'bg-orange-500',
      action: () => onNavigate('pharmacy-availability')
    },
    {
      icon: Syringe,
      title: t.bloodBank,
      description: t.bloodBankDesc,
      color: 'bg-red-500',
      action: () => onNavigate('blood-bank')
    },
    {
      icon:  CalendarPlus,
      title: t.bloodDonationAppointment,
      description: t.bloodDonationAppointmentDesc,
      color: 'bg-indigo-500',
      action: () => onNavigate('blood-donation-appointment')
    },
    {
      icon: BookOpen,
      title: t.healthEducation,
      description: t.browseTopics,
      color: 'bg-purple-500',
      action: () => onNavigate('health-education')
    },
    {
      icon: MessageSquare,
      title: t.chat,
      description: t.startChat,
      color: 'bg-pink-500',
      action: () => onNavigate('chat')
    }
  ];

  const handleQuickAction = (action: () => void, message: string) => {
    toast.success(message);
    action();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 overflow-x-hidden">
      {/* Enhanced Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-lg border-b border-green-100"
      >
        <div className="relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5"></div>

          <div className="relative z-10 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-lg font-semibold">
                      RK
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <div>
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-primary"
                  >
                    {t.welcome}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-muted-foreground"
                  >
                    {t.patientName}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-2 mt-1"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 font-medium">Health Status: Good</span>
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isMobile ? (
                  <Sheet>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                        <Menu className="w-5 h-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full sm:w-3/4 p-4">
                      <h2 className="text-xl font-bold mb-6 text-primary">Navigation</h2>
                      <div className="flex flex-col gap-4">
                        {quickActions.map((action, index) => (
                          <Button
                            key={index}
                            variant="ghost"
                            className="justify-start gap-3 text-lg h-auto py-3"
                            onClick={() => {
                              action.action();
                            }}
                          >
                            <action.icon className={`w-6 h-6 ${action.color.replace('bg-', 'text-')}`} />
                            {action.title}
                          </Button>
                        ))}
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <Button variant="ghost" className="justify-start gap-3 text-lg h-auto py-3 w-full" onClick={() => toast.info("Settings Clicked")}>
                            <Settings className="w-6 h-6 text-gray-600" />
                            {t.settings}
                          </Button>
                          <Button variant="ghost" className="justify-start gap-3 text-lg h-auto py-3 w-full" onClick={onLogout}>
                            <LogOut className="w-6 h-6 text-red-500" />
                            {t.logout}
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                ) : (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button variant="ghost" size="sm" className="relative hover:bg-primary/10">
                        <Bell className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                      </Button>
                    </motion.div>
                    <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                      <Settings className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={onLogout} className="hover:bg-red-50 hover:text-red-600">
                      <LogOut className="w-5 h-5" />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="p-6 space-y-8">
        {/* Health Overview Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardContent className="p-4 text-center">
                <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-red-700">72</p>
                <p className="text-sm text-red-600">Heart Rate</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-4 text-center">
                <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-blue-700">120/80</p>
                <p className="text-sm text-blue-600">Blood Pressure</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-green-700">98.6°F</p>
                <p className="text-sm text-green-600">Temperature</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-4 text-center">
                <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-2xl font-bold text-purple-700">3</p>
                <p className="text-sm text-purple-600">Upcoming</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Personalized Health Insights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
              <CardTitle className="text-xl font-bold text-gray-800">{t.personalizedInsights}</CardTitle>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors w-full sm:w-auto text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
                <Plus className="w-4 h-4 mr-2" />
                {t.viewRecommendations}
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-blue-200">
                <Bot className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{t.insightMessage}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Regular exercise and a balanced diet can significantly improve your cardiovascular health.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-purple-200">
                <Pill className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">Medication Adherence Tip</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Don't forget your daily medication for blood pressure. Set a reminder in your phone!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{t.quickActions}</h2>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              View All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group"
                  onClick={() => handleQuickAction(action.action, `Opening ${action.title}...`)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <action.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">
                            {action.title}
                          </h3>
                          <p className="text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Upcoming Appointments */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                <CardTitle className="text-xl font-bold text-gray-800">{t.upcomingAppointments}</CardTitle>
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors w-full sm:w-auto text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.viewUpcoming}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-blue-600 text-white">DS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{t.drSharma}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{t.tomorrow}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Confirmed</Badge>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-green-600 text-white">DP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{t.drPatel}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{t.nextWeek}</span>
                    </div>
                  </div>
                </div>
                <Badge variant="outline" className="border-green-300 text-green-700">Scheduled</Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Recent Activity & Health Progress */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">{t.recentActivity}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{t.consultationCompleted}</p>
                    <p className="text-sm text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{t.prescriptionUploaded}</p>
                    <p className="text-sm text-muted-foreground">1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">Health Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Recovery Progress</span>
                    <span className="font-semibold">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Medication Adherence</span>
                    <span className="font-semibold">90%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    Keep up the great work! Your health metrics are improving.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}