import type { Contact } from '../types/contact'

type ContactListProps = {
  contacts: Contact[]
  onEdit: (contact: Contact) => void
  onDelete: (id: string) => void
}

export function ContactList({ contacts, onEdit, onDelete }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="empty-state">
        Nenhum contato cadastrado ainda. Preencha o formulario para comecar.
      </div>
    )
  }

  return (
    <section className="contact-list">
      {contacts.map((contact) => (
        <article key={contact.id} className="contact-card">
          <h3>
            {contact.firstName} {contact.lastName}
          </h3>
          <p>
            <strong>Telefone-1:</strong> {contact.phone1}
          </p>
          <p>
            <strong>Telefone-2:</strong> {contact.phone2 || '-'}
          </p>
          <p>
            <strong>E-mail:</strong> {contact.email}
          </p>
          <p>
            <strong>Endereco:</strong> {contact.address}
          </p>
          <div className="card-actions">
            <button type="button" onClick={() => onEdit(contact)}>
              Editar
            </button>
            <button
              type="button"
              className="btn-danger"
              onClick={() => onDelete(contact.id)}
            >
              Excluir
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}
