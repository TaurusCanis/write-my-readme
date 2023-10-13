// DataContext.tsx
import React, { createContext, useState, useContext } from 'react';

type DataContextProps = {
  formData: Record<string, string | null>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string | null>>>;
  apiResponse: any;  // you can replace 'any' with the type of your API response
  setApiResponse: React.Dispatch<React.SetStateAction<any>>;  // same here
};

const DataContext = createContext<DataContextProps | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<Record<string, string | null>>({});
  const [apiResponse, setApiResponse] = useState<any>(null);  // initialize to null or some initial value

  return (
    <DataContext.Provider value={{ formData, setFormData, apiResponse, setApiResponse }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
