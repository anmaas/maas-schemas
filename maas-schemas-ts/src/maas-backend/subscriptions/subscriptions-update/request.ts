/*

undefined
Request schema for subscriptions-update

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../../core/components/units';
import * as Subscription_ from '../subscription';
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
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-update/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    replace?: boolean;
    immediate?: boolean;
    payload?: Subscription_.SubscriptionUpdatePayload;
    headers?: ApiCommon_.Headers;
  } & {
    customerId: Defined;
    userId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      replace: t.boolean,
      immediate: t.boolean,
      payload: Subscription_.SubscriptionUpdatePayload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: Defined,
      userId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      replace?: boolean;
      immediate?: boolean;
      payload?: Subscription_.SubscriptionUpdatePayload;
      headers?: ApiCommon_.Headers;
    } & {
      customerId: Defined;
      userId: Defined;
      payload: Defined;
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
