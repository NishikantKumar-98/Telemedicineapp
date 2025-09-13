import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  Video,
  FileText,
  Clock,
  User,
  Phone,
  Settings,
  LogOut,
  Calendar,
  Activity,
  CheckCircle,
  TrendingUp, 
  TrendingDown,
  MessageSquare,
  Pill
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

interface DoctorDashboardProps {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  language: string;
}

export function DoctorDashboard({ onNavigate, onLogout, language }: DoctorDashboardProps) {
  const translations = {
    en: {
      welcome: 'Good morning',
      doctorName: 'Dr. Priya Sharma',
      todaysSchedule: "Today's Schedule",
      upcomingPatients: 'Upcoming Patients',
      patientRecords: 'Patient Records',
      quickStats: 'Quick Stats',
      startConsultation: 'Start Video Call',
      viewRecords: 'View Records',
      viewProfile: 'View Profile',
      totalPatients: 'Total Patients Today',
      completedConsultations: 'Completed',
      pendingConsultations: 'Pending',
      dailyPatientIncrease: 'Patients Increased Today',
      consultationCompletionRate: 'Completion Rate',
      patientWaiting: 'Patient waiting',
      mins: 'mins',
      rajKumar: 'Raj Kumar',
      fever: 'Fever, Headache',
      appointed: 'Appointed 10:00 AM',
      sunita: 'Sunita Devi',
      diabetes: 'Diabetes Follow-up',
      followUp: 'Follow-up 10:30 AM',
      amit: 'Amit Singh',
      checkup: 'General Check-up',
      scheduled: 'Scheduled 11:00 AM',
      noPatients: 'No patients scheduled',
      confirm: 'Confirm',
      appointmentConfirmed: 'Appointment confirmed successfully!',
      approved: 'Approved',
      specialty: 'General Physician',
      onlineStatus: 'Online',
      chat: 'Chat',
      startChat: 'Start a chat with a patient or colleague',
      settings: 'Settings',
      logout: 'Logout',
      ePrescription: 'E-Prescription',
      createNewPrescription: 'Create a new prescription'
    },
    hi: {
      welcome: 'सुप्रभात',
      doctorName: 'डॉ. प्रिया शर्मा',
      todaysSchedule: 'आज का कार्यक्रम',
      upcomingPatients: 'आगामी मरीज़',
      patientRecords: 'मरीज़ों के रिकॉर्ड',
      quickStats: 'त्वरित आंकड़े',
      startConsultation: 'वीडियो कॉल शुरू करें',
      viewRecords: 'रिकॉर्ड देखें',
      viewProfile: 'प्रोफ़ाइल देखें',
      totalPatients: 'आज कुल मरीज़',
      completedConsultations: 'पूर्ण',
      pendingConsultations: 'बकाया',
      dailyPatientIncrease: 'आज मरीज बढ़े',
      consultationCompletionRate: 'पूर्णता दर',
      patientWaiting: 'मरीज़ प्रतीक्षा में',
      mins: 'मिनट',
      rajKumar: 'राज कुमार',
      fever: 'बुखार, सिरदर्द',
      appointed: 'नियुक्त 10:00 AM',
      sunita: 'सुनीता देवी',
      diabetes: 'मधुमेह फॉलो-अप',
      followUp: 'फॉलो-अप 10:30 AM',
      amit: 'अमित सिंह',
      checkup: 'सामान्य जांच',
      scheduled: 'निर्धारित 11:00 AM',
      noPatients: 'कोई मरीज़ निर्धारित नहीं',
      confirm: 'पुष्टि करें',
      appointmentConfirmed: 'अपॉइंटमेंट सफलतापूर्वक पुष्टि की गई!',
      approved: 'स्वीकृत',
      specialty: 'सामान्य चिकित्सक',
      onlineStatus: 'ऑनलाइन',
      chat: 'चैट',
      startChat: 'मरीज़ या सहकर्मी से चैट शुरू करें',
      settings: 'सेटिंग्स',
      logout: 'लॉगआउट',
      ePrescription: 'ई-प्रिस्क्रिप्शन',
      createNewPrescription: 'नया प्रिस्क्रिप्शन बनाएं'
    },
    pa: {
      welcome: 'ਸ਼ੁਭ ਸਵੇਰ',
      doctorName: 'ਡਾ. ਪ੍ਰਿਯਾ ਸ਼ਰਮਾ',
      todaysSchedule: 'ਅੱਜ ਦਾ ਕਾਰਯਕ੍ਰਮ',
      upcomingPatients: 'ਆਉਣ ਵਾਲੇ ਮਰੀਜ਼',
      patientRecords: 'ਮਰੀਜ਼ਾਂ ਦੇ ਰਿਕਾਰਡ',
      quickStats: 'ਤੁਰੰਤ ਅੰਕੜੇ',
      startConsultation: 'ਵੀਡੀਓ ਕਾਲ ਸ਼ੁਰੂ ਕਰੋ',
      viewRecords: 'ਰਿਕਾਰਡ ਦੇਖੋ',
      viewProfile: 'ਪ੍ਰੋਫਾਇਲ ਦੇਖੋ',
      totalPatients: 'ਅੱਜ ਕੁੱਲ ਮਰੀਜ਼',
      completedConsultations: 'ਪੂਰੇ ਹੋਏ',
      pendingConsultations: 'ਬਾਕੀ',
      dailyPatientIncrease: 'ਅੱਜ ਮਰੀਜ਼ ਵਧੇ',
      consultationCompletionRate: 'ਸੰਪੂਰਨਤਾ ਦਰ',
      patientWaiting: 'ਮਰੀਜ਼ ਉਡੀਕ ਵਿੱਚ',
      mins: 'ਮਿੰਟ',
      rajKumar: 'ਰਾਜ ਕੁਮਾਰ',
      fever: 'ਬੁਖਾਰ, ਸਿਰ ਦਰਦ',
      appointed: 'ਨਿਯੁਕਤ 10:00 AM',
      sunita: 'ਸੁਨੀਤਾ ਦੇਵੀ',
      diabetes: 'ਸ਼ੂਗਰ ਫਾਲੋ-ਅੱਪ',
      followUp: 'ਫਾਲੋ-ਅੱਪ 10:30 AM',
      amit: 'ਅਮਿਤ ਸਿੰਘ',
      checkup: 'ਆਮ ਜਾਂਚ',
      scheduled: 'ਨਿਰਧਾਰਿਤ 11:00 AM',
      noPatients: 'ਕੋਈ ਮਰੀਜ਼ ਨਿਰਧਾਰਿਤ ਨਹੀਂ',
      confirm: 'ਪੁਸ਼ਟੀ ਕਰੋ',
      appointmentConfirmed: 'ਅਪਾਇੰਟਮੈਂਟ ਦੀ ਸਫਲਤਾਪੂਰਵਕ ਪੁਸ਼ਟੀ ਹੋ ​​ਗਈ ਹੈ!',
      approved: 'ਪ੍ਰਵਾਨਿਤ',
      specialty: 'ਜਨਰਲ ਫਿਜ਼ੀਸ਼ੀਅਨ',
      onlineStatus: 'ਆਨਲਾਈਨ',
      chat: 'ਚੈਟ',
      startChat: 'ਮਰੀਜ਼ ਜਾਂ ਸਹਿਕਰਮੀ ਨਾਲ ਚੈਟ ਸ਼ੁਰੂ ਕਰੋ',
      settings: 'ਸੈਟਿੰtਾਂ',
      logout: 'ਲਾਗਆਉਟ',
      ePrescription: 'ਈ-ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ',
      createNewPrescription: 'ਨਵੀਂ ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਬਨਾਉਣ'
    }
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const initialPatients = [
    {
      id: 1,
      name: t.rajKumar,
      condition: t.fever,
      time: t.appointed,
      status: 'waiting',
      waitTime: 5
    },
    {
      id: 2,
      name: t.sunita,
      condition: t.diabetes,
      time: t.followUp,
      status: 'scheduled',
      waitTime: 0
    },
    {
      id: 3,
      name: t.amit,
      condition: t.checkup,
      time: t.scheduled,
      status: 'scheduled',
      waitTime: 0
    }
  ];

  const [patients, setPatients] = useState(initialPatients);

  const handleConfirmAppointment = (id: number) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === id ? { ...patient, status: 'approved' } : patient
      )
    );
    toast.success(t.appointmentConfirmed);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
              <AvatarFallback className="bg-gradient-to-br from-primary to-blue-600 text-white text-lg font-semibold">
                PS
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold text-primary">{t.doctorName}</h1>
              <p className="text-lg text-muted-foreground">{t.specialty}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 font-medium">{t.onlineStatus}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Stats */}
        <section>
          <h2 className="text-lg font-semibold mb-4">{t.quickStats}</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-primary">8</div>
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" /> +10%
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{t.totalPatients}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-green-600">5</div>
                  <div className="flex items-center text-green-500 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" /> 85%
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{t.completedConsultations}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="text-2xl font-bold text-orange-600">3</div>
                  <div className="flex items-center text-red-500 text-sm">
                    <TrendingDown className="w-4 h-4 mr-1" /> -5%
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{t.pendingConsultations}</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Today's Schedule */}
        <section>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">{t.todaysSchedule}</CardTitle>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {patients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-white">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.condition}</p>
                      <p className="text-xs text-muted-foreground">{patient.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {patient.status === 'waiting' && (
                      <Badge variant="destructive" className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {patient.waitTime} {t.mins}
                      </Badge>
                    )}
                    {patient.status === 'scheduled' && (
                      <Badge variant="outline">{t.scheduled}</Badge>
                    )}
                    {patient.status === 'approved' && (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200">{t.approved}</Badge>
                    )}
                    <div className="flex gap-1">
                      <Button size="sm" variant="outline" onClick={() => onNavigate('patient-records')}>
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button size="sm" onClick={() => onNavigate('video-consultation')}>
                        <Video className="w-4 h-4" />
                      </Button>
                      {patient.status === 'scheduled' && (
                        <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={() => handleConfirmAppointment(patient.id)}>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {t.confirm}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <div className="grid grid-cols-1 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('video-consultation')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mr-4">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.startConsultation}</h3>
                  <p className="text-sm text-muted-foreground">Start a video consultation with waiting patients</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('patient-records')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.patientRecords}</h3>
                  <p className="text-sm text-muted-foreground">Access and manage patient medical records</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('e-prescription')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mr-4">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.ePrescription}</h3>
                  <p className="text-sm text-muted-foreground">{t.createNewPrescription}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => onNavigate('chat')}>
              <CardContent className="flex items-center p-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{t.chat}</h3>
                  <p className="text-sm text-muted-foreground">{t.startChat}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}