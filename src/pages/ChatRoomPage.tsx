import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, Phone, Video, MoreVertical, Send, Image,
  Mic, Smile, Shield, BadgeCheck
} from 'lucide-react';
import { mockConversations } from '@/data/mockData';

export default function ChatRoomPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockConversations.find(c => c.profile.id === id)?.messages || []);
  const [isTyping, setIsTyping] = useState(false);

  const conversation = mockConversations.find(c => c.profile.id === id);
  const profile = conversation?.profile;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (Math.random() > 0.7) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: `reply-${Date.now()}`,
            senderId: id || '',
            content: 'That sounds really interesting! Tell me more about it.',
            timestamp: new Date(),
            type: 'text',
            isRead: false,
          }]);
        }, 2000);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [id]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, {
      id: `msg-${Date.now()}`,
      senderId: 'me',
      content: message,
      timestamp: new Date(),
      type: 'text',
      isRead: false,
    }]);
    setMessage('');
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Conversation not found</p>
      </div>
    );
  }

  return (
    <div className="h-screen bg-[#050505] text-white flex flex-col">
      {/* Header */}
      <div className="glass flex items-center gap-3 px-4 py-3 flex-shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-white/10 rounded-full transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="relative">
          <img
            src={profile.photos[0]}
            alt={profile.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          {profile.isOnline && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#050505]" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-sm truncate">{profile.name}</h3>
            {profile.verificationLevel === 'id' && (
              <BadgeCheck className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            )}
          </div>
          <p className="text-xs text-white/50">
            {isTyping ? 'typing...' : profile.isOnline ? 'Online' : profile.lastActive}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Phone className="w-5 h-5 text-white/60" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Video className="w-5 h-5 text-white/60" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <MoreVertical className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto hide-scrollbar px-4 py-4 space-y-3">
        {/* Trust Banner */}
        <div className="flex justify-center mb-4">
          <div className="glass px-4 py-2 rounded-full flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs text-white/60">
              {profile.trustScore}% Trust Score · {profile.verificationLevel} verified
            </span>
          </div>
        </div>

        <AnimatePresence>
          {messages.map((msg, i) => {
            const isMe = msg.senderId === 'me';
            const showTime = i === 0 ||
              new Date(messages[i - 1].timestamp).getMinutes() !== new Date(msg.timestamp).getMinutes();

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[75%] ${isMe ? 'order-1' : 'order-1'}`}>
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      isMe
                        ? 'gradient-btn text-white rounded-br-md'
                        : 'glass text-white rounded-bl-md'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                  {showTime && (
                    <p className={`text-[10px] text-white/30 mt-1 ${isMe ? 'text-right' : 'text-left'}`}>
                      {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {isMe && <span className="ml-1">{msg.isRead ? 'Read' : 'Sent'}</span>}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Typing Indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="glass px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white/40 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-white/40 rounded-full typing-dot" />
                  <div className="w-2 h-2 bg-white/40 rounded-full typing-dot" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="glass flex-shrink-0 px-4 py-3">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Image className="w-5 h-5 text-white/50" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-all">
            <Mic className="w-5 h-5 text-white/50" />
          </button>
          <div className="flex-1 glass rounded-full px-4 py-2.5 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
            />
            <button className="p-1 hover:bg-white/10 rounded-full transition-all">
              <Smile className="w-5 h-5 text-white/40" />
            </button>
          </div>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`p-3 rounded-full transition-all ${
              message.trim()
                ? 'gradient-btn hover:scale-105'
                : 'bg-white/5 text-white/30'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
