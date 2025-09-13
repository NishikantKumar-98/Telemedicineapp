import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User, Stethoscope, Phone, Lock, ArrowLeft, Eye, EyeOff, Loader2, Shield, CheckCircle, Pill } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";

interface LoginScreenProps {
  onLogin: (userType: 'patient' | 'doctor' | 'pharmaceutical') => void;
  onBack: () => void;
  language: string;
}

export function LoginScreen({ onLogin, onBack, language }: LoginScreenProps) {
  const [activeTab, setActiveTab] = useState<'patient' | 'doctor' | 'pharmaceutical'>('patient');
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    password: '',
    license: ''
  });

  const translations = {
    en: {
      title: 'Welcome to Seva Setu',
      patient: 'Patient',
      doctor: 'Doctor',
      login: 'Login',
      signup: 'Sign Up',
      phone: 'Phone Number',
      password: 'Password',
      name: 'Full Name',
      license: 'Medical License',
      phonePlaceholder: '+91 9876543210',
      passwordPlaceholder: 'Enter password',
      namePlaceholder: 'Enter your full name',
      licensePlaceholder: 'Enter license number',
      loginButton: 'Login',
      signupButton: 'Create Account',
      switchToSignup: "Don't have an account? Sign Up",
      switchToLogin: "Already have an account? Login",
      patientDescription: 'Access healthcare services',
      doctorDescription: 'Provide medical consultation',
      pharmaceutical: 'Pharmaceutical',
      pharmaceuticalDescription: 'Manage medicine inventory and orders'
    },
    hi: {
      title: 'Seva Setu में आपका स्वागत है',
      patient: 'मरीज़',
      doctor: 'डॉक्टर',
      login: 'लॉगिन',
      signup: 'साइन अप',
      phone: 'फ़ोन नंबर',
      password: 'पासवर्ड',
      name: 'पूरा नाम',
      license: 'मेडिकल लाइसेंस',
      phonePlaceholder: '+91 9876543210',
      passwordPlaceholder: 'पासवर्ड डालें',
      namePlaceholder: 'अपना पूरा नाम डालें',
      licensePlaceholder: 'लाइसेंस नंबर डालें',
      loginButton: 'लॉगिन करें',
      signupButton: 'खाता बनाएं',
      switchToSignup: 'खाता नहीं है? साइन अप करें',
      switchToLogin: 'पहले से खाता है? लॉगिन करें',
      patientDescription: 'स्वास्थ्य सेवाओं का उपयोग करें',
      doctorDescription: 'चिकित्सा सलाह प्रदान करें',
      pharmaceutical: 'फार्मास्युटिकल',
      pharmaceuticalDescription: 'दवा इन्वेंटरी और ऑर्डर प्रबंधित करें'
    },
    pa: {
      title: 'Seva Setu ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
      patient: 'ਮਰੀਜ਼',
      doctor: 'ਡਾਕਟਰ',
      login: 'ਲਾਗਇਨ',
      signup: 'ਸਾਈਨ ਅੱਪ',
      phone: 'ਫ਼ੋਨ ਨੰਬਰ',
      password: 'ਪਾਸਵਰਡ',
      name: 'ਪੂਰਾ ਨਾਮ',
      license: 'ਮੈਡੀਕਲ ਲਾਇਸੈਂਸ',
      phonePlaceholder: '+91 9876543210',
      passwordPlaceholder: 'ਪਾਸਵਰਡ ਦਾਖਲ ਕਰੋ',
      namePlaceholder: 'ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਾਖਲ ਕਰੋ',
      licensePlaceholder: 'ਲਾਇਸੈਂਸ ਨੰਬਰ ਦਾਖਲ ਕਰੋ',
      loginButton: 'ਲਾਗਇਨ ਕਰੋ',
      signupButton: 'ਖਾਤਾ ਬਣਾਓ',
      switchToSignup: 'ਖਾਤਾ ਨਹੀਂ ਹੈ? ਸਾਈਨ ਅੱਪ ਕਰੋ',
      switchToLogin: 'ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ? ਲਾਗਇਨ ਕਰੋ',
      patientDescription: 'ਸਿਹਤ ਸੇਵਾਵਾਂ ਦਾ ਇਸਤੇਮਾਲ ਕਰੋ',
      doctorDescription: 'ਮੈਡੀਕਲ ਸਲਾਹ ਦਿਓ',
      pharmaceutical: 'ਫਾਰਮਾਸਿਊਟੀਕਲ',
      pharmaceuticalDescription: 'ਦਵਾਈ ਦੀ ਸੂਚੀ ਅਤੇ ਆਰਡਰ ਪ੍ਰਬੰਧਿਤ ਕਰੋ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleSubmit = async (userType: 'patient' | 'doctor' | 'pharmaceutical') => {
    // Basic validation
    if (!formData.phone || !formData.password || (isSignup && !formData.name)) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isSignup && userType === 'doctor' && !formData.license) {
      toast.error('Medical license is required for doctors');
      return;
    }

    // For pharmaceutical users, if signing up, no special license is needed for now, but could be added.
    if (isSignup && userType === 'pharmaceutical' && !formData.license) {
      toast.error('Pharmaceutical license is required for pharmaceutical users');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(isSignup ? 'Account created successfully!' : 'Welcome back!');
      onLogin(userType);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-green-400 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 p-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="mb-6 -ml-2 hover:bg-white/50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                >
                  <Shield className="w-8 h-8 text-white" />
                </motion.div>
                <CardTitle className="text-2xl text-primary">{t.title}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {isSignup ? 'Create your account' : 'Sign in to continue'}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'patient' | 'doctor' | 'pharmaceutical')}>
                  <TabsList className="grid w-full grid-cols-3 h-16 p-1 bg-gray-100">
                    <TabsTrigger 
                      value="patient" 
                      className="flex flex-col gap-1 h-14 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <User className="w-5 h-5" />
                      <span className="text-sm font-medium">{t.patient}</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="doctor" 
                      className="flex flex-col gap-1 h-14 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <Stethoscope className="w-5 h-5" />
                      <span className="text-sm font-medium">{t.doctor}</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="pharmaceutical" 
                      className="flex flex-col gap-1 h-14 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                    >
                      <Pill className="w-5 h-5" />
                      <span className="text-sm font-medium">{t.pharmaceutical}</span>
                    </TabsTrigger>
                  </TabsList>

                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="patient" className="space-y-4 mt-6">
                      <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-sm text-green-700 font-medium">{t.patientDescription}</p>
                      </div>
                      <LoginForm 
                        isSignup={isSignup} 
                        userType="patient" 
                        t={t} 
                        onSubmit={() => handleSubmit('patient')}
                        formData={formData}
                        setFormData={setFormData}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        isLoading={isLoading}
                      />
                    </TabsContent>

                    <TabsContent value="doctor" className="space-y-4 mt-6">
                      <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-700 font-medium">{t.doctorDescription}</p>
                      </div>
                      <LoginForm 
                        isSignup={isSignup} 
                        userType="doctor" 
                        t={t} 
                        onSubmit={() => handleSubmit('doctor')}
                        formData={formData}
                        setFormData={setFormData}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        isLoading={isLoading}
                      />
                    </TabsContent>

                    <TabsContent value="pharmaceutical" className="space-y-4 mt-6">
                      <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <p className="text-sm text-purple-700 font-medium">{t.pharmaceuticalDescription}</p>
                      </div>
                      <LoginForm 
                        isSignup={isSignup} 
                        userType="pharmaceutical" 
                        t={t} 
                        onSubmit={() => handleSubmit('pharmaceutical')}
                        formData={formData}
                        setFormData={setFormData}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        isLoading={isLoading}
                      />
                    </TabsContent>
                  </motion.div>
                </Tabs>

                <div className="text-center">
                  <Button
                    variant="link"
                    onClick={() => setIsSignup(!isSignup)}
                    className="text-sm hover:text-primary transition-colors"
                    disabled={isLoading}
                  >
                    {isSignup ? t.switchToLogin : t.switchToSignup}
                  </Button>
                </div>

                {/* Security Notice */}
                <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <p className="text-xs text-gray-600">
                    Your data is encrypted and secure
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function LoginForm({
  isSignup,
  userType,
  t,
  onSubmit,
  formData,
  setFormData,
  showPassword,
  setShowPassword,
  isLoading
}: {
  isSignup: boolean;
  userType: 'patient' | 'doctor' | 'pharmaceutical';
  t: any;
  onSubmit: () => void;
  formData: any;
  setFormData: (data: any) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  isLoading: boolean;
}) {
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-5">
      {isSignup && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="name" className="text-sm font-medium">{t.name}</Label>
          <Input
            id="name"
            placeholder={t.namePlaceholder}
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            required
            className="h-12 border-2 focus:border-primary transition-colors"
          />
        </motion.div>
      )}

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium">
          <Phone className="w-4 h-4 text-primary" />
          {t.phone}
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder={t.phonePlaceholder}
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required
          className="h-12 border-2 focus:border-primary transition-colors"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="flex items-center gap-2 text-sm font-medium">
          <Lock className="w-4 h-4 text-primary" />
          {t.password}
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder={t.passwordPlaceholder}
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            required
            className="h-12 border-2 focus:border-primary transition-colors pr-12"
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </Button>
        </div>
      </div>

      {isSignup && (userType === 'doctor' || userType === 'pharmaceutical') && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-2"
        >
          <Label htmlFor="license" className="text-sm font-medium">{t.license}</Label>
          <Input
            id="license"
            placeholder={t.licensePlaceholder}
            value={formData.license}
            onChange={(e) => handleInputChange('license', e.target.value)}
            required
            className="h-12 border-2 focus:border-primary transition-colors"
          />
        </motion.div>
      )}

      <motion.div
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <Button 
          type="submit" 
          className="w-full h-12 text-lg font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              {isSignup ? 'Creating Account...' : 'Signing In...'}
            </>
          ) : (
            isSignup ? t.signupButton : t.loginButton
          )}
        </Button>
      </motion.div>
    </form>
  );
}