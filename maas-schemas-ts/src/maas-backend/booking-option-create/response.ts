/*

undefined
Response schema for booking-option-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';


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


export const schemaId = 'http://maasglobal.com/maas-backend/booking-option-create/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  (
  | 
  (
  & Array<unknown>
  & {
  bookings: Defined
}
  )
  | 
  (
  & Array<unknown>
  & {
  failures: Defined
}
  )
  ), ResponseBrand>
export const Response = t.brand(t.union([
  t.intersection([
    t.UnknownArray,
    t.type({
      bookings: Defined
    })
  ]),
  t.intersection([
    t.UnknownArray,
    t.type({
      failures: Defined
    })
  ])
]), (x): x is t.Branded<
  (
  | 
  (
  & Array<unknown>
  & {
  bookings: Defined
}
  )
  | 
  (
  & Array<unknown>
  & {
  failures: Defined
}
  )
  ), ResponseBrand> => true, 'Response')
export interface ResponseBrand {
  readonly Response: unique symbol
}

export default Response;

// Success
