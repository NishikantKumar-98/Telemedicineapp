import React, { useState } from 'react';
import { ArrowLeft, Heart, BookOpen, Utensils, Zap, Shield, Smile, Plus, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

interface HealthEducationScreenProps {
  onBack: () => void;
  language: string;
}

export function HealthEducationScreen({ onBack, language }: HealthEducationScreenProps) {
  const translations = {
    en: {
      title: 'Health Education',
      back: 'Back',
      topic1Title: 'Understanding Hypertension',
      topic1Desc: 'Learn about high blood pressure, its causes, symptoms, and management.',
      topic1Content: 'Hypertension, or high blood pressure, is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease. It can be caused by various factors including diet, stress, and genetics. Regular monitoring, a balanced diet, exercise, and medication as prescribed by a doctor are crucial for management.',
      topic2Title: 'Healthy Eating Habits',
      topic2Desc: 'Tips for a balanced diet and nutritional well-being.',
      topic2Content: 'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes, and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially produced trans-fats are essential for healthy living.',
      topic3Title: 'Importance of Vaccinations',
      topic3Desc: 'Why vaccines are vital for preventing diseases.',
      topic3Content: 'Vaccination is a simple, safe, and effective way of protecting people against harmful diseases before they come into contact with them. It uses your body\'s natural defenses to build resistance to specific infections and makes your immune system stronger. Vaccines train your immune system to create antibodies, just as it does when it\'s exposed to a disease. However, because vaccines contain only killed or weakened forms of germs, they do not cause the disease or put you at risk.',
      topic4Title: 'First Aid Basics',
      topic4Desc: 'Essential knowledge for emergencies.',
      topic4Content: 'First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury, with the goal of preserving life, preventing the condition from worsening, and promoting recovery. Basic first aid knowledge can be critical in situations like cuts, burns, sprains, or sudden illness. Knowing how to react calmly and effectively can make a significant difference.',
    },
    hi: {
      title: 'स्वास्थ्य शिक्षा',
      back: 'वापस',
      topic1Title: 'उच्च रक्तचाप को समझना',
      topic1Desc: 'उच्च रक्तचाप, इसके कारण, लक्षण और प्रबंधन के बारे में जानें।',
      topic1Content: 'उच्च रक्तचाप, या हाई ब्लड प्रेशर, एक सामान्य स्थिति है जिसमें आपकी धमनी की दीवारों के खिलाफ रक्त का दीर्घकालिक बल इतना अधिक होता है कि यह अंततः दिल की बीमारी वर्गीं स्वास्थ्य समस्याओं का कारण बन सकता है। यह खुराक, तनाअ, और जनेटिक्स समेत कई कारकों के कारण हो सकता है। नियमित निगरानी, संतुलित खुराक, कसरत, और डॉक्टर द्वारा निर्धारित दवाईआं प्रबंधन के लिए महत्वपूर्न हैं।',
      topic2Title: 'स्वस्थ खान-पान की आदतें',
      topic2Desc: 'संतुलित खुराक और पोषण संबंधी तंत्रुस्ती के लिए सुझाअ।',
      topic2Content: 'A healthy diet is essential for good health and nutrition. It protects you against many chronic noncommunicable diseases, such as heart disease, diabetes, and cancer. Eating a variety of foods and consuming less salt, sugars and saturated and industrially produced trans-fats are essential for healthy living.',
      topic3Title: 'टीकाकरण का महत्व',
      topic3Desc: 'रोगों को रोकने के लिए टीके क्यों महत्वपूर्ण हैं।',
      topic3Content: 'Vaccination is a simple, safe, and effective way of protecting people against harmful diseases before they come into contact with them. It uses your body\'s natural defenses to build resistance to specific infections and makes your immune system stronger. Vaccines train your immune system to create antibodies, just as it does when it\'s exposed to a disease. However, because vaccines contain only killed or weakened forms of germs, they do not cause the disease or put you at risk.',
      topic4Title: 'प्राथमिक उपचार के मूल सिद्धांत',
      topic4Desc: 'आपात स्थितियों के लिए आवश्यक ज्ञान।',
      topic4Content: 'First aid is the first and immediate assistance given to any person suffering from either a minor or serious illness or injury, with the goal of preserving life, preventing the condition from worsening, and promoting recovery. Basic first aid knowledge can be critical in situations like cuts, burns, sprains, or sudden illness. Knowing how to react calmly and effectively can make a significant difference.',
    },
    pa: {
      title: 'ਸਿਹਤ ਸਿੱਖਿਆ',
      back: 'ਵਾਪਸ',
      topic1Title: 'ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ ਨੂੰ ਸਮਝਣਾ',
      topic1Desc: 'ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ, ਇਸਦੇ ਕਾਰਨਾਂ, ਲੱਛਣਾਂ ਅਤੇ ਪ੍ਰਬੰਧਨ ਬਾਰੇ ਜਾਣੋ।',
      topic1Content: 'ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ, ਜਾਂ ਹਾਈ ਬਲੱਡ ਪ੍ਰੈਸ਼ਰ, ਇੱਕ ਆਮ ਸਥਿਤੀ ਹੈ ਜਿਸ ਵਿੱਚ ਤੁਹਾਡੀ ਧਮਣੀ ਦੀਆਂ ਕੰਧਾਂ ਦੇ ਵਿਰੁੱਧ ਖੂਨ ਦਾ ਲੰਬੇ ਸਮੇਂ ਦਾ ਬਲ ਇੰਨਾ ਜ਼ਿਆਦਾ ਹੁੰਦਾ ਹੈ ਕਿ ਇਹ ਆਖਰਕਾਰ ਦਿਲ ਦੀ ਬਿਮਾਰੀ ਵਰਗੀਆਂ ਸਿਹਤ ਸਮੱਸਿਆਵਾਂ ਦਾ ਕਾਰਨ ਬਣ ਸਕਦਾ ਹੈ। ਇਹ ਖੁਰਾਕ, ਤਣਾਅ, ਅਤੇ ਜੈਨੇਟਿਕਸ ਸਮੇਤ ਕਈ ਕਾਰਕਾਂ ਕਰਕੇ ਹੋ ਸਕਦਾ ਹੈ। ਨਿਯਮਤ ਨਿਗਰਾਨੀ, ਸੰਤੁਲਿਤ ਖੁਰਾਕ, ਕਸਰਤ, ਅਤੇ ਡਾਕਟਰ ਦੁਆਰਾ ਨਿਰਧਾਰਿਤ ਦਵਾਈਆਂ ਪ੍ਰਬੰਧਨ ਲਈ ਮਹੱਤਵਪੂਰਨ ਹਨ।',
      topic2Title: 'ਸਿਹਤਮੰਦ ਖਾਣ-ਪੀਣ ਦੀਆਂ ਆਦਤਾਂ',
      topic2Desc: 'ਸੰਤੁਲਿਤ ਖੁਰਾਕ ਅਤੇ ਪੋਸ਼ਣ ਸੰਬੰਧੀ ਤੰਦਰੁਸਤੀ ਲਈ ਸੁਝਾਅ।',
      topic2Content: 'ਇੱਕ ਸਿਹਤਮੰਦ ਖੁਰਾਕ ਚੰਗੀ ਸਿਹਤ ਅਤੇ ਪੋਸ਼ਣ ਲਈ ਜ਼ਰੂਰੀ ਹੈ। ਇਹ ਤੁਹਾਨੂੰ ਬਹੁਤ ਸਾਰੀਆਂ ਪੁਰਾਣੀਆਂ ਗੈਰ-ਸੰਚਾਰੀ ਬਿਮਾਰੀਆਂ, ਜਿਵੇਂ ਕਿ ਦਿਲ ਦੀ ਬਿਮਾਰੀ, ਡਾਇਬੀਟੀਜ਼, ਅਤੇ ਕੈਂਸਰ ਤੋਂ ਬਚਾਉਂਦਾ ਹੈ। ਸਿਹਤਮੰਦ ਜੀਵਨ ਲਈ ਕਈ ਤਰ੍ਹਾਂ ਦੇ ਭੋਜਨ ਖਾਣਾ ਅਤੇ ਘੱਟ ਨਮਕ, ਸ਼ੱਕਰ ਅਤੇ ਸੰਤ੍ਰਿਪਤ ਅਤੇ ਉਦਯੋਗਿਕ ਤੌਰ \'ਤੇ ਤਿਆਰ ਟ੍ਰਾਂਸ-ਫੈਟ ਦਾ ਸੇਵਨ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ।',
      topic3Title: 'ਟੀਕਾਕਰਨ ਦਾ ਮਹੱਤਵ',
      topic3Desc: 'ਬਿਮਾਰੀਆਂ ਨੂੰ ਰੋਕਣ ਲਈ ਟੀਕੇ ਕਿਉਂ ਜ਼ਰੂਰੀ ਹਨ।',
      topic3Content: 'ਟੀਕਾਕਰਨ ਲੋਕਾਂ ਨੂੰ ਨੁਕਸਾਨਦੇਹ ਬਿਮਾਰੀਆਂ ਦੇ ਸੰਪਰਕ ਵਿੱਚ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਉਨ੍ਹਾਂ ਤੋਂ ਬਚਾਉਣ ਦਾ ਇੱਕ ਸਰਲ, ਸੁਰੱਖਿਅਤ, ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਤਰੀਕਾ ਹੈ। ਇਹ ਤੁਹਾਡੀ ਪ੍ਰਤੀਰੋਧੀ ਪ੍ਰਣਾਲੀ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਬਣਾਉਣ ਲਈ ਖਾਸ ਲਾਗਾਂ ਪ੍ਰਤੀ ਪ੍ਰਤੀਰੋਧਕਤਾ ਬਣਾਉਣ ਲਈ ਤੁਹਾਡੇ ਸਰੀਰ ਦੀਆਂ ਕੁਦਰਤੀ ਰੱਖਿਆ ਪ੍ਰਣਾਲੀਆਂ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਟੀਕੇ ਤੁਹਾਡੀ ਪ੍ਰਤੀਰੋਧੀ ਪ੍ਰਣਾਲੀ ਨੂੰ ਐਂਟੀਬਾਡੀਜ਼ ਬਣਾਉਣ ਲਈ ਸਿਖਲਾਈ ਦਿੰਦੇ ਹਨ, ਜਿਵੇਂ ਕਿ ਇਹ ਕਿਸੇ ਬਿਮਾਰੀ ਦੇ ਸੰਪਰਕ ਵਿੱਚ ਆਉਣ \'ਤੇ ਕਰਦਾ ਹੈ। ਹਾਲਾਂਕੀ, ਕਿਕਿ ਟੀਕਿਆਂ ਵਿੱਚ ਸਿਰਫ਼ ਮਰੇ ਹੋਏ ਜਾਂ ਕਮਜ਼ੋਰ ਰੂਪਾਂ ਦੇ ਕੀਟਾਣੂ ਹੁੰਦੇ ਹਨ, ਉਹ ਬਿਮਾਰੀ ਦਾ ਕਾਰਨ ਨਹੀਂ ਬਣਦੇ ਜਾਂ ਤੁਹਾਨੂੰ ਜੋਖਮ ਵਿੱਚ ਨਹੀਂ ਪਾਉਂਦੇ।',
      topic4Title: 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਦੇ ਬੁਨਿਆਦੀ ਸਿਧਾਂਤ',
      topic4Desc: 'ਐਮਰਜੈਂਸੀ ਲਈ ਜ਼ਰੂਰੀ ਗਿਆਨ।',
      topic4Content: 'ਪਹਿਲੀ ਸਹਾਇਤਾ ਕਿਸੇ ਵੀ ਵਿਅਕਤੀ ਨੂੰ ਮਾਮੂਲੀ ਜਾਂ ਗੰਭੀਰ ਬਿਮਾਰੀ ਜਾਂ ਸੱਟ ਤੋਂ ਪੀੜਤ ਵਿਅਕਤੀ ਨੂੰ ਦਿੱਤੀ ਜਾਣ ਵਾਲੀ ਪਹਿਲੀ ਅਤੇ ਤੁਰੰਤ ਸਹਾਇਤਾ ਹੈ, ਜਿਸਦਾ ਟੀਚਾ ਜੀਵਨ ਨੂੰ ਬਚਾਉਣਾ, ਸਥਿਤੀ ਨੂੰ ਵਿਗੜਨ ਤੋਂ ਰੋਕਣਾ, ਅਤੇ ਠੀਕ ਹੋਣ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ ਹੈ। ਬੁਨਿਆਦੀ ਪਹਿਲੀ ਸਹਾਇਤਾ ਗਿਆਨ ਕੱਟਾਂ, ਜਲਣ, ਮੋਚ, ਜਾਂ ਅਚਾਨਕ ਬਿਮਾਰੀ ਵਰਗੀਆਂ ਸਥਿਤੀਆਂ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਹੋ ਸਕਦਾ ਹੈ। ਸ਼ਾਂਤ ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਢੰਗ ਨਾਲ ਪ੍ਰਤੀਕਿਰਿਆ ਕਰਨਾ ਜਾਣਨਾ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਅੰਤਰ ਪੈਦਾ ਕਰ ਸਕਦਾ ਹੈ।',
    },
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const topics = [
    { id: 'hypertension', icon: Heart, title: t.topic1Title, description: t.topic1Desc, content: t.topic1Content, color: 'bg-red-500' },
    { id: 'eating-habits', icon: Utensils, title: t.topic2Title, description: t.topic2Desc, content: t.topic2Content, color: 'bg-green-500' },
    { id: 'vaccinations', icon: Shield, title: t.topic3Title, description: t.topic3Desc, content: t.topic3Content, color: 'bg-blue-500' },
    { id: 'first-aid', icon: Plus, title: t.topic4Title, description: t.topic4Desc, content: t.topic4Content, color: 'bg-orange-500' },
  ];

  const [selectedTopic, setSelectedTopic] = useState<typeof topics[0] | null>(null);

  if (selectedTopic) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-gray-50 p-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" onClick={() => setSelectedTopic(null)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-gray-800">{selectedTopic.title}</h1>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed">{selectedTopic.content}</p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-800 flex-1 text-center">{t.title}</h1>
      </div>

      <div className="p-4 space-y-4">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card 
              className="cursor-pointer hover:shadow-lg transition-shadow border-2 hover:border-primary/30 group"
              onClick={() => setSelectedTopic(topic)}
            >
              <CardContent className="p-5 flex items-center">
                <div className={`w-14 h-14 rounded-full ${topic.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <topic.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors">{topic.title}</h3>
                  <p className="text-muted-foreground text-sm">{topic.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
