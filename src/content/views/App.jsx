import { useEffect, useState } from 'react';

function App() {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const handler = (event) => {
      if (event.source !== window || event.data?.type !== 'PROMPT_INDEX_UPDATE') return;
      setPrompts(event.data.prompts || []);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const scrollToPrompt = (index) => {
    const messages = document.querySelectorAll('[data-message-author-role="user"] .bg-token-message-surface');
    const el = messages[index];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-24 right-0 z-50 text-sm font-sans text-gray-900 dark:text-gray-100 max-w-xs p-3">
      <div className="font-semibold text-xs text-gray-500 dark:text-gray-400 mb-2">Question Index</div>
      <div className="max-h-[60vh] overflow-y-auto pr-1 no-scrollbar">
        <ul className="space-y-1">
          {prompts.map((p, i) => (
            <li
              key={i}
              onClick={() => scrollToPrompt(i)}
              className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 px-2 py-1 rounded text-ellipsis whitespace-nowrap overflow-hidden"
              title={p}
            >
              {i + 1}. {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
