
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { MOCK_JOBS, COMPANY_INFO } from '../constants';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: 'Hello! I am Pneuma AI. How can I help you find your dream job today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it uses the correct API key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // Use ai.models.generateContent with systemInstruction in the config
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `
            You are an assistant for Pneuma Nikos Group Ltd, a Ugandan labor recruitment agency.
            Company Info: ${JSON.stringify(COMPANY_INFO)}
            Current Openings: ${JSON.stringify(MOCK_JOBS)}
            
            Guidelines:
            1. Be professional, encouraging, and helpful.
            2. Answer questions about current job openings, requirements, and the recruitment process.
            3. Remind users that the company is licensed (License E24050028).
            4. If they ask about jobs, suggest specific ones from the list.
            5. Keep answers concise.
          `
        }
      });

      // Directly access the .text property from GenerateContentResponse
      const text = response.text || "I apologize, but I couldn't process that. Please contact our office directly.";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting right now. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pneuma-purple text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
        >
          <MessageSquare size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-bold">
            Job Assistant
          </span>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-pneuma-purple p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-pneuma-gold" />
              <div>
                <h4 className="font-bold text-sm">Pneuma AI Assistant</h4>
                <p className="text-[10px] text-pneuma-gold uppercase tracking-widest font-bold">Online & Ready</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-pneuma-gold transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-pneuma-purple text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2">
                  <Loader2 className="animate-spin text-pneuma-purple" size={16} />
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about jobs or process..."
                className="flex-grow px-4 py-2 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-pneuma-purple/20 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-pneuma-purple text-white p-2 rounded-xl hover:bg-pneuma-dark disabled:bg-gray-300 transition-all"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
