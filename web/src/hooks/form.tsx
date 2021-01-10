import React, { createContext, useCallback, useContext, useState } from 'react';
import { ContactData } from '../pages/dashboard';

interface FormContextData {
  isOpened: boolean;
  show(): void;
  hide(): void;
  editContact: ContactData;
  setEditContact(contact: ContactData): void;
  refreshList: boolean;
  setRefreshList(value: boolean): void;
  filter: string;
  setFilter(value: string): void;
}

const emptyUser = {} as ContactData;

const FormContext = createContext<FormContextData>({} as FormContextData);

const FormProvider: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [editContact, setEditContact] = useState<ContactData>(emptyUser);
  const [refreshList, setRefreshList] = useState(false);
  const [filter, setFilter] = useState('');

  const show = useCallback(() => {
    setIsOpened(true);
  }, []);

  const hide = useCallback(() => {
    setEditContact(emptyUser);
    setIsOpened(false);
  }, []);

  return (
    <FormContext.Provider
      value={{
        isOpened,
        show,
        hide,
        editContact,
        setEditContact,
        refreshList,
        setRefreshList,
        filter,
        setFilter,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context;
}

export { FormProvider, useForm };
