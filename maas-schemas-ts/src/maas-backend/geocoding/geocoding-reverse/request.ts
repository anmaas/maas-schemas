/*

undefined
MaaS geocoding query request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as I18n_ from 'maas-schemas-ts/core/components/i18n';
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


export const schemaId = 'http://maasglobal.com/maas-backend/geocoding/geocoding-reverse/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  payload?:
    (
    & {
    lat?: UnitsGeo_.RelaxedLatitude,
    lon?: UnitsGeo_.RelaxedLongitude,
    count?: number,
    radius?: UnitsGeo_.Distance,
    locale?: I18n_.Locale
  }
    & {
    lat: Defined,
    lon: Defined
  }
    ),
  headers?: ApiCommon_.Headers
}
  & {
  payload: Defined
}
  ), RequestBrand>
export const Request = t.brand(t.intersection([
  t.partial({
    identityId: Units_.IdentityId,
    payload: t.intersection([
      t.partial({
        lat: UnitsGeo_.RelaxedLatitude,
        lon: UnitsGeo_.RelaxedLongitude,
        count: t.number,
        radius: UnitsGeo_.Distance,
        locale: I18n_.Locale
      }),
      t.type({
        lat: Defined,
        lon: Defined
      })
    ]),
    headers: ApiCommon_.Headers
  }),
  t.type({
    payload: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  identityId?: Units_.IdentityId,
  payload?:
    (
    & {
    lat?: UnitsGeo_.RelaxedLatitude,
    lon?: UnitsGeo_.RelaxedLongitude,
    count?: number,
    radius?: UnitsGeo_.Distance,
    locale?: I18n_.Locale
  }
    & {
    lat: Defined,
    lon: Defined
  }
    ),
  headers?: ApiCommon_.Headers
}
  & {
  payload: Defined
}
  ), RequestBrand> => true, 'Request')
export interface RequestBrand {
  readonly Request: unique symbol
}

export default Request;

// Success
