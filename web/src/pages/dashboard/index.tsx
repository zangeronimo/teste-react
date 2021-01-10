import React, { useEffect, useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';
import ContactList from '../../components/ContactList';
import FormPage from '../../components/FormPage';
import Nav from '../../components/Nav';
import { useForm } from '../../hooks/form';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

export interface ContactData {
  id?: number;
  name: string;
  email: string;
  birthday: string;
}

const Dashboard = () => {
  const { addToast } = useToast();
  const [contacts, setContacts] = useState<[ContactData]>([{} as ContactData]);
  const { refreshList, filter } = useForm();

  useEffect(() => {
    const search = filter ? `?filter=${filter}` : '';
    api
      .get(`contacts${search}`)
      .then(result => {
        setContacts(result.data);
      })
      .catch(() => {
        addToast({
          type: 'error',
          title: 'Falha',
          description: 'Falha ao acessar o backend',
        });
      });
  }, [addToast, refreshList, filter]);

  return (
    <div className="App">
      <Nav />
      <FormPage />
      <ContactList list={contacts} />
      <FaAddressBook id="background_icon" />
    </div>
  );
};

export default Dashboard;
