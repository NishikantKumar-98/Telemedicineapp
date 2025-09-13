import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Alert, AlertDescription } from "./ui/alert";
import { 
  ArrowLeft, 
  Brain, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Stethoscope,
  FileText,
  Phone
} from "lucide-react";

interface AISymptomCheckerScreenProps {
  onBack: () => void;
  language: string;
}

export function AISymptomCheckerScreen({ onBack, language }: AISymptomCheckerScreenProps) {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const translations = {
    en: {
      title: 'AI Symptom Checker',
      subtitle: 'Get instant health guidance',
      enterSymptoms: 'Describe your symptoms',
      symptomsPlaceholder: 'Please describe your symptoms in detail. For example: fever, headache, body ache for 2 days...',
      analyzeButton: 'Analyze Symptoms',
      analyzing: 'Analyzing your symptoms...',
      disclaimer: 'Important Disclaimer',
      disclaimerText: 'This AI symptom checker is for informational purposes only and should not replace professional medical advice. Always consult with a healthcare provider for proper diagnosis and treatment.',
      possibleConditions: 'Possible Conditions',
      recommendedActions: 'Recommended Actions',
      urgencyLevel: 'Urgency Level',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      consultDoctor: 'Consult a Doctor',
      bookAppointment: 'Book Video Consultation',
      emergency: 'Seek Emergency Care',
      selfCare: 'Self Care at Home',
      monitorSymptoms: 'Monitor Symptoms',
      commonCold: 'Common Cold',
      viralFever: 'Viral Fever',
      allergicReaction: 'Allergic Reaction',
      gastritis: 'Gastritis',
      restAndHydration: 'Rest and stay hydrated',
      overCounterMeds: 'Over-the-counter pain relievers may help',
      avoidTriggers: 'Avoid known allergens or triggers',
      consultIfWorsens: 'Consult doctor if symptoms worsen',
      seekImmediateCare: 'Seek immediate medical care',
      exampleSymptoms: 'Example symptoms you can check:',
      examples: [
        'Fever and headache',
        'Cough and sore throat',
        'Stomach ache and nausea',
        'Skin rash and itching',
        'Chest pain and shortness of breath'
      ]
    },
    hi: {
      title: 'AI लक्षण जांचकर्ता',
      subtitle: 'तुरंत स्वास्थ्य मार्गदर्शन पाएं',
      enterSymptoms: 'अपने लक्षण बताएं',
      symptomsPlaceholder: 'कृपया अपने लक्षणों का विस्तार से वर्णन करें। उदाहरण: 2 दिन से बुखार, सिरदर्द, शरीर में दर्द...',
      analyzeButton: 'लक्षणों का विश्लेषण करें',
      analyzing: 'आपके लक्षणों का विश्लेषण हो रहा है...',
      disclaimer: 'महत्वपूर्ण अस्वीकरण',
      disclaimerText: 'यह AI लक्षण जांचकर्ता केवल जानकारी के उद्देश्य से है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है। उचित निदान और उपचार के लिए हमेशा स्वास्थ्य सेवा प्रदाता से सलाह लें।',
      possibleConditions: 'संभावित स्थितियां',
      recommendedActions: 'सुझावित कार्य',
      urgencyLevel: 'तत्कालता स्तर',
      high: 'उच्च',
      medium: 'मध्यम',
      low: 'कम',
      consultDoctor: 'डॉक्टर से सलाह लें',
      bookAppointment: 'वीडियो परामर्श बुक करें',
      emergency: 'आपातकालीन देखभाल लें',
      selfCare: 'घर पर स्व-देखभाल',
      monitorSymptoms: 'लक्षणों पर नजर रखें',
      commonCold: 'सामान्य सर्दी',
      viralFever: 'वायरल बुखार',
      allergicReaction: 'एलर्जी रिएक्शन',
      gastritis: 'गैस्ट्राइटिस',
      restAndHydration: 'आराम करें और पानी पिएं',
      overCounterMeds: 'बिना पर्चे की दर्द निवारक दवा ले सकते हैं',
      avoidTriggers: 'ज्ञात एलर्जी या ट्रिगर से बचें',
      consultIfWorsens: 'लक्षण बिगड़ने पर डॉक्टर से मिलें',
      seekImmediateCare: 'तुरंत चिकित्सा सहायता लें',
      exampleSymptoms: 'आप जांच सकते हैं उदाहरण लक्षण:',
      examples: [
        'बुखार और सिरदर्द',
        'खांसी और गले में खराश',
        'पेट दर्द और मतली',
        'त्वचा पर रैश और खुजली',
        'सीने में दर्द और सांस लेने में कठिनाई'
      ]
    },
    pa: {
      title: 'AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ',
      subtitle: 'ਤੁਰੰਤ ਸਿਹਤ ਮਾਰਗਦਰਸ਼ਨ ਪਾਓ',
      enterSymptoms: 'ਆਪਣੇ ਲੱਛਣ ਦੱਸੋ',
      symptomsPlaceholder: 'ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸਤਾਰ ਨਾਲ ਵਰਣਨ ਕਰੋ। ਉਦਾਹਰਣ: 2 ਦਿਨ ਤੋਂ ਬੁਖਾਰ, ਸਿਰ ਦਰਦ, ਸਰੀਰ ਵਿੱਚ ਦਰਦ...',
      analyzeButton: 'ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ',
      analyzing: 'ਤੁਹਾਡੇ ਲੱਛਣਾਂ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਹੋ ਰਿਹਾ ਹੈ...',
      disclaimer: 'ਮਹੱਤਵਪੂਰਨ ਇਨਕਾਰ',
      disclaimerText: 'ਇਹ AI ਲੱਛਣ ਜਾਂਚਕਰਤਾ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਦੇ ਉਦੇਸ਼ ਲਈ ਹੈ ਅਤੇ ਪੇਸ਼ੇਵਰ ਮੈਡੀਕਲ ਸਲਾਹ ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ। ਸਹੀ ਨਿਦਾਨ ਅਤੇ ਇਲਾਜ ਲਈ ਹਮੇਸ਼ਾ ਸਿਹਤ ਸੇਵਾ ਪ੍ਰਦਾਤਾ ਨਾਲ ਸਲਾਹ ਕਰੋ।',
      possibleConditions: 'ਸੰਭਾਵਿਤ ਸਥਿਤੀਆਂ',
      recommendedActions: 'ਸੁਝਾਏ ਗਏ ਕੰਮ',
      urgencyLevel: 'ਤੁਰੰਤਤਾ ਦਾ ਪੱਧਰ',
      high: 'ਉੱਚਾ',
      medium: 'ਮੱਧਮ',
      low: 'ਘੱਟ',
      consultDoctor: 'ਡਾਕਟਰ ਨਾਲ ਸਲਾਹ ਕਰੋ',
      bookAppointment: 'ਵੀਡੀਓ ਸਲਾਹ ਬੁੱਕ ਕਰੋ',
      emergency: 'ਐਮਰਜੈਂਸੀ ਦੇਖਭਾਲ ਲਓ',
      selfCare: 'ਘਰ ਵਿੱਚ ਸਵੈ-ਦੇਖਭਾਲ',
      monitorSymptoms: 'ਲੱਛਣਾਂ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ',
      commonCold: 'ਆਮ ਜ਼ੁਕਾਮ',
      viralFever: 'ਵਾਇਰਲ ਬੁਖਾਰ',
      allergicReaction: 'ਐਲਰਜੀ ਪ੍ਰਤੀਕਰਿਆ',
      gastritis: 'ਗੈਸਟ੍ਰਾਇਟਿਸ',
      restAndHydration: 'ਆਰਾਮ ਕਰੋ ਅਤੇ ਪਾਣੀ ਪੀਓ',
      overCounterMeds: 'ਬਿਨਾਂ ਪਰਚੇ ਦੀ ਦਰਦ ਦੀ ਦਵਾਈ ਲੈ ਸਕਦੇ ਹੋ',
      avoidTriggers: 'ਜਾਣੀਆਂ ਪਛਾਣੀਆਂ ਐਲਰਜੀ ਤੋਂ ਬਚੋ',
      consultIfWorsens: 'ਲੱਛਣ ਵਿਗੜਨ ਤੇ ਡਾਕਟਰ ਨਾਲ ਮਿਲੋ',
      seekImmediateCare: 'ਤੁਰੰਤ ਮੈਡੀਕਲ ਸਹਾਇਤਾ ਲਓ',
      exampleSymptoms: 'ਤੁਸੀਂ ਜਾਂਚ ਸਕਦੇ ਹੋ ਉਦਾਹਰਣ ਲੱਛਣ:',
      examples: [
        'ਬੁਖਾਰ ਅਤੇ ਸਿਰ ਦਰਦ',
        'ਖੰਘ ਅਤੇ ਗਲੇ ਵਿੱਚ ਖਰਾਸ਼',
        'ਪੇਟ ਦਰਦ ਅਤੇ ਮਤਲੀ',
        'ਚਮੜੀ ਤੇ ਰੈਸ਼ ਅਤੇ ਖੁਜਲੀ',
        'ਛਾਤੀ ਵਿੱਚ ਦਰਦ ਅਤੇ ਸਾਹ ਲੈਣ ਵਿੱਚ ਮੁਸ਼ਕਿਲ'
      ]
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis with mock data
    setTimeout(() => {
      const mockAnalysis = {
        urgencyLevel: 'medium',
        possibleConditions: [
          { name: t.viralFever, probability: 75 },
          { name: t.commonCold, probability: 60 },
          { name: t.allergicReaction, probability: 25 }
        ],
        recommendations: [
          t.restAndHydration,
          t.overCounterMeds,
          t.monitorSymptoms,
          t.consultIfWorsens
        ],
        shouldSeeDoctor: true,
        immediateAttention: false
      };
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getUrgencyColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getUrgencyIcon = (level: string) => {
    switch (level) {
      case 'high': return AlertTriangle;
      case 'medium': return Clock;
      case 'low': return CheckCircle;
      default: return Clock;
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
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            <div>
              <h1 className="text-xl font-semibold text-primary">{t.title}</h1>
              <p className="text-sm text-muted-foreground">{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Disclaimer */}
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription className="text-sm">
            <strong>{t.disclaimer}:</strong> {t.disclaimerText}
          </AlertDescription>
        </Alert>

        {/* Symptom Input */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{t.enterSymptoms}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder={t.symptomsPlaceholder}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              rows={6}
              className="min-h-[120px]"
            />
            <Button 
              onClick={handleAnalyze} 
              disabled={!symptoms.trim() || isAnalyzing}
              className="w-full h-12"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="w-5 h-5 mr-2 animate-pulse" />
                  {t.analyzing}
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-2" />
                  {t.analyzeButton}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Example Symptoms */}
        {!analysis && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">{t.exampleSymptoms}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {t.examples.map((example, index) => (
                  <div 
                    key={index}
                    className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => setSymptoms(example)}
                  >
                    <p className="text-sm">{example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-4">
            {/* Urgency Level */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {(() => {
                    const UrgencyIcon = getUrgencyIcon(analysis.urgencyLevel);
                    return <UrgencyIcon className="w-5 h-5" />;
                  })()}
                  {t.urgencyLevel}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${getUrgencyColor(analysis.urgencyLevel)}`}></div>
                  <Badge variant={analysis.urgencyLevel === 'high' ? 'destructive' : analysis.urgencyLevel === 'medium' ? 'secondary' : 'default'}>
                    {analysis.urgencyLevel === 'high' ? t.high : analysis.urgencyLevel === 'medium' ? t.medium : t.low}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Possible Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.possibleConditions}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analysis.possibleConditions.map((condition: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">{condition.name}</span>
                      <Badge variant="outline">{condition.probability}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t.recommendedActions}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {analysis.recommendations.map((recommendation: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              {analysis.immediateAttention ? (
                <Button variant="destructive" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  {t.emergency}
                </Button>
              ) : analysis.shouldSeeDoctor ? (
                <Button size="lg" className="w-full">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  {t.bookAppointment}
                </Button>
              ) : null}
              
              <Button variant="outline" size="lg" className="w-full">
                <FileText className="w-5 h-5 mr-2" />
                Save Analysis
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}