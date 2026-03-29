export type Contact = {
  id: string
  firstName: string
  lastName: string
  phone1: string
  phone2: string
  email: string
  address: string
}

export type ContactPayload = Omit<Contact, 'id'>
