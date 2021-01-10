import React, { useCallback, useState } from 'react';
import { FaAddressBook, FaSearch, FaUserPlus } from 'react-icons/fa';
import { useForm } from '../../hooks/form';
import './styles.css';

const Nav: React.FC = () => {
  const [search, setSearch] = useState('');
  const {
    show,
    setEditContact,
    setFilter,
    refreshList,
    setRefreshList,
  } = useForm();

  const openNewContact = useCallback(() => {
    setEditContact({
      name: '',
      email: '',
      birthday: '',
    });
    show();
  }, [setEditContact, show]);

  const handleFilter = useCallback(() => {
    setFilter(search);
    setRefreshList(!refreshList);
  }, [setFilter, search, setRefreshList, refreshList]);

  return (
    <nav id="nav">
      <div className="logo">
        <FaAddressBook className="logo_icon" />
        <span>Meus Contatos</span>
      </div>

      <div className="tools">
        <button
          className="btn_transparent"
          type="button"
          onClick={() => openNewContact()}
        >
          <FaUserPlus size={32} />
        </button>
        <input
          type="text"
          value={search}
          placeholder="Filtrar"
          onChange={e => setSearch(e.target.value)}
        />
        <button type="button" onClick={() => handleFilter()}>
          <FaSearch color="#2a292b" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
