// context/FormContext.js
import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const def = {
    price:"0.00",
    amount:"0.00",
    type:"good",
    postOnly:false
  }
  const [formData, setFormData] = useState(def);

  const updateFormData = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const reset = ()=>{
    setFormData(def)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData,reset }}>
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