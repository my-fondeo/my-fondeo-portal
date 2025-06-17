import { useState } from 'react';

// Author: Juan Ayala
// Hook mejorado con manejo de errores por campo.
export const useForm = <T>(initialState: T) => {
  const [formValues, setFormValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const setValue = (values: Partial<T>) => {
    setFormValues(oldValues => ({
      ...oldValues,
      ...values
    }));
  };

  const setError = (field: keyof T, message: string) => {
    setErrors(prev => ({
      ...prev,
      [field]: message
    }));
  };

  const clearErrors = () => {
    setErrors({});
  };

  const clear = () => {
    setFormValues(initialState);
    clearErrors();
  };

  return {
    formValues,
    handleInputChange,
    setValue,
    clear,
    errors,
    setError,
    clearErrors
  };
};
