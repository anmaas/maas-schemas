/*

undefined
Request schema for initiating customer authorization for TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Common_ from '../../core/components/common';
import * as Units_ from '../../core/components/units';
import * as I18n_ from '../../core/components/i18n';

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'http://maasglobal.com/tsp/customer-auth/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  ({
    nonce?: Common_.EncodedQueryParam;
    returnUrl?: Units_.Url;
    locale?: I18n_.Locale;
  } & Record<string, unknown>) & {
    nonce: Defined;
    returnUrl: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            nonce: typeof Common_.EncodedQueryParam;
            returnUrl: typeof Units_.Url;
            locale: typeof I18n_.Locale;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        nonce: typeof Defined;
        returnUrl: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        nonce: Common_.EncodedQueryParam,
        returnUrl: Units_.Url,
        locale: I18n_.Locale,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      nonce: Defined,
      returnUrl: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      nonce?: Common_.EncodedQueryParam;
      returnUrl?: Units_.Url;
      locale?: I18n_.Locale;
    } & Record<string, unknown>) & {
      nonce: Defined;
      returnUrl: Defined;
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
