export default function App() {
  return (
    <div className="p-4 text-sm text-gray-800 font-sans w-64">
      <h1 className="text-lg font-bold mb-2">ChatGPT Prompt Indexer</h1>
      <p className="mb-3 text-gray-600">
        This extension adds a floating sidebar to ChatGPT that lists your questions for easy navigation.
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Auto-indexes user prompts</li>
        <li>Click to scroll back to any question</li>
      </ul>
      <p className="text-xs text-gray-500">
        To activate: just open <code className="bg-gray-100 px-1 py-0.5 rounded">chat.openai.com</code><br />
        The sidebar will appear automatically.
      </p>
    </div>
  );
}
