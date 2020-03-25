/*

undefined
MaaS customer retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';


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


export const schemaId = 'http://maasglobal.com/maas-backend/customers/payment-sources/delete/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  customerId?: Units_.IdentityId,
  paymentSourceId?: PaymentSource_.PaymentSourceId,
  headers?: ApiCommon_.Headers
}
  & {
  identityId: Defined,
  customerId: Defined,
  headers: Defined
}
  ), RequestBrand>
export const Request = t.brand(t.intersection([
  t.partial({
    identityId: Units_.IdentityId,
    customerId: Units_.IdentityId,
    paymentSourceId: PaymentSource_.PaymentSourceId,
    headers: ApiCommon_.Headers
  }),
  t.type({
    identityId: Defined,
    customerId: Defined,
    headers: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  customerId?: Units_.IdentityId,
  paymentSourceId?: PaymentSource_.PaymentSourceId,
  headers?: ApiCommon_.Headers
}
  & {
  identityId: Defined,
  customerId: Defined,
  headers: Defined
}
  ), RequestBrand> => true, 'Request')
export interface RequestBrand {
  readonly Request: unique symbol
}

export default Request;

// Success
