'use client';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-1 p-1 bg-surface-800 rounded-lg border border-surface-600 w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-1.5 rounded text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-lfc-red text-white'
              : 'text-surface-200 hover:text-white hover:bg-surface-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
