import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { LoginScreen } from "./components/LoginScreen";
import { PatientDashboard } from "./components/PatientDashboard";
import { DoctorDashboard } from "./components/DoctorDashboard";
import { VideoConsultationScreen } from "./components/VideoConsultationScreen";
import { PharmacyAvailabilityScreen } from "./components/PharmacyAvailabilityScreen";
import { AISymptomCheckerScreen } from "./components/AISymptomCheckerScreen";
import { HealthRecordsScreen } from "./components/HealthRecordsScreen";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { PharmaceuticalDashboard } from "./components/PharmaceuticalDashboard";
import { ManageInventoryScreen } from "./components/ManageInventoryScreen";
import { SupplierManagementScreen } from "./components/SupplierManagementScreen";
import { OrderTrackingScreen } from "./components/OrderTrackingScreen";
import { ExpiryDateAlertsScreen } from "./components/ExpiryDateAlertsScreen";
import { SalesReportsScreen } from "./components/SalesReportsScreen";
import { PharmacyNetworkManagementScreen } from "./components/PharmacyNetworkManagementScreen";
import { SupplierPerformanceScreen } from "./components/SupplierPerformanceScreen";
import { BloodBankScreen } from "./components/BloodBankScreen";
import { BloodDonationAppointmentScreen } from "./components/BloodDonationAppointmentScreen";
import { ChatScreen } from "./components/ChatScreen";
import { EPrescriptionScreen } from "./components/EPrescriptionScreen";
import { HealthEducationScreen } from "./components/HealthEducationScreen";

type Screen = 'welcome' | 'login' | 'patient-dashboard' | 'doctor-dashboard' | 'video-consultation' | 'pharmacy-availability' | 'ai-symptom-checker' | 'health-records' | 'patient-records' | 'pharmaceutical-dashboard' | 'manage-inventory' | 'supplier-management' | 'order-tracking' | 'expiry-date-alerts' | 'sales-reports' | 'pharmacy-network-management' | 'supplier-performance' | 'blood-bank' | 'blood-donation-appointment' | 'chat' | 'e-prescription' | 'health-education';
type UserType = 'patient' | 'doctor' | 'pharmaceutical' | null;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [userType, setUserType] = useState<UserType>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setCurrentScreen('login');
  };

  const handleLogin = (type: 'patient' | 'doctor' | 'pharmaceutical') => {
    setUserType(type);
    setCurrentScreen(type === 'patient' ? 'patient-dashboard' : type === 'doctor' ? 'doctor-dashboard' : 'pharmaceutical-dashboard');
  };

  const handleLogout = () => {
    setUserType(null);
    setCurrentScreen('welcome');
    setSelectedLanguage('en');
  };

  const handleNavigate = (screen: string) => {
    console.log(`Navigating to screen: ${screen}`);
    setCurrentScreen(screen as Screen);
  };

  const handleBackToDashboard = () => {
    if (userType === 'patient') {
      setCurrentScreen('patient-dashboard');
    } else if (userType === 'doctor') {
      setCurrentScreen('doctor-dashboard');
    } else if (userType === 'pharmaceutical') {
      setCurrentScreen('pharmaceutical-dashboard');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onLanguageSelect={handleLanguageSelect} />;
      
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLogin}
            onBack={() => setCurrentScreen('welcome')}
            language={selectedLanguage}
          />
        );
      
      case 'patient-dashboard':
        return (
          <PatientDashboard
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            language={selectedLanguage}
          />
        );
      
      case 'doctor-dashboard':
        return (
          <DoctorDashboard
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            language={selectedLanguage}
          />
        );
      
      case 'video-consultation':
        return (
          <VideoConsultationScreen
            onBack={handleBackToDashboard}
            userType={userType || 'patient'}
            language={selectedLanguage}
          />
        );
      
      case 'pharmacy-availability':
        return (
          <PharmacyAvailabilityScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'ai-symptom-checker':
        return (
          <AISymptomCheckerScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'health-records':
        return (
          <HealthRecordsScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'patient-records':
        return (
          <HealthRecordsScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'pharmaceutical-dashboard':
        return (
          <PharmaceuticalDashboard
            onNavigate={handleNavigate}
            onLogout={handleLogout}
            language={selectedLanguage}
          />
        );
      
      case 'manage-inventory':
        return (
          <ManageInventoryScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'supplier-management':
        return (
          <SupplierManagementScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'order-tracking':
        return (
          <OrderTrackingScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'expiry-date-alerts':
        return (
          <ExpiryDateAlertsScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'sales-reports':
        return (
          <SalesReportsScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'pharmacy-network-management':
        return (
          <PharmacyNetworkManagementScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );
      
      case 'supplier-performance':
        return (
          <SupplierPerformanceScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      case 'blood-bank':
        return (
          <BloodBankScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      case 'blood-donation-appointment':
        return (
          <BloodDonationAppointmentScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      case 'chat':
        return (
          <ChatScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      case 'e-prescription':
        return (
          <EPrescriptionScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      case 'health-education':
        return (
          <HealthEducationScreen
            onBack={handleBackToDashboard}
            language={selectedLanguage}
          />
        );

      default:
        return <WelcomeScreen onLanguageSelect={handleLanguageSelect} />;
    }
  };

  if (isLoading) {
    return <LoadingSpinner message="Preparing your healthcare experience..." />;
  }

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
      <Toaster position="top-center" richColors />
    </div>
  );
}