/*

undefined
MaaS coupon redeem

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Code_ from '../../code';
import * as Subscription_ from '../../../subscriptions/subscription';

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

export const schemaId =
  'http://maasglobal.com/maas-backend/coupons/v2/coupons-redeem/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  ({
    code?: Code_.Code;
    success?: boolean;
    data?: {
      subscription?: Subscription_.Subscription;
    };
  } & Record<string, unknown>) & {
    code: Defined;
    success: Defined;
    data: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            code: typeof Code_.Code;
            success: t.BooleanC;
            data: t.PartialC<{
              subscription: typeof Subscription_.Subscription;
            }>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        code: typeof Defined;
        success: typeof Defined;
        data: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        code: Code_.Code,
        success: t.boolean,
        data: t.partial({
          subscription: Subscription_.Subscription,
        }),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      code: Defined,
      success: Defined,
      data: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      code?: Code_.Code;
      success?: boolean;
      data?: {
        subscription?: Subscription_.Subscription;
      };
    } & Record<string, unknown>) & {
      code: Defined;
      success: Defined;
      data: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
