/*

undefined
Schema for MODE_TRANSIT meta field

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_TRANSIT.json';

// MODE_TRANSIT
// The default export. More information at the top.
export type MODE_TRANSIT = t.Branded<{}, MODE_TRANSITBrand>;
export const MODE_TRANSIT = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_TRANSITBrand> => true,
  'MODE_TRANSIT',
);
export interface MODE_TRANSITBrand {
  readonly MODE_TRANSIT: unique symbol;
}

export default MODE_TRANSIT;

// Success
