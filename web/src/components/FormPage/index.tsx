import React, { useCallback, useEffect, useRef } from 'react';

import * as Yup from 'yup';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useForm } from '../../hooks/form';
import { useToast } from '../../hooks/toast';
import Input from '../Input';

import './styles.css';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormData {
  id?: string;
  name: string;
  email: string;
  birth?: string;
}

const FormPage: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const {
    isOpened,
    hide,
    editContact,
    refreshList,
    setRefreshList,
  } = useForm();

  useEffect(() => {
    formRef.current?.setData(editContact);
  }, [editContact]);

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // verifica se existe birth
        if (!data.birth) {
          delete data.birth;
        }

        if (editContact.id) {
          const { id } = editContact;
          // Adiciona ID ao formulário
          const editData = { ...data, id };

          // Edita contato
          await api.put(`/contacts/${id}`, editData);
        } else {
          // Cria novo contato
          await api.post('/contacts', data);
        }

        addToast({
          type: 'success',
          title: 'Salvo!',
          description: 'Formulário salvo com sucesso!',
        });

        setRefreshList(!refreshList);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        });
      }
    },
    [addToast, editContact, refreshList, setRefreshList],
  );

  return isOpened ? (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div id="form">
        <div className="fields">
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input type="date" name="birth" placeholder="Data de Nascimento" />
        </div>
        <div className="tools">
          <button type="submit" className="save">
            Salvar
          </button>
          <button type="button" className="cancel" onClick={() => hide()}>
            Cancelar
          </button>
        </div>
      </div>
    </Form>
  ) : null;
};

export default FormPage;
