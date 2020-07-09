/*

undefined
MaaS customer favorite location listing response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as PartialFavoriteLocation_ from '../../../../core/partialFavoriteLocation';

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
  'http://maasglobal.com/maas-backend/customers/favorite-locations/list/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    favoriteLocations?: Array<
      PartialFavoriteLocation_.PartialFavoriteLocation & {
        type: Defined;
        name: Defined;
        location: Defined;
        id: Defined;
        identityId: Defined;
      }
    >;
  },
  ResponseBrand
>;
export const Response = t.brand(
  t.partial({
    favoriteLocations: t.array(
      t.intersection([
        PartialFavoriteLocation_.PartialFavoriteLocation,
        t.type({
          type: Defined,
          name: Defined,
          location: Defined,
          id: Defined,
          identityId: Defined,
        }),
      ]),
    ),
  }),
  (
    x,
  ): x is t.Branded<
    {
      favoriteLocations?: Array<
        PartialFavoriteLocation_.PartialFavoriteLocation & {
          type: Defined;
          name: Defined;
          location: Defined;
          id: Defined;
          identityId: Defined;
        }
      >;
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
