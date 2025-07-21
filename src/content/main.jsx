import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './views/App';

const container = document.createElement('div');
container.id = 'crxjs-app';
document.body.appendChild(container);
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);

function extractPrompts() {
  const messages = document.querySelectorAll('[data-message-author-role="user"] .bg-token-message-surface');
  return Array.from(messages).map((m) => m.textContent.trim());
}

function sendPromptsToApp() {
  const prompts = extractPrompts();
  window.postMessage({ type: 'PROMPT_INDEX_UPDATE', prompts }, '*');
}

const observer = new MutationObserver(() => {
  sendPromptsToApp();
});

function waitForChatReady() {
  const container = document.querySelector('[data-message-author-role="user"]');
  if (container) {
    observer.observe(document.body, { childList: true, subtree: true });
    sendPromptsToApp();
  } else {
    setTimeout(waitForChatReady, 500);
  }
}

waitForChatReady();
window.addEventListener('popstate', () => setTimeout(sendPromptsToApp, 500));
