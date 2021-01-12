import React, { useCallback } from 'react';
import {
  FaAt,
  FaBirthdayCake,
  FaEdit,
  FaTools,
  FaTrash,
  FaUser,
} from 'react-icons/fa';
import { useForm } from '../../hooks/form';
import { useToast } from '../../hooks/toast';
import { ContactData } from '../../pages/dashboard';
import api from '../../services/api';
import './styles.css';

interface ContactListProps {
  list: [ContactData];
}

const ContactList: React.FC<ContactListProps> = ({ list }) => {
  const { show, setEditContact, refreshList, setRefreshList } = useForm();
  const { addToast } = useToast();

  const handleEdit = useCallback(
    (contact: ContactData) => {
      // se existe birth, converte para padrão input type=Date
      let { birth } = contact;
      if (birth) {
        birth = new Intl.DateTimeFormat('fr-ca', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }).format(new Date(Date.parse(birth)));
      }
      setEditContact({ ...contact, birth });
      show();
    },
    [setEditContact, show],
  );

  const handleDelete = useCallback(
    (contact: ContactData) => {
      const { id } = contact;

      api
        .delete(`contacts/${id}`)
        .then(() => {
          setRefreshList(!refreshList);

          addToast({
            type: 'success',
            title: 'Removido!',
            description: 'Contato removido com sucesso!',
          });
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Falha',
            description: 'Falha ao remover contato',
          });
        });
    },
    [setRefreshList, addToast, refreshList],
  );

  return (
    <div id="contact_list">
      <div className="table">
        <div className="row header blue">
          <div className="cell">
            <FaUser /> Nome
          </div>
          <div className="cell">
            <FaAt /> E-mail
          </div>
          <div className="cell">
            <FaBirthdayCake /> Nascimento
          </div>
          <div className="cell center">
            <FaTools />
          </div>
        </div>

        {list &&
          list.map((item, index) => {
            return (
              <div key={index} className="row">
                <div className="cell" data-title="Nome">
                  {item.name}
                </div>
                <div className="cell" data-title="E-mail">
                  {item.email}
                </div>
                <div className="cell" data-title="Nascimento">
                  {item.formatedBirth}
                </div>
                <div className="cell tools" data-title="">
                  <button
                    className="edit"
                    onClick={() => handleEdit(item)}
                    type="button"
                  >
                    <FaEdit />
                    Editar
                  </button>
                  <button
                    className="remove"
                    type="button"
                    onClick={() => {
                      if (confirm('Deseja remover o contato?'))
                        handleDelete(item);
                    }}
                  >
                    <FaTrash />
                    Excluir
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ContactList;
