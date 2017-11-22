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
  Input,
} from '../styles/headerElements';
import type { QueryParams } from '../types';

type Props = {
  queryParams: QueryParams,
  getUserLocation: () => void,
  reSubmitQuery: () => void,
};

export default ({
  queryParams,
  getUserLocation,
  reSubmitQuery,
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
      <Fieldset>
        <Label for="ll">Latitude & Longitude</Label>
        <Input id="ll" readOnly="true" value={queryParams.ll} />
      </Fieldset>

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
