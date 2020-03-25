/*

undefined
MaaS customer update

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Customer_ from 'maas-schemas-ts/maas-backend/customers/customer';


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


export const schemaId = 'http://maasglobal.com/maas-backend/customers/update/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  (
  & {
  customer?: Customer_.Customer
}
  & {
  customer: Defined
}
  ), ResponseBrand>
export const Response = t.brand(t.intersection([
  t.partial({
    customer: Customer_.Customer
  }),
  t.type({
    customer: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  customer?: Customer_.Customer
}
  & {
  customer: Defined
}
  ), ResponseBrand> => true, 'Response')
export interface ResponseBrand {
  readonly Response: unique symbol
}

export default Response;

// Success
