// context/FormContext.js
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    price:"0",
    amount:"0",
    type:"good",
    postOnly:false
  });

  const updateFormData = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext)
  // if(!context) 
  if(!context) throw new Error("useform must be used within a CoinsProvider")
  return context;
}