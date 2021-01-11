/*

undefined
A place, as a location-name pair with name and address

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from './units-geo';
import * as Address_ from './address';
import * as Station_ from './station';

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

export const schemaId = 'http://maasglobal.com/core/components/place.json';

// Place
// The default export. More information at the top.
export type Place = t.Branded<
  Record<string, unknown> & {
    lat: Defined;
    lon: Defined;
  } & (UnitsGeo_.RelaxedLocation &
      ({
        name?: Address_.PlaceName;
        address?: Address_.ComponentAddress;
        localeAddress?: string;
        stopId?: string;
        stopCode?: string;
        stationId?: string;
        facilities?: Array<string>;
        openingHours?: Station_.OpeningHours;
        zone?: Station_.Zone;
      } & Record<string, unknown>)),
  PlaceBrand
>;
export type PlaceC = t.BrandC<
  t.IntersectionC<
    [
      t.RecordC<t.StringC, t.UnknownC>,
      t.TypeC<{
        lat: typeof Defined;
        lon: typeof Defined;
      }>,
      t.IntersectionC<
        [
          typeof UnitsGeo_.RelaxedLocation,
          t.IntersectionC<
            [
              t.PartialC<{
                name: typeof Address_.PlaceName;
                address: typeof Address_.ComponentAddress;
                localeAddress: t.StringC;
                stopId: t.StringC;
                stopCode: t.StringC;
                stationId: t.StringC;
                facilities: t.ArrayC<t.StringC>;
                openingHours: typeof Station_.OpeningHours;
                zone: typeof Station_.Zone;
              }>,
              t.RecordC<t.StringC, t.UnknownC>,
            ]
          >,
        ]
      >,
    ]
  >,
  PlaceBrand
>;
export const Place: PlaceC = t.brand(
  t.intersection([
    t.record(t.string, t.unknown),
    t.type({
      lat: Defined,
      lon: Defined,
    }),
    t.intersection([
      UnitsGeo_.RelaxedLocation,
      t.intersection([
        t.partial({
          name: Address_.PlaceName,
          address: Address_.ComponentAddress,
          localeAddress: t.string,
          stopId: t.string,
          stopCode: t.string,
          stationId: t.string,
          facilities: t.array(t.string),
          openingHours: Station_.OpeningHours,
          zone: Station_.Zone,
        }),
        t.record(t.string, t.unknown),
      ]),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    Record<string, unknown> & {
      lat: Defined;
      lon: Defined;
    } & (UnitsGeo_.RelaxedLocation &
        ({
          name?: Address_.PlaceName;
          address?: Address_.ComponentAddress;
          localeAddress?: string;
          stopId?: string;
          stopCode?: string;
          stationId?: string;
          facilities?: Array<string>;
          openingHours?: Station_.OpeningHours;
          zone?: Station_.Zone;
        } & Record<string, unknown>)),
    PlaceBrand
  > => true,
  'Place',
);
export interface PlaceBrand {
  readonly Place: unique symbol;
}

export default Place;

// Success
