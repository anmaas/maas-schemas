/*

undefined
Maas Itinerary cancellation response

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';


export const schemaId = 'http://maasglobal.com/maas-backend/itineraries/itinerary-cancel/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<unknown, ResponseBrand>
export const Response = t.brand(t.unknown, (x): x is t.Branded<unknown, ResponseBrand> => true, 'Response')
export interface ResponseBrand {
  readonly Response: unique symbol
}

export default Response;

// Success
