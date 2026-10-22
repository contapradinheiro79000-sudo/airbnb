import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  CheckCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import type { Property } from '../types';

interface Message {
  id: string;
  sender: 'client' | 'host';
  text: string;
  time: string;
}

interface LiveChatProps {
  isOpen: boolean;
  onClose: () => void;
  activeProperty?: Property | null;
}

export const LiveChat: React.FC<LiveChatProps> = ({
  isOpen,
  onClose,
  activeProperty,
}) => {
  const [messages, setMessages] = useState<Message[]>(() => {
    try {
      const saved = localStorage.getItem('airbnb_chat_messages');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignora
    }
    return [
      {
        id: 'msg_welcome',
        sender: 'host',
        text: 'Olá! Sou o anfitrião responsável pelas reservas de fim de ano. Como posso te ajudar com a sua estadia?',
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      },
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('airbnb_chat_messages', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Se trocar de propriedade, insere contexto no chat se ainda não houver
  useEffect(() => {
    if (activeProperty && isOpen) {
      const lastMsg = messages[messages.length - 1];
      if (!lastMsg || !lastMsg.text.includes(activeProperty.title)) {
        const autoMsg: Message = {
          id: `msg_prop_${Date.now()}`,
          sender: 'host',
          text: `Vi que você está interessado em "${activeProperty.title}" em ${activeProperty.location}. As datas para o fim de ano estão com desconto especial. Deseja tirar alguma dúvida?`,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, autoMsg]);
      }
    }
  }, [activeProperty, isOpen]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const newMsg: Message = {
      id: `msg_${Date.now()}`,
      sender: 'client',
      text: text.trim(),
      time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    // Resposta inteligente automática do Anfitrião em 1.5s
    setTimeout(() => {
      let reply = 'Recebi sua mensagem! O imóvel está pronto para te receber no fim de ano com limpeza impecável e chaves no local.';
      const lower = text.toLowerCase();

      if (lower.includes('réveillon') || lower.includes('reveillon') || lower.includes('fim de ano')) {
        reply = 'Sim! Nossas datas de Réveillon estão abertas com o desconto promocional aplicado. Você pode garantir a reserva agora mesmo via PIX pelo site com confirmação imediata!';
      } else if (lower.includes('check-in') || lower.includes('checkin') || lower.includes('horário')) {
        reply = 'O check-in padrão é a partir das 14h e o check-out até as 11h. Podemos flexibilizar os horários conforme a sua chegada!';
      } else if (lower.includes('garagem') || lower.includes('estacionamento') || lower.includes('carro')) {
        reply = 'A casa possui vaga de garagem privativa e segura para seus veículos, inclusa na diária sem custo adicional.';
      } else if (lower.includes('pix') || lower.includes('pagar') || lower.includes('pagamento')) {
        reply = 'O pagamento é feito via PIX oficial com aprovação imediata no sistema. As datas são bloqueadas na hora para você com garantia AirCover.';
      }

      const hostReply: Message = {
        id: `msg_reply_${Date.now()}`,
        sender: 'host',
        text: reply,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, hostReply]);
      setIsTyping(false);
    }, 1500);
  };

  const quickQuestions = [
    'Está disponível para o Réveillon?',
    'Qual o horário do check-in?',
    'Tem vaga de garagem?',
    'A praia fica muito perto?',
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden flex flex-col h-[560px] max-h-[85vh] animate-in slide-in-from-bottom-6 duration-200">
      {/* Header do Chat */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={
                activeProperty?.host.avatar ||
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
              }
              alt="Anfitrião"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-emerald-400"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm">
                {activeProperty ? activeProperty.host.name : 'Atendimento AIRBNB.OFC'}
              </h4>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-1.5 py-0.5 rounded">
                Online
              </span>
            </div>
            <p className="text-[11px] text-neutral-300 truncate max-w-[200px]">
              {activeProperty ? activeProperty.title : 'Anfitrião de Fim de Ano'}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Selo de Proteção */}
      <div className="bg-emerald-50 border-b border-emerald-100 px-3 py-1.5 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-800">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span>Chat oficial com garantia AirCover de reservas</span>
      </div>

      {/* Lista de Mensagens */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-neutral-50/50">
        {messages.map((msg) => {
          const isMe = msg.sender === 'client';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                  isMe
                    ? 'bg-[#FF385C] text-white rounded-br-none'
                    : 'bg-white text-neutral-800 border border-neutral-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-1 mt-1 text-[10px] text-neutral-400 px-1">
                <span>{msg.time}</span>
                {isMe && <CheckCheck className="w-3 h-3 text-emerald-600" />}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-1 bg-white border border-neutral-200 rounded-2xl px-3 py-2 w-fit text-xs text-neutral-500 shadow-sm animate-pulse">
            <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce"></span>
            <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce delay-100"></span>
            <span className="w-2 h-2 rounded-full bg-neutral-400 animate-bounce delay-200"></span>
            <span className="ml-1 text-[11px]">Digitando...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Perguntas Rápidas */}
      <div className="p-2 border-t border-neutral-200 bg-white flex gap-1.5 overflow-x-auto no-scrollbar">
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="whitespace-nowrap px-2.5 py-1 rounded-full border border-neutral-200 text-[11px] font-medium text-neutral-600 hover:border-neutral-800 hover:bg-neutral-50 transition shrink-0 cursor-pointer flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5 text-[#FF385C]" />
            {q}
          </button>
        ))}
      </div>

      {/* Input de Envio */}
      <div className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escreva sua mensagem para o anfitrião..."
          className="flex-1 px-4 py-2.5 border border-neutral-300 rounded-xl text-xs sm:text-sm focus:border-neutral-900 focus:outline-none"
        />
        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim()}
          className="p-2.5 bg-[#FF385C] hover:bg-[#E00B41] text-white rounded-xl transition disabled:opacity-40 cursor-pointer shrink-0 shadow-sm"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
