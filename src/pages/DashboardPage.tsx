import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactForm } from '../components/ContactForm'
import { ContactList } from '../components/ContactList'
import { Layout } from '../components/Layout'
import { authStorage, contactStorage } from '../services/contactStorage'
import type { Contact, ContactPayload } from '../types/contact'

export function DashboardPage() {
  const navigate = useNavigate()
  const [contacts, setContacts] = useState<Contact[]>(contactStorage.list())
  const [editingContactId, setEditingContactId] = useState<string | null>(null)

  const editingContact = useMemo(
    () => contacts.find((contact) => contact.id === editingContactId) ?? null,
    [contacts, editingContactId],
  )

  const refreshContacts = () => {
    setContacts(contactStorage.list())
  }

  const handleSubmit = (payload: ContactPayload) => {
    if (editingContactId) {
      contactStorage.update(editingContactId, payload)
      setEditingContactId(null)
      refreshContacts()
      return
    }
    contactStorage.create(payload)
    refreshContacts()
  }

  const handleDelete = (id: string) => {
    contactStorage.remove(id)
    if (editingContactId === id) {
      setEditingContactId(null)
    }
    refreshContacts()
  }

  const handleLogout = () => {
    authStorage.logout()
    navigate('/login')
  }

  return (
    <Layout
      title="Dashboard"
      description="Aqui voce pode criar, editar e excluir contatos."
    >
      <section className="dashboard-tools">
        <button className="btn-secondary" type="button" onClick={handleLogout}>
          Sair
        </button>
      </section>

      <section className="dashboard-grid">
        <div className="panel">
          <h2>{editingContact ? 'Editar contato' : 'Novo contato'}</h2>
          <ContactForm
            key={editingContact?.id ?? 'new-contact-form'}
            initialContact={editingContact}
            onSubmit={handleSubmit}
            onCancelEdit={() => setEditingContactId(null)}
          />
        </div>

        <div className="panel">
          <h2>Contatos ({contacts.length})</h2>
          <ContactList
            contacts={contacts}
            onEdit={(contact) => setEditingContactId(contact.id)}
            onDelete={handleDelete}
          />
        </div>
      </section>
    </Layout>
  )
}
