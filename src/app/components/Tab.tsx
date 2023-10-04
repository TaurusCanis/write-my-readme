// components/Tab.tsx

type TabProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
  };
  
  const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`${
          isActive
            ? 'bg-blue-500 text-white border border-blue-500'
            : 'bg-white text-blue-500 border border-blue-500'
        } px-4 py-2 font-semibold rounded-t-lg transition duration-200 ease-in-out hover:bg-blue-300 hover:text-white`}
      >
        {label}
      </button>
    );
  };
  
  export default Tab;
  