/*

undefined
Request schema for products-providers-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Units_ from 'maas-schemas-ts/core/components/units';
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


export const schemaId = 'http://maasglobal.com/maas-backend/products/products-providers-retrieve/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  (
  & {
  agencyId?: Common_.AgencyId
}
  & {
  agencyId: Defined
}
  ), PayloadBrand>
export const Payload = t.brand(t.intersection([
  t.partial({
    agencyId: Common_.AgencyId
  }),
  t.type({
    agencyId: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  agencyId?: Common_.AgencyId
}
  & {
  agencyId: Defined
}
  ), PayloadBrand> => true, 'Payload')
export interface PayloadBrand {
  readonly Payload: unique symbol
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  payload?: Payload,
  headers?: ApiCommon_.Headers
}
  & {
  identityId: Defined,
  payload: Defined
}
  ), RequestBrand>
export const Request = t.brand(t.intersection([
  t.partial({
    identityId: Units_.IdentityId,
    payload: Payload,
    headers: ApiCommon_.Headers
  }),
  t.type({
    identityId: Defined,
    payload: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  payload?: Payload,
  headers?: ApiCommon_.Headers
}
  & {
  identityId: Defined,
  payload: Defined
}
  ), RequestBrand> => true, 'Request')
export interface RequestBrand {
  readonly Request: unique symbol
}

export default Request;

// Success
