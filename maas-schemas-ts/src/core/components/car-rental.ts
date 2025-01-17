/*

undefined
Base schema for MODE_CAR* metas

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './units';
import * as ACRISS_ from './ACRISS';
import * as Ajv_ from './ajv';
import * as UnitsGeo_ from './units-geo';
import * as Common_ from './common';

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

export interface NullBrand {
  readonly Null: unique symbol;
}
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

export const schemaId = 'http://maasglobal.com/core/components/car-rental.json';

// Instruction
// The purpose of this remains a mystery
export type Instruction = t.Branded<
  {
    title?: string;
    icon?: Units_.Url;
    text?: string;
    image?: Units_.Url;
  } & (
    | {
        title: Defined;
        text: Defined;
      }
    | {
        title: Defined;
        image: Defined;
      }
  ),
  InstructionBrand
>;
export type InstructionC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        title: t.StringC;
        icon: typeof Units_.Url;
        text: t.StringC;
        image: typeof Units_.Url;
      }>,
      t.UnionC<
        [
          t.TypeC<{
            title: typeof Defined;
            text: typeof Defined;
          }>,
          t.TypeC<{
            title: typeof Defined;
            image: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  InstructionBrand
>;
export const Instruction: InstructionC = t.brand(
  t.intersection([
    t.partial({
      title: t.string,
      icon: Units_.Url,
      text: t.string,
      image: Units_.Url,
    }),
    t.union([
      t.type({
        title: Defined,
        text: Defined,
      }),
      t.type({
        title: Defined,
        image: Defined,
      }),
    ]),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      title?: string;
      icon?: Units_.Url;
      text?: string;
      image?: Units_.Url;
    } & (
      | {
          title: Defined;
          text: Defined;
        }
      | {
          title: Defined;
          image: Defined;
        }
    ),
    InstructionBrand
  > => true,
  'Instruction',
);
export interface InstructionBrand {
  readonly Instruction: unique symbol;
}

// CarRental
// The default export. More information at the top.
export type CarRental = t.Branded<
  {
    id?: string;
    name?: string;
    description?: string;
    image?: Units_.Url;
    vendor?: {
      voucher?: unknown;
    };
    terms?: unknown;
    car?: {
      passengers?: number;
      doors?: Array<number>;
      luggage?: Array<number>;
      transmission?: 'manual' | 'automatic' | Null;
      fuel?:
        | 'diesel'
        | 'electric'
        | 'ethanol'
        | 'gasoline'
        | 'hybrid'
        | 'hydrogen'
        | 'lpg'
        | 'multifuel'
        | Null;
      classification?: ACRISS_.ACRISS | Ajv_.StringCoarsedNull;
      registrationPlate?: string;
      damage?: string;
      fuelLevel?: number;
      location?: UnitsGeo_.Location;
    } & {
      classification: Defined;
    };
    pickupInfo?: Common_.HtmlBlock;
    returnInfo?: Common_.HtmlBlock;
    startEndGeoRegionUrl?: Units_.Url;
    instructions?: Array<Instruction>;
  } & {
    name: Defined;
    description: Defined;
    image: Defined;
  },
  CarRentalBrand
>;
export type CarRentalC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        name: t.StringC;
        description: t.StringC;
        image: typeof Units_.Url;
        vendor: t.PartialC<{
          voucher: t.UnknownC;
        }>;
        terms: t.UnknownC;
        car: t.IntersectionC<
          [
            t.PartialC<{
              passengers: t.NumberC;
              doors: t.ArrayC<t.NumberC>;
              luggage: t.ArrayC<t.NumberC>;
              transmission: t.UnionC<
                [t.LiteralC<'manual'>, t.LiteralC<'automatic'>, typeof Null]
              >;
              fuel: t.UnionC<
                [
                  t.LiteralC<'diesel'>,
                  t.LiteralC<'electric'>,
                  t.LiteralC<'ethanol'>,
                  t.LiteralC<'gasoline'>,
                  t.LiteralC<'hybrid'>,
                  t.LiteralC<'hydrogen'>,
                  t.LiteralC<'lpg'>,
                  t.LiteralC<'multifuel'>,
                  typeof Null,
                ]
              >;
              classification: t.UnionC<
                [typeof ACRISS_.ACRISS, typeof Ajv_.StringCoarsedNull]
              >;
              registrationPlate: t.StringC;
              damage: t.StringC;
              fuelLevel: t.NumberC;
              location: typeof UnitsGeo_.Location;
            }>,
            t.TypeC<{
              classification: typeof Defined;
            }>,
          ]
        >;
        pickupInfo: typeof Common_.HtmlBlock;
        returnInfo: typeof Common_.HtmlBlock;
        startEndGeoRegionUrl: typeof Units_.Url;
        instructions: t.ArrayC<typeof Instruction>;
      }>,
      t.TypeC<{
        name: typeof Defined;
        description: typeof Defined;
        image: typeof Defined;
      }>,
    ]
  >,
  CarRentalBrand
>;
export const CarRental: CarRentalC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      name: t.string,
      description: t.string,
      image: Units_.Url,
      vendor: t.partial({
        voucher: t.unknown,
      }),
      terms: t.unknown,
      car: t.intersection([
        t.partial({
          passengers: t.number,
          doors: t.array(t.number),
          luggage: t.array(t.number),
          transmission: t.union([t.literal('manual'), t.literal('automatic'), Null]),
          fuel: t.union([
            t.literal('diesel'),
            t.literal('electric'),
            t.literal('ethanol'),
            t.literal('gasoline'),
            t.literal('hybrid'),
            t.literal('hydrogen'),
            t.literal('lpg'),
            t.literal('multifuel'),
            Null,
          ]),
          classification: t.union([ACRISS_.ACRISS, Ajv_.StringCoarsedNull]),
          registrationPlate: t.string,
          damage: t.string,
          fuelLevel: t.number,
          location: UnitsGeo_.Location,
        }),
        t.type({
          classification: Defined,
        }),
      ]),
      pickupInfo: Common_.HtmlBlock,
      returnInfo: Common_.HtmlBlock,
      startEndGeoRegionUrl: Units_.Url,
      instructions: t.array(Instruction),
    }),
    t.type({
      name: Defined,
      description: Defined,
      image: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      name?: string;
      description?: string;
      image?: Units_.Url;
      vendor?: {
        voucher?: unknown;
      };
      terms?: unknown;
      car?: {
        passengers?: number;
        doors?: Array<number>;
        luggage?: Array<number>;
        transmission?: 'manual' | 'automatic' | Null;
        fuel?:
          | 'diesel'
          | 'electric'
          | 'ethanol'
          | 'gasoline'
          | 'hybrid'
          | 'hydrogen'
          | 'lpg'
          | 'multifuel'
          | Null;
        classification?: ACRISS_.ACRISS | Ajv_.StringCoarsedNull;
        registrationPlate?: string;
        damage?: string;
        fuelLevel?: number;
        location?: UnitsGeo_.Location;
      } & {
        classification: Defined;
      };
      pickupInfo?: Common_.HtmlBlock;
      returnInfo?: Common_.HtmlBlock;
      startEndGeoRegionUrl?: Units_.Url;
      instructions?: Array<Instruction>;
    } & {
      name: Defined;
      description: Defined;
      image: Defined;
    },
    CarRentalBrand
  > => true,
  'CarRental',
);
export interface CarRentalBrand {
  readonly CarRental: unique symbol;
}

export default CarRental;

// Success
