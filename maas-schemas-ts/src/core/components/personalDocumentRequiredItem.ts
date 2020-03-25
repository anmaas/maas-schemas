/*

undefined
MaaS personal document TSP requirements specification

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';


export const schemaId = 'http://maasglobal.com/core/components/personalDocumentRequiredItem.json';

// PersonalDocumentRequiredItem
// The default export. More information at the top.
export type PersonalDocumentRequiredItem = t.Branded<{
  type?:
    (
    | 'allOf'
    | 'anyOf'
    ),
  items?: Array<string>
}, PersonalDocumentRequiredItemBrand>
export const PersonalDocumentRequiredItem = t.brand(t.partial({
  type: t.union([
    t.literal('allOf'),
    t.literal('anyOf')
  ]),
  items: t.array(t.string)
}), (x): x is t.Branded<{
  type?:
    (
    | 'allOf'
    | 'anyOf'
    ),
  items?: Array<string>
}, PersonalDocumentRequiredItemBrand> => true, 'PersonalDocumentRequiredItem')
export interface PersonalDocumentRequiredItemBrand {
  readonly PersonalDocumentRequiredItem: unique symbol
}

export default PersonalDocumentRequiredItem;

// Success
