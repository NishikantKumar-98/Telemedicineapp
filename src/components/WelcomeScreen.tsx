import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Globe, Heart, Star, Users, Shield } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface WelcomeScreenProps {
  onLanguageSelect: (language: string) => void;
}

export function WelcomeScreen({ onLanguageSelect }: WelcomeScreenProps) {
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
  ];

  const features = [
    { icon: Users, text: "10,000+ patients served", subtext: "Trusted by communities" },
    { icon: Shield, text: "Secure & Private", subtext: "HIPAA compliant" },
    { icon: Star, text: "4.8/5 rating", subtext: "Highly rated by users" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638802180096-edcbe17c0903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGhlYWx0aGNhcmUlMjBpbmRpYSUyMHZpbGxhZ2V8ZW58MXx8fHwxNzU3NjkzOTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rural healthcare"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-blue-900/70 to-green-800/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Heart className="w-10 h-10 text-primary animate-pulse" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Seva Setu
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl text-green-100 mb-8"
          >
            Bringing Health to Every Village
          </motion.p>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center gap-8 flex-wrap mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
                className="text-center"
              >
                <feature.icon className="w-6 h-6 text-green-200 mx-auto mb-2" />
                <p className="text-sm font-medium text-white">{feature.text}</p>
                <p className="text-xs text-green-100">{feature.subtext}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Language Selection Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <CardTitle className="flex items-center justify-center gap-2 text-primary">
                <Globe className="w-6 h-6" />
                <span className="text-lg">Choose Your Language</span>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                भाषा चुनें / ਭਾਸ਼ਾ ਚੁਣੋ / Select Language
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {languages.map((language, index) => (
                <motion.div
                  key={language.code}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-16 border-2 hover:border-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-300 group"
                    onClick={() => onLanguageSelect(language.code)}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <span className="text-2xl">{language.flag}</span>
                      <div className="text-left flex-1">
                        <div className="font-semibold group-hover:text-primary transition-colors">
                          {language.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {language.nativeName}
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    </div>
                  </Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 text-center"
        >
          <div className="text-green-100 space-y-2">
            <p className="text-sm font-medium">Bringing Health to Every Village</p>
            <p className="text-sm">हर गांव तक स्वास्थ्य पहुंचाना</p>
            <p className="text-sm">ਹਰ ਪਿੰਡ ਤੱਕ ਸਿਹਤ ਪਹੁੰਚਾਉਣਾ</p>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <p className="text-xs text-green-200">Available 24/7</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}