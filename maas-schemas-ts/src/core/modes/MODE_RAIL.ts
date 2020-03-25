/*

undefined
Schema for MODE_RAIL meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Place_ from 'maas-schemas-ts/core/components/place';
import * as Station_ from 'maas-schemas-ts/core/components/station';


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


export const schemaId = 'http://maasglobal.com/core/modes/MODE_RAIL.json';

// MODE_RAIL
// The default export. More information at the top.
export type MODE_RAIL = t.Branded<{
  outward?:
    (
    & {
    id?: string,
    from?: Place_.Place,
    to?: Place_.Place
  }
    & {
    from: Defined,
    to: Defined
  }
    ),
  return?:
    (
    & {
    id?: string,
    from?: Place_.Place,
    to?: Place_.Place
  }
    & {
    from: Defined,
    to: Defined
  }
    ),
  deliveryMethod?: {
    name?: string,
    stationId?: Station_.Id,
    alternativeCollections?: string
  }
}, MODE_RAILBrand>
export const MODE_RAIL = t.brand(t.partial({
  outward: t.intersection([
    t.partial({
      id: t.string,
      from: Place_.Place,
      to: Place_.Place
    }),
    t.type({
      from: Defined,
      to: Defined
    })
  ]),
  return: t.intersection([
    t.partial({
      id: t.string,
      from: Place_.Place,
      to: Place_.Place
    }),
    t.type({
      from: Defined,
      to: Defined
    })
  ]),
  deliveryMethod: t.partial({
    name: t.string,
    stationId: Station_.Id,
    alternativeCollections: t.string
  })
}), (x): x is t.Branded<{
  outward?:
    (
    & {
    id?: string,
    from?: Place_.Place,
    to?: Place_.Place
  }
    & {
    from: Defined,
    to: Defined
  }
    ),
  return?:
    (
    & {
    id?: string,
    from?: Place_.Place,
    to?: Place_.Place
  }
    & {
    from: Defined,
    to: Defined
  }
    ),
  deliveryMethod?: {
    name?: string,
    stationId?: Station_.Id,
    alternativeCollections?: string
  }
}, MODE_RAILBrand> => true, 'MODE_RAIL')
export interface MODE_RAILBrand {
  readonly MODE_RAIL: unique symbol
}

export default MODE_RAIL;

// Success
