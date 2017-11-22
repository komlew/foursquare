// @flow
import React from 'react';
import type { Node } from 'react';

import {
  Block,
  Title,
  Type,
  Phone,
  AddressBlock,
  Address,
  Distance,
  Hours,
  Rating,
} from '../styles/venueCard';
import type { CardProps } from '../types';

export default ({ venue, active, onClick }: CardProps): Node => {
  const click = () => onClick(venue.id, false);
  return (
    <Block data-active={active || null} onClick={click}>
      <Rating ratingColor={venue.ratingColor}>{venue.rating}</Rating>
      <Type>
        {venue.categories && venue.categories[0] && venue.categories[0].name}
      </Type>
      <Title>{venue.name}</Title>
      <Hours>{venue.hours && venue.hours.status}</Hours>
      <Distance>{venue.location && venue.location.distance}</Distance>
      <AddressBlock>
        <Address>
          {venue.location && venue.location.formattedAddress.join(', ')}
        </Address>
        {venue.contact &&
          venue.contact.phone && (
            <Phone href={`tel:${venue.contact && venue.contact.phone}`}>
              {venue.contact && venue.contact.formattedPhone}
            </Phone>
          )}
      </AddressBlock>
    </Block>
  );
};
