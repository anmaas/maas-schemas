/*

undefined
MaaS contact (customer and user) schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as Units_ from 'maas-schemas-ts/core/components/units';


type Defined =
  (
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null
  )
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null
])


export const schemaId = 'http://maasglobal.com/maas-backend/subscriptions/contact.json';

// IdentityId
// The purpose of this remains a mystery
export type IdentityId = Units_.IdentityId
export const IdentityId = Units_.IdentityId

// ContactBase
// The purpose of this remains a mystery
export type ContactBase = t.Branded<{
  identityId?: IdentityId,
  firstName?: Common_.PersonalName,
  lastName?: Common_.PersonalName,
  address?: Address_.Address,
  city?: Address_.City,
  zipCode?: Address_.ZipCode,
  country?: Address_.Country,
  phone?: Common_.Phone,
  email?: Common_.Email
}, ContactBaseBrand>
export const ContactBase = t.brand(t.partial({
  identityId: IdentityId,
  firstName: Common_.PersonalName,
  lastName: Common_.PersonalName,
  address: Address_.Address,
  city: Address_.City,
  zipCode: Address_.ZipCode,
  country: Address_.Country,
  phone: Common_.Phone,
  email: Common_.Email
}), (x): x is t.Branded<{
  identityId?: IdentityId,
  firstName?: Common_.PersonalName,
  lastName?: Common_.PersonalName,
  address?: Address_.Address,
  city?: Address_.City,
  zipCode?: Address_.ZipCode,
  country?: Address_.Country,
  phone?: Common_.Phone,
  email?: Common_.Email
}, ContactBaseBrand> => true, 'ContactBase')
export interface ContactBaseBrand {
  readonly ContactBase: unique symbol
}

// StripePaymentMethod
// The payment (gateway) method info; no credit cards here
export type StripePaymentMethod = t.Branded<
  (
  & {
  type?:
    (
    & string
    & 'stripe'
    ),
  token?: string
}
  & {
  type: Defined,
  token: Defined
}
  ), StripePaymentMethodBrand>
export const StripePaymentMethod = t.brand(t.intersection([
  t.partial({
    type: t.intersection([
      t.string,
      t.literal('stripe')
    ]),
    token: t.string
  }),
  t.type({
    type: Defined,
    token: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  type?:
    (
    & string
    & 'stripe'
    ),
  token?: string
}
  & {
  type: Defined,
  token: Defined
}
  ), StripePaymentMethodBrand> => true, 'StripePaymentMethod')
export interface StripePaymentMethodBrand {
  readonly StripePaymentMethod: unique symbol
}

// CreditCardPaymentMethod
// Credit card based payment (only for testing)
export type CreditCardPaymentMethod = t.Branded<
  (
  & {
  type?:
    (
    & string
    & 'card'
    ),
  number?: string,
  expiryMonth?: number,
  expiryYear?: number,
  cvv?: string
}
  & {
  type: Defined,
  number: Defined,
  expiryMonth: Defined,
  expiryYear: Defined,
  cvv: Defined
}
  ), CreditCardPaymentMethodBrand>
export const CreditCardPaymentMethod = t.brand(t.intersection([
  t.partial({
    type: t.intersection([
      t.string,
      t.literal('card')
    ]),
    number: t.string,
    expiryMonth: t.number,
    expiryYear: t.number,
    cvv: t.string
  }),
  t.type({
    type: Defined,
    number: Defined,
    expiryMonth: Defined,
    expiryYear: Defined,
    cvv: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  type?:
    (
    & string
    & 'card'
    ),
  number?: string,
  expiryMonth?: number,
  expiryYear?: number,
  cvv?: string
}
  & {
  type: Defined,
  number: Defined,
  expiryMonth: Defined,
  expiryYear: Defined,
  cvv: Defined
}
  ), CreditCardPaymentMethodBrand> => true, 'CreditCardPaymentMethod')
export interface CreditCardPaymentMethodBrand {
  readonly CreditCardPaymentMethod: unique symbol
}

// NewPaymentMethod
// The purpose of this remains a mystery
export type NewPaymentMethod = t.Branded<
  (
  | StripePaymentMethod
  | CreditCardPaymentMethod
  ), NewPaymentMethodBrand>
export const NewPaymentMethod = t.brand(t.union([
  StripePaymentMethod,
  CreditCardPaymentMethod
]), (x): x is t.Branded<
  (
  | StripePaymentMethod
  | CreditCardPaymentMethod
  ), NewPaymentMethodBrand> => true, 'NewPaymentMethod')
export interface NewPaymentMethodBrand {
  readonly NewPaymentMethod: unique symbol
}

// NewContact
// The purpose of this remains a mystery
export type NewContact = t.Branded<
  (
  & {
  identityId: Defined,
  phone: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: NewPaymentMethod
}
  )
  ), NewContactBrand>
export const NewContact = t.brand(t.intersection([
  t.type({
    identityId: Defined,
    phone: Defined
  }),
  t.intersection([
    ContactBase,
    t.partial({
      paymentMethod: NewPaymentMethod
    })
  ])
]), (x): x is t.Branded<
  (
  & {
  identityId: Defined,
  phone: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: NewPaymentMethod
}
  )
  ), NewContactBrand> => true, 'NewContact')
export interface NewContactBrand {
  readonly NewContact: unique symbol
}

// ContactUpdate
// The purpose of this remains a mystery
export type ContactUpdate = t.Branded<
  (
  & {
  identityId: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: NewPaymentMethod
}
  )
  ), ContactUpdateBrand>
export const ContactUpdate = t.brand(t.intersection([
  t.type({
    identityId: Defined
  }),
  t.intersection([
    ContactBase,
    t.partial({
      paymentMethod: NewPaymentMethod
    })
  ])
]), (x): x is t.Branded<
  (
  & {
  identityId: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: NewPaymentMethod
}
  )
  ), ContactUpdateBrand> => true, 'ContactUpdate')
export interface ContactUpdateBrand {
  readonly ContactUpdate: unique symbol
}

// PaymentMethodResponse
// The payment (gateway) method info; no credit cards here
export type PaymentMethodResponse = t.Branded<
  (
  & {
  type?: string,
  valid?: boolean
}
  & {
  type: Defined,
  valid: Defined
}
  ), PaymentMethodResponseBrand>
export const PaymentMethodResponse = t.brand(t.intersection([
  t.partial({
    type: t.string,
    valid: t.boolean
  }),
  t.type({
    type: Defined,
    valid: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  type?: string,
  valid?: boolean
}
  & {
  type: Defined,
  valid: Defined
}
  ), PaymentMethodResponseBrand> => true, 'PaymentMethodResponse')
export interface PaymentMethodResponseBrand {
  readonly PaymentMethodResponse: unique symbol
}

// ContactResponse
// The purpose of this remains a mystery
export type ContactResponse = t.Branded<
  (
  & {
  identityId: Defined,
  phone: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: PaymentMethodResponse
}
  )
  ), ContactResponseBrand>
export const ContactResponse = t.brand(t.intersection([
  t.type({
    identityId: Defined,
    phone: Defined
  }),
  t.intersection([
    ContactBase,
    t.partial({
      paymentMethod: PaymentMethodResponse
    })
  ])
]), (x): x is t.Branded<
  (
  & {
  identityId: Defined,
  phone: Defined
}
  & 
  (
  & ContactBase
  & {
  paymentMethod?: PaymentMethodResponse
}
  )
  ), ContactResponseBrand> => true, 'ContactResponse')
export interface ContactResponseBrand {
  readonly ContactResponse: unique symbol
}

// Contact
// The default export. More information at the top.
export type Contact = t.Branded<unknown, ContactBrand>
export const Contact = t.brand(t.unknown, (x): x is t.Branded<unknown, ContactBrand> => true, 'Contact')
export interface ContactBrand {
  readonly Contact: unique symbol
}

export default Contact;

// Success
