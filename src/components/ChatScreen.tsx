import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send, User, Bot, Paperclip } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { motion, AnimatePresence } from 'motion/react';

interface ChatScreenProps {
  onBack: () => void;
  language: string;
  chatPartnerName?: string;
}

export function ChatScreen({ onBack, language, chatPartnerName = 'Support' }: ChatScreenProps) {
  const [messages, setMessages] = useState<{
    id: number;
    sender: 'user' | 'partner';
    text: string;
    time: string;
  }[]>([
    { id: 1, sender: 'partner', text: 'Hello! How can I help you today?', time: '10:00 AM' },
    { id: 2, sender: 'user', text: 'I have a question about my prescription.', time: '10:01 AM' },
    { id: 3, sender: 'partner', text: 'Of course, I can help with that. What would you like to know?', time: '10:02 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: 'Chat',
      send: 'Send',
      typeMessage: 'Type your message...',
      back: 'Back',
      chatWith: 'Chat with',
      support: 'Support',
      attachment: 'Attachment',
      yesterday: 'Yesterday',
      today: 'Today',
    },
    hi: {
      title: 'चैट',
      send: 'भेजें',
      typeMessage: 'अपना संदेश लिखें...',
      back: 'वापस',
      chatWith: 'चैट करें',
      support: 'सहायता',
      attachment: 'अटैचमेंट',
      yesterday: 'कल',
      today: 'आज',
    },
    pa: {
      title: 'ਚੈਟ',
      send: 'ਭੇਜੋ',
      typeMessage: 'ਆਪਣਾ ਸੁਨੇਹਾ ਲਿਖੋ...',
      back: 'ਵਾਪਸ',
      chatWith: 'ਚੈਟ ਕਰੋ',
      support: 'ਸਹਾਇਤਾ',
      attachment: 'ਅਟੈਚਮੈਂਟ',
      yesterday: 'ਕੱਲ੍ਹ',
      today: 'ਅੱਜ',
    },
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, sender: 'user', text: newMessage, time: timeString },
    ]);
    setNewMessage('');

    // Simulate partner response after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1,
          sender: 'partner',
          text: 'Thank you for your message. We will get back to you shortly.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={onBack} className="mr-2">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <Avatar className="h-10 w-10 mr-3">
          <AvatarFallback className="bg-blue-500 text-white">{chatPartnerName.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-semibold text-gray-800 flex-1">{t.chatWith} {chatPartnerName}</h1>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-100 dark:bg-gray-900">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl relative shadow-md text-sm ${message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none'
                }`}
              >
                {message.text}
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-200 text-right' : 'text-gray-500 dark:text-gray-400 text-left'}`}>{message.time}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex items-end shadow-lg">
        <Input
          type="text"
          placeholder={t.typeMessage}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-1 mr-3 h-12 rounded-full px-5 pt-5 pb-1 bg-gray-100 dark:bg-gray-700 border-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-800 dark:text-gray-100"
        />
        <Button 
          size="icon" 
          className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
        >
          <Send className="w-5 h-5 text-white" />
        </Button>
      </div>
    </div>
  );
}
