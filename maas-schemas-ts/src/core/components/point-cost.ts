/*

undefined
Subscription option's point cost

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';


export const schemaId = 'http://maasglobal.com/core/components/point-cost.json';

// PointCost
// The default export. More information at the top.
export type PointCost = t.Branded<number, PointCostBrand>
export const PointCost = t.brand(t.number, (x): x is t.Branded<number, PointCostBrand> => true, 'PointCost')
export interface PointCostBrand {
  readonly PointCost: unique symbol
}

export default PointCost;

// Success
