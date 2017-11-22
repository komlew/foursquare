// @flow
import React from 'react';
import type { Node } from 'react';

import { ContainerHeader } from '../styles/containers';

type Props = {
  location: string,
  total: number,
};

export default ({ location, total }: Props): Node => (
  <ContainerHeader>
    {total
      ? `Found ${total} places near ${location}:`
      : `No results found, please check parameters of your request`}
  </ContainerHeader>
);
