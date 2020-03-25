/*

undefined
Request schema for bookings-create v2

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Response_ from 'maas-schemas-ts/maas-backend/bookings/bookings-agency-options/response';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
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


export const schemaId = 'http://maasglobal.com/maas-backend/bookings/v2/bookings-create/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  payload?:
    (
    & {
    paymentSourceId?: Common_.PaymentSourceId,
    booking?: Response_.Option,
    customerSelection?: CustomerSelection_.CustomerSelection
  }
    & {
    paymentSourceId: Defined
  }
    ),
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
    payload: t.intersection([
      t.partial({
        paymentSourceId: Common_.PaymentSourceId,
        booking: Response_.Option,
        customerSelection: CustomerSelection_.CustomerSelection
      }),
      t.type({
        paymentSourceId: Defined
      })
    ]),
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
  payload?:
    (
    & {
    paymentSourceId?: Common_.PaymentSourceId,
    booking?: Response_.Option,
    customerSelection?: CustomerSelection_.CustomerSelection
  }
    & {
    paymentSourceId: Defined
  }
    ),
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
