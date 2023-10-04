// components/FormSection.tsx

type FormSectionProps = {
    label: string;
    placeholder: string;
    isTextArea?: boolean;
    id: string;
    toggleSection: (event: React.MouseEvent, section: string) => void;
    activeSection: string | null;
    value: string;
    onChange: (input: string, value: string) => void;
};

function FormSection({
    label,
    placeholder,
    isTextArea = false,
    id,
    toggleSection,
    activeSection,
    value,
    onChange
}: FormSectionProps) {
    return (
        <div className="mb-6">
            <button
                className="text-left w-full text-lg font-semibold bg-gray-200 p-4 rounded-lg mb-2 transition ease-in-out duration-150 hover:bg-gray-300 focus:outline-none"
                onClick={(e) => toggleSection(e, id)}
            >
                {label}
            </button>
            {activeSection === id && (
                isTextArea ? (
                    <textarea
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2 transition ease-in-out duration-150 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        value={value}
                        onChange={(e) => onChange(id, e.target.value)}
                    />
                ) : (
                    <input
                        type="text"
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2 transition ease-in-out duration-150 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                        value={value}
                        onChange={(e) => onChange(id, e.target.value)}
                    />
                )
            )}
        </div>
    );
};

export default FormSection;
