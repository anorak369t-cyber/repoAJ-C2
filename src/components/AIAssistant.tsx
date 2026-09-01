import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, BrainCircuit, ArrowUpRight } from 'lucide-react';
import { ChatMessage } from '../types';

const quickPrompts = [
  "What is Vortex labs?",
  "What are Grok's core skills?",
  "Is Grok available for freelance?",
  "Tell me about the AI Study Assistant"
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hi there! I am Grok's AI Digital partner, powered by Gemini 3.5 Flash. Ask me anything about Grok's background, purpose at Vortex labs, certifications, or custom full-stack projects!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [generating, setGenerating] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, generating]);

  // Alert visitor of initial message after short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasNewMessage(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || generating) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setGenerating(true);
    setHasNewMessage(false);

    try {
      // Package conversation history (up to last 6 messages) for chat model compatibility
      const historyPayload = messages
        .filter(m => m.id !== 'init')
        .slice(-6)
        .map(m => ({ role: m.role, text: m.text }));

      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          history: historyPayload
        })
      });

      if (!res.ok) throw new Error('Network response not ok.');
      const data = await res.json();

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: data.text || "I was unable to compile a response, but Grok remains highly motivated and ready to code!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "My neural relays are temporarily congested! However, feel free to reach Grok directly using the contact form below.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating launcher bubble with badge notification alert */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            className="relative"
          >
            <AnimatePresence>
              {isHovered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute right-0 bottom-16 w-52 p-3 rounded-xl border border-cyan-500/15 bg-[#0f172a]/95 text-zinc-300 text-xs shadow-xl backdrop-blur-md pointer-events-none mb-2"
                >
                  <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0f172a] border-r border-b border-cyan-500/15 rotate-45" />
                  <span className="font-semibold text-cyan-400 block mb-0.5">Chat with my AI Twin!</span>
                  Ask questions about my experience and technical projects.
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => { setIsOpen(true); setHasNewMessage(false); }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="p-4 rounded-full bg-gradient-to-tr from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-lg shadow-red-500/30 cursor-pointer flex items-center justify-center relative group"
              title="Chat with Atamba Joel's AI Twin"
            >
              <MessageSquare className="w-6 h-6 group-hover:rotate-6 transition-transform" />
              {hasNewMessage && (
                <span className="absolute top-0 right-0 w-3 h-3 bg-sky-400 border-2 border-zinc-950 rounded-full animate-bounce" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded chat window panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className="w-80 sm:w-[350px] h-[500px] rounded-2xl border border-white/10 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden relative"
          >
            {/* Ambient visual gradient top cap */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-500" />

            {/* Chat header panel */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-white/2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide font-sans">Atamba's AI Twin</h3>
                  <div className="flex items-center gap-1 mt-0.5 text-[9px] font-mono text-zinc-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>GEMINI 3.5 FLASH ONLINE (coming soon)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-500 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Message timeline area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 font-sans text-xs scrollbar-thin scrollbar-thumb-zinc-800">
              {messages.map((msg) => {
                const isModel = msg.role === 'model';
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-2 max-w-[85%] ${isModel ? 'self-start' : 'ml-auto flex-row-reverse'}`}
                  >
                    {/* Tiny avatar block */}
                    <div className={`p-1.5 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                      isModel ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    }`}>
                      {isModel ? <BrainCircuit className="w-3 h-3" /> : <User className="w-3 h-3" />}
                    </div>

                    <div className={`p-3 rounded-2xl leading-relaxed font-normal ${
                      isModel ? 'bg-white/5 text-zinc-300 rounded-tl-none border border-white/2' : 'bg-red-600 text-white rounded-tr-none'
                    }`}>
                      <p>{msg.text}</p>
                      <span className="text-[8px] font-mono opacity-50 block text-right mt-1.5 uppercase">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Generating loading dot bubble */}
              {generating && (
                <div className="flex items-start gap-2 max-w-[85%] self-start">
                  <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <BrainCircuit className="w-3 h-3 animate-spin" />
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-white/5 text-zinc-500 border border-white/2 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Preconfigured Quick Prompt shortcuts */}
            <div className="px-4 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto whitespace-nowrap bg-white/1 scrollbar-none scroll-smooth">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleSendMessage(p)}
                  disabled={generating}
                  className="px-2.5 py-1.5 border border-white/5 hover:border-cyan-500/30 bg-[#131e35] hover:bg-cyan-950/10 text-[10px] font-semibold text-zinc-400 hover:text-cyan-300 rounded-lg transition-all flex items-center gap-1 cursor-pointer shrink-0 disabled:opacity-50"
                >
                  <span>{p}</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </button>
              ))}
            </div>

            {/* Input submission box area */}
            <form
              onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputText); }}
              className="p-4 border-t border-white/5 bg-[#0f172a] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask my partner a question..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                disabled={generating}
                className="flex-grow bg-[#131e35] border border-white/5 rounded-xl px-3.5 py-2 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || generating}
                className="p-2 bg-red-600 hover:bg-red-500 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-xl transition-colors cursor-pointer flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
