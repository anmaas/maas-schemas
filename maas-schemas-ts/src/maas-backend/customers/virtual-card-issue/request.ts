/*

undefined
MaaS customer virtual card issue async lambda request

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as ApiCommon_ from '../../../core/components/api-common';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/virtual-card-issue/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    payload?: {
      providerName?: string;
      initialBalance?: {
        amount?: number;
        currency?: Units_.Currency;
      } & {
        amount: Defined;
        currency: Defined;
      };
      rollbackOnFailure?: boolean;
    } & {
      providerName: Defined;
      rollbackOnFailure: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    customerId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          providerName: t.string,
          initialBalance: t.intersection([
            t.partial({
              amount: t.number,
              currency: Units_.Currency,
            }),
            t.type({
              amount: Defined,
              currency: Defined,
            }),
          ]),
          rollbackOnFailure: t.boolean,
        }),
        t.type({
          providerName: Defined,
          rollbackOnFailure: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      payload?: {
        providerName?: string;
        initialBalance?: {
          amount?: number;
          currency?: Units_.Currency;
        } & {
          amount: Defined;
          currency: Defined;
        };
        rollbackOnFailure?: boolean;
      } & {
        providerName: Defined;
        rollbackOnFailure: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      customerId: Defined;
      payload: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success