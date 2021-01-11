/*

undefined
MaaS push notification response schema.

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from '../../core/components/units';

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
  'http://maasglobal.com/maas-backend/push-notification/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    identityId?: Units_.IdentityId;
    results?: {
      successCount?: number;
      failureCount?: number;
    } & {
      successCount: Defined;
      failureCount: Defined;
    };
  } & {
    identityId: Defined;
    results: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        results: t.IntersectionC<
          [
            t.PartialC<{
              successCount: t.NumberC;
              failureCount: t.NumberC;
            }>,
            t.TypeC<{
              successCount: typeof Defined;
              failureCount: typeof Defined;
            }>,
          ]
        >;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        results: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      results: t.intersection([
        t.partial({
          successCount: t.number,
          failureCount: t.number,
        }),
        t.type({
          successCount: Defined,
          failureCount: Defined,
        }),
      ]),
    }),
    t.type({
      identityId: Defined,
      results: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      results?: {
        successCount?: number;
        failureCount?: number;
      } & {
        successCount: Defined;
        failureCount: Defined;
      };
    } & {
      identityId: Defined;
      results: Defined;
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
