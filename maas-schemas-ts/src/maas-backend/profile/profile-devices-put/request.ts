/*

undefined
Request schema for profile-active-plan-put

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
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


export const schemaId = 'http://maasglobal.com/maas-backend/profile/profile-devices-put/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<{
  identityId?: Units_.IdentityId,
  payload?:
    (
    & {
    devicePushToken?: string,
    deviceIdentifier?: Units_.Uuid,
    deviceType?:
      (
      & string
      & 
      (
      | 'iOS'
      | 'Android'
      )
      )
  }
    & {
    devicePushToken: Defined,
    deviceIdentifier: Defined,
    deviceType: Defined
  }
    ),
  headers?: ApiCommon_.Headers
}, RequestBrand>
export const Request = t.brand(t.partial({
  identityId: Units_.IdentityId,
  payload: t.intersection([
    t.partial({
      devicePushToken: t.string,
      deviceIdentifier: Units_.Uuid,
      deviceType: t.intersection([
        t.string,
        t.union([
          t.literal('iOS'),
          t.literal('Android')
        ])
      ])
    }),
    t.type({
      devicePushToken: Defined,
      deviceIdentifier: Defined,
      deviceType: Defined
    })
  ]),
  headers: ApiCommon_.Headers
}), (x): x is t.Branded<{
  identityId?: Units_.IdentityId,
  payload?:
    (
    & {
    devicePushToken?: string,
    deviceIdentifier?: Units_.Uuid,
    deviceType?:
      (
      & string
      & 
      (
      | 'iOS'
      | 'Android'
      )
      )
  }
    & {
    devicePushToken: Defined,
    deviceIdentifier: Defined,
    deviceType: Defined
  }
    ),
  headers?: ApiCommon_.Headers
}, RequestBrand> => true, 'Request')
export interface RequestBrand {
  readonly Request: unique symbol
}

export default Request;

// Success
