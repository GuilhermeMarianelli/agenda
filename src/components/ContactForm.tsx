import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { Contact, ContactPayload } from '../types/contact'

type ContactFormProps = {
  initialContact?: Contact | null
  onSubmit: (payload: ContactPayload) => void
  onCancelEdit: () => void
}

const emptyForm: ContactPayload = {
  firstName: '',
  lastName: '',
  phone1: '',
  phone2: '',
  email: '',
  address: '',
}

const toPayload = (contact?: Contact | null): ContactPayload => {
  if (!contact) {
    return emptyForm
  }

  const { id: _id, ...payload } = contact
  void _id
  return payload
}

export function ContactForm({
  initialContact,
  onSubmit,
  onCancelEdit,
}: ContactFormProps) {
  const [formData, setFormData] = useState<ContactPayload>(toPayload(initialContact))

  const handleChange =
    (field: keyof ContactPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(formData)
    setFormData(emptyForm)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Nome
          <input
            value={formData.firstName}
            onChange={handleChange('firstName')}
            required
          />
        </label>

        <label>
          Sobrenome
          <input
            value={formData.lastName}
            onChange={handleChange('lastName')}
            required
          />
        </label>

        <label>
          Telefone-1
          <input
            value={formData.phone1}
            onChange={handleChange('phone1')}
            required
          />
        </label>

        <label>
          Telefone-2
          <input value={formData.phone2} onChange={handleChange('phone2')} />
        </label>

        <label>
          E-mail
          <input
            type="email"
            value={formData.email}
            onChange={handleChange('email')}
            required
          />
        </label>

        <label className="full">
          Endereco
          <textarea
            rows={3}
            value={formData.address}
            onChange={handleChange('address')}
            required
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">{initialContact ? 'Salvar edicao' : 'Cadastrar'}</button>
        {initialContact && (
          <button type="button" className="btn-secondary" onClick={onCancelEdit}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}
