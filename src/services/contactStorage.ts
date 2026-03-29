import type { Contact, ContactPayload } from '../types/contact'

const CONTACTS_STORAGE_KEY = 'contacts-app:list'
const AUTH_STORAGE_KEY = 'contacts-app:auth'

const safeParseContacts = (value: string | null): Contact[] => {
  if (!value) {
    return []
  }

  try {
    const parsed = JSON.parse(value) as Contact[]
    if (!Array.isArray(parsed)) {
      return []
    }
    return parsed
  } catch {
    return []
  }
}

export const contactStorage = {
  list(): Contact[] {
    return safeParseContacts(localStorage.getItem(CONTACTS_STORAGE_KEY))
  },

  create(payload: ContactPayload): Contact {
    const current = contactStorage.list()
    const newContact: Contact = { id: crypto.randomUUID(), ...payload }
    const next = [newContact, ...current]
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(next))
    return newContact
  },

  update(id: string, payload: ContactPayload): Contact | null {
    const current = contactStorage.list()
    const index = current.findIndex((contact) => contact.id === id)
    if (index < 0) {
      return null
    }

    const updatedContact: Contact = { id, ...payload }
    current[index] = updatedContact
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(current))
    return updatedContact
  },

  remove(id: string): void {
    const next = contactStorage.list().filter((contact) => contact.id !== id)
    localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(next))
  },
}

export const authStorage = {
  login(): void {
    localStorage.setItem(AUTH_STORAGE_KEY, 'true')
  },

  logout(): void {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  },

  isAuthenticated(): boolean {
    return localStorage.getItem(AUTH_STORAGE_KEY) === 'true'
  },
}
