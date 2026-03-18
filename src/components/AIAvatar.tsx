import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot } from 'lucide-react';

export default function AIAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '你好！我是涂诗的AI分身。有什么我可以帮你的吗？你可以问我关于涂诗的经历、技能或项目。' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsLoading(true);

    // Placeholder for Coze API integration
    // The user will configure VITE_COZE_API_KEY and VITE_COZE_BOT_ID in Vercel
    try {
      const apiKey = import.meta.env.VITE_COZE_API_KEY;
      const botId = import.meta.env.VITE_COZE_BOT_ID;

      if (!apiKey || !botId) {
        // Simulate a response if env vars are missing (for preview)
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'assistant', 
            content: '抱歉，AI分身服务暂未完全配置（缺少环境变量）。后续在Vercel部署后即可正常对话！' 
          }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      // TODO: Implement actual Coze API call here
      // Example structure:
      // const response = await fetch('https://api.coze.com/open_api/v2/chat', {
      //   method: 'POST',
      //   headers: {
      //     'Authorization': `Bearer ${apiKey}`,
      //     'Content-Type': 'application/json',
      //     'Accept': '*/*'
      //   },
      //   body: JSON.stringify({
      //     bot_id: botId,
      //     user: 'user_id_123',
      //     query: userMessage,
      //     stream: false
      //   })
      // });
      // const data = await response.json();
      // // Parse data and update messages
      
      // Simulated success response for now
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: '这是一个预留的AI回复。实际部署后，这里将显示Coze智能体的真实回答。' 
        }]);
        setIsLoading(false);
      }, 1500);

    } catch (error) {
      console.error('Error calling Coze API:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '抱歉，连接AI分身时出现错误，请稍后再试。' 
      }]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-[var(--color-morandi-blue)] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[var(--color-morandi-dark)] transition-colors z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <Bot size={28} />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-morandi-pink)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[var(--color-morandi-pink)]"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-8 w-80 sm:w-96 h-[500px] max-h-[70vh] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-[var(--color-morandi-sand)]/50 flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-[var(--color-morandi-bg)] p-4 border-b border-[var(--color-morandi-sand)]/50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--color-morandi-blue)] flex items-center justify-center text-white">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-morandi-dark)] text-sm">涂诗的AI分身</h3>
                  <p className="text-xs text-[var(--color-morandi-green)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-morandi-green)] inline-block"></span>
                    在线
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-morandi-muted)] hover:text-[var(--color-morandi-dark)] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[var(--color-morandi-bg)]/30">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-morandi-blue)] text-white rounded-tr-sm' 
                        : 'bg-white text-[var(--color-morandi-dark)] border border-[var(--color-morandi-sand)]/30 rounded-tl-sm shadow-sm'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-[var(--color-morandi-dark)] border border-[var(--color-morandi-sand)]/30 p-3 rounded-2xl rounded-tl-sm shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[var(--color-morandi-muted)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-morandi-muted)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-[var(--color-morandi-muted)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-[var(--color-morandi-sand)]/50">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="问我任何问题..."
                  className="flex-1 bg-[var(--color-morandi-bg)] border border-[var(--color-morandi-sand)]/50 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-morandi-blue)] transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 rounded-full bg-[var(--color-morandi-blue)] text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--color-morandi-dark)] transition-colors"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
