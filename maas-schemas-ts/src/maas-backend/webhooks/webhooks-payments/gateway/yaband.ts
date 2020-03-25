/*

undefined
YaBand payment webhook schema

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


export const schemaId = 'http://maasglobal.com/maas-backend/webhooks/webhooks-payments/gateway/yaband.json';

// Request
// The purpose of this remains a mystery
export type Request = t.Branded<
  (
  & {
  payload?:
    (
    & {
    sign?: string,
    data?:
      (
      & {
      type?: string,
      order_id?: string,
      trade_id?: string,
      transaction_id?: string,
      state?: string
    }
      & {
      type: Defined,
      order_id: Defined,
      state: Defined
    }
      )
  }
    & {
    sign: Defined,
    data: Defined
  }
    ),
  headers?: {

  },
  params?:
    (
    & {
    gatewayName?:
      (
      & string
      & 'yaband'
      )
  }
    & {
    gatewayName: Defined
  }
    )
}
  & {
  params: Defined,
  payload: Defined
}
  ), RequestBrand>
export const Request = t.brand(t.intersection([
  t.partial({
    payload: t.intersection([
      t.partial({
        sign: t.string,
        data: t.intersection([
          t.partial({
            type: t.string,
            order_id: t.string,
            trade_id: t.string,
            transaction_id: t.string,
            state: t.string
          }),
          t.type({
            type: Defined,
            order_id: Defined,
            state: Defined
          })
        ])
      }),
      t.type({
        sign: Defined,
        data: Defined
      })
    ]),
    headers: t.type({

    }),
    params: t.intersection([
      t.partial({
        gatewayName: t.intersection([
          t.string,
          t.literal('yaband')
        ])
      }),
      t.type({
        gatewayName: Defined
      })
    ])
  }),
  t.type({
    params: Defined,
    payload: Defined
  })
]), (x): x is t.Branded<
  (
  & {
  payload?:
    (
    & {
    sign?: string,
    data?:
      (
      & {
      type?: string,
      order_id?: string,
      trade_id?: string,
      transaction_id?: string,
      state?: string
    }
      & {
      type: Defined,
      order_id: Defined,
      state: Defined
    }
      )
  }
    & {
    sign: Defined,
    data: Defined
  }
    ),
  headers?: {

  },
  params?:
    (
    & {
    gatewayName?:
      (
      & string
      & 'yaband'
      )
  }
    & {
    gatewayName: Defined
  }
    )
}
  & {
  params: Defined,
  payload: Defined
}
  ), RequestBrand> => true, 'Request')
export interface RequestBrand {
  readonly Request: unique symbol
}

// Yaband
// The default export. More information at the top.
export type Yaband = t.Branded<unknown, YabandBrand>
export const Yaband = t.brand(t.unknown, (x): x is t.Branded<unknown, YabandBrand> => true, 'Yaband')
export interface YabandBrand {
  readonly Yaband: unique symbol
}

export default Yaband;

// Success
