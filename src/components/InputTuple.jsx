// @flow
import React from 'react';
import type { Node } from 'react';

import { Fieldset, Label, Input } from '../styles/headerElements';

type Props = {
  id: string,
  name: string,
  value: string,
  onChange: (e: SyntheticInputEvent<HTMLInputElement>) => void,
};

export default ({ id, name, value, onChange }: Props): Node => {
  const idArray = id.split(',');
  const nameArray = name.split(',');
  const valueArray = value.split(',');
  if (
    idArray.length !== nameArray.length ||
    idArray.length !== valueArray.length
  ) {
    return null;
  }
  return idArray.map((singleID: string, index: number): Node => (
    <Fieldset key={singleID}>
      <Label for={singleID}>{nameArray[index]}</Label>
      <Input id={singleID} value={valueArray[index]} onChange={onChange} />
    </Fieldset>
  ));
};
