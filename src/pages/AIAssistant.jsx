import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageToAI } from '../services/ai';
import clsx from 'clsx';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hello! I am ChemVerse AI 👋 Ask me anything related to Chemistry — equations, reactions, concepts, or experiments.',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const clearChat = () => {
    setMessages([
      {
        role: 'assistant',
        content:
          'Hello! I am ChemVerse AI 👋 Ask me anything related to Chemistry — equations, reactions, concepts, or experiments.',
      },
    ]);
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);

    try {
      const assistantContent = await sendMessageToAI(
        updatedMessages.slice(1),
        'gpt-4o-mini'
      );

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantContent },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Something went wrong. Please check the backend server or try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-800 via-purple-700 to-gray-900 flex flex-col relative z-2">
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col">

        {/* Header */}
        <div className="flex justify-between items-center mb-6 mt-4">
          <h1 className="text-3xl font-bold text-neon-purple">
            ChemVerse AI Assistant
          </h1>
          <button
            onClick={clearChat}
            className="text-sm px-4 py-2 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 transition"
          >
            Clear Chat
          </button>
        </div>

        {/* Chat Box */}
        <div className="flex-1 bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={clsx(
                    'flex items-start gap-3',
                    msg.role === 'user' ? 'justify-end' : 'justify-start'
                  )}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                  )}

                  <div
                    className={clsx(
                      'max-w-md px-5 py-3 rounded-2xl leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-neon-purple/80 text-white'
                        : 'bg-gradient-to-br from-purple-500/10 to-pink-500/10 text-gray-100 border border-purple-400/30'
                    )}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-purple-400/30 flex items-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin text-neon-purple" />
                  <span className="text-sm text-purple-200">
                    ChemVerse AI is thinking...
                  </span>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-purple-500/30 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-3"
            >
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask a chemistry question... (Shift + Enter for new line)"
                className="flex-1 resize-none bg-white/10 border border-purple-400/50 rounded-xl px-5 py-3 text-white placeholder-gray-400 focus:outline-none"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-neon-purple hover:bg-purple-600 disabled:opacity-50 transition px-6 py-3 rounded-xl flex items-center gap-2 text-white font-medium"
              >
                <Send className="w-5 h-5" />
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;