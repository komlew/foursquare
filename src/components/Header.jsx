// @flow
import React from 'react';
import type { Node } from 'react';

import { HeadContainer } from '../styles/containers';
import {
  Header1,
  Form,
  Fieldset,
  Button,
  Label,
} from '../styles/headerElements';
import type { QueryParams } from '../types';

import InputTuple from './InputTuple';

type Props = {
  queryParams: QueryParams,
  getUserLocation: () => void,
  reSubmitQuery: () => void,
  onLocationChange: (e: SyntheticInputEvent<HTMLInputElement>) => void,
};

export default ({
  queryParams,
  getUserLocation,
  reSubmitQuery,
  onLocationChange,
}: Props): Node => (
  <HeadContainer>
    <Header1>Foursquare API App</Header1>
    <Form>
      <Fieldset>
        <Label for="locationRequest">Browser location</Label>
        <Button id="locationRequest" onClick={getUserLocation} type="button">
          {`Request`}
        </Button>
      </Fieldset>
      <InputTuple
        id="lat,lng"
        name="Latitude,Longitude"
        value={queryParams.ll}
        onChange={onLocationChange}
      />

      {/*
      // Additional parameters should be rendered here;
      // skipping this part due to the limited time
      */}

      {/*
      <QueryRadius value={queryParams.radius} />
      <QuerySection value={queryParams.section} />
      <QueryInput value={queryParams.query} />
      <QueryLimit value={queryParams.limit} />
      <QueryOffset value={queryParams.offset} />
      <QueryOpenNow value={queryParams.openNow} />
      <QuerySortByDistance value={queryParams.sortByDistance} />
      <QueryPrice value={queryParams.price} />
      */}

      <Fieldset>
        <Button onClick={reSubmitQuery} type="button">
          {`Apply`}
        </Button>
      </Fieldset>
    </Form>
  </HeadContainer>
);
