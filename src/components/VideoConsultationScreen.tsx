import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { 
  Video, 
  VideoOff, 
  Mic, 
  MicOff, 
  Phone, 
  MessageCircle,
  FileText,
  Send,
  ArrowLeft,
  Settings
} from "lucide-react";

interface VideoConsultationScreenProps {
  onBack: () => void;
  userType: 'patient' | 'doctor';
  language: string;
}

export function VideoConsultationScreen({ onBack, userType, language }: VideoConsultationScreenProps) {
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [chatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [prescription, setPrescription] = useState('');

  const translations = {
    en: {
      videoConsultation: 'Video Consultation',
      patient: 'Raj Kumar',
      doctor: 'Dr. Priya Sharma',
      connected: 'Connected',
      duration: 'Duration: 05:32',
      chat: 'Chat',
      prescription: 'Prescription',
      sendMessage: 'Send Message',
      typeMessage: 'Type your message...',
      prescriptionNotes: 'Prescription Notes',
      writeNotes: 'Write prescription notes...',
      savePrescription: 'Save Prescription',
      endCall: 'End Call',
      patientSymptoms: 'Patient Symptoms:',
      symptoms: 'Fever, headache, body ache since 2 days',
      vitals: 'Vitals',
      temperature: 'Temperature: 101°F',
      bloodPressure: 'BP: 120/80 mmHg',
      heartRate: 'Heart Rate: 85 bpm'
    },
    hi: {
      videoConsultation: 'वीडियो परामर्श',
      patient: 'राज कुमार',
      doctor: 'डॉ. प्रिया शर्मा',
      connected: 'जुड़ा हुआ',
      duration: 'अवधि: 05:32',
      chat: 'चैट',
      prescription: 'नुस्खा',
      sendMessage: 'संदेश भेजें',
      typeMessage: 'अपना संदेश टाइप करें...',
      prescriptionNotes: 'नुस्खे की टिप्पणियां',
      writeNotes: 'नुस्खे की टिप्पणियां लिखें...',
      savePrescription: 'नुस्खा सेव करें',
      endCall: 'कॉल समाप्त करें',
      patientSymptoms: 'मरीज़ के लक्षण:',
      symptoms: '2 दिन से बुखार, सिरदर्द, शरीर में दर्द',
      vitals: 'जीवन संकेत',
      temperature: 'तापमान: 101°F',
      bloodPressure: 'BP: 120/80 mmHg',
      heartRate: 'हृदय गति: 85 bpm'
    },
    pa: {
      videoConsultation: 'ਵੀਡੀਓ ਸਲਾਹ',
      patient: 'ਰਾਜ ਕੁਮਾਰ',
      doctor: 'ਡਾ. ਪ੍ਰਿਯਾ ਸ਼ਰਮਾ',
      connected: 'ਜੁੜਿਆ ਹੋਇਆ',
      duration: 'ਮਿਆਦ: 05:32',
      chat: 'ਚੈਟ',
      prescription: 'ਨੁਸਖਾ',
      sendMessage: 'ਸੰਦੇਸ਼ ਭੇਜੋ',
      typeMessage: 'ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...',
      prescriptionNotes: 'ਨੁਸਖੇ ਦੀਆਂ ਟਿੱਪਣੀਆਂ',
      writeNotes: 'ਨੁਸਖੇ ਦੀਆਂ ਟਿੱਪਣੀਆਂ ਲਿਖੋ...',
      savePrescription: 'ਨੁਸਖਾ ਸੇਵ ਕਰੋ',
      endCall: 'ਕਾਲ ਖਤਮ ਕਰੋ',
      patientSymptoms: 'ਮਰੀਜ਼ ਦੇ ਲੱਛਣ:',
      symptoms: '2 ਦਿਨ ਤੋਂ ਬੁਖਾਰ, ਸਿਰ ਦਰਦ, ਸਰੀਰ ਵਿੱਚ ਦਰਦ',
      vitals: 'ਜੀਵਨ ਸੰਕੇਤ',
      temperature: 'ਤਾਪਮਾਨ: 101°F',
      bloodPressure: 'BP: 120/80 mmHg',
      heartRate: 'ਦਿਲ ਦੀ ਗਤੀ: 85 bpm'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const chatMessages = [
    { sender: 'doctor', message: 'Hello! How are you feeling today?', time: '10:32' },
    { sender: 'patient', message: 'I have been having fever and headache since 2 days', time: '10:33' },
    { sender: 'doctor', message: 'I see. Any other symptoms?', time: '10:34' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gray-900 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="text-white">
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="font-semibold">{t.videoConsultation}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Badge variant="secondary" className="bg-green-600 text-white">
                  {t.connected}
                </Badge>
                <span>{t.duration}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-white">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-80px)]">
        {/* Video Area */}
        <div className="flex-1 relative bg-gray-900">
          {/* Main Video (Doctor's view) */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center relative">
            <div className="text-center text-white">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-white text-4xl">
                  {userType === 'patient' ? 'DS' : 'RK'}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">
                {userType === 'patient' ? t.doctor : t.patient}
              </h2>
            </div>

            {/* Self Video (Picture-in-Picture) */}
            <div className="absolute top-4 right-4 w-32 h-24 bg-gray-700 rounded-lg border-2 border-white flex items-center justify-center">
              <Avatar className="w-16 h-16">
                <AvatarFallback className="bg-secondary text-white">
                  {userType === 'patient' ? 'RK' : 'DS'}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-4 bg-gray-800 rounded-full p-3">
              <Button
                variant={audioEnabled ? "secondary" : "destructive"}
                size="lg"
                className="rounded-full w-12 h-12"
                onClick={() => setAudioEnabled(!audioEnabled)}
              >
                {audioEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
              </Button>
              
              <Button
                variant={videoEnabled ? "secondary" : "destructive"}
                size="lg"
                className="rounded-full w-12 h-12"
                onClick={() => setVideoEnabled(!videoEnabled)}
              >
                {videoEnabled ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-12 h-12"
                onClick={() => setChatVisible(!chatVisible)}
              >
                <MessageCircle className="w-6 h-6" />
              </Button>

              {userType === 'doctor' && (
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full w-12 h-12"
                  onClick={() => setChatVisible(true)}
                >
                  <FileText className="w-6 h-6" />
                </Button>
              )}

              <Button
                variant="destructive"
                size="lg"
                className="rounded-full w-12 h-12"
                onClick={onBack}
              >
                <Phone className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        {chatVisible && (
          <div className="w-full lg:w-80 bg-white border-l">
            <div className="h-full flex flex-col">
              {/* Panel Header */}
              <div className="p-4 border-b">
                <div className="flex gap-2">
                  <Button
                    variant={userType === 'patient' ? "default" : "outline"}
                    size="sm"
                    className="flex-1"
                  >
                    {t.chat}
                  </Button>
                  {userType === 'doctor' && (
                    <Button variant="outline" size="sm" className="flex-1">
                      {t.prescription}
                    </Button>
                  )}
                </div>
              </div>

              {/* Patient Info (for doctors) */}
              {userType === 'doctor' && (
                <div className="p-4 border-b bg-gray-50">
                  <h3 className="font-semibold mb-2">{t.patientSymptoms}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{t.symptoms}</p>
                  
                  <h4 className="font-semibold mb-2">{t.vitals}</h4>
                  <div className="text-sm space-y-1">
                    <div>{t.temperature}</div>
                    <div>{t.bloodPressure}</div>
                    <div>{t.heartRate}</div>
                  </div>
                </div>
              )}

              {/* Chat Area */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-3">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === (userType === 'patient' ? 'patient' : 'doctor') ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          msg.sender === (userType === 'patient' ? 'patient' : 'doctor')
                            ? 'bg-primary text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder={t.typeMessage}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="sm">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Prescription Area (for doctors) */}
              {userType === 'doctor' && (
                <div className="p-4 border-t bg-gray-50">
                  <h3 className="font-semibold mb-2">{t.prescriptionNotes}</h3>
                  <Textarea
                    placeholder={t.writeNotes}
                    value={prescription}
                    onChange={(e) => setPrescription(e.target.value)}
                    className="mb-3"
                    rows={4}
                  />
                  <Button className="w-full">
                    {t.savePrescription}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}