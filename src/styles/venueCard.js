// @flow
import styled from 'styled-components';

/* (styled: Object); */

// List Section Venue Cards
export const Block = styled.button`
  display: block;
  padding: 2px 5px;
  background: #f1ece6;
  color: #333;
  border: none;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-radius: 0;
  width: 100%;
  text-align: left;
  font-size: 10px;
  &[data-active] {
    background: #fde5c8;
  }
  &:hover,
  &:focus {
    background: #fdd8c8;
  }
`;

export const Title = styled.span`
  display: block;
  font-size: 18px;
  margin-bottom: 0.2em;
`;
export const Type = styled.span`
  float: right;
  color: #555;
  font-size: 12px;
  padding: 4px;
`;
export const Rating = styled.span`
  float: right;
  margin: 2px;
  font-size: 12px;
  padding: 2px 3px 2px 2px;
  border-radius: 3px;
  background: ${props => `#${props.ratingColor}`};
`;
export const Distance = styled.span`
  font-size: 12px;
  color: #777;
  vertical-align: top;
  &:after {
    content: 'm';
    padding: 0 1em 0 0.2em;
    vertical-align: top;
  }
`;
export const Hours = styled.span`
  font-size: 11px;
  color: #777;
  float: right;
  clear: both;
  margin-right: 3px;
`;
export const AddressBlock = styled.span`
  display: inline-block;
  vertical-align: top;
  font-size: 12px;
  color: #777;
`;
export const Address = styled.span`
  vertical-align: top;
  &:after {
    content: '\\A';
    white-space: pre;
  }
`;
export const Phone = styled.a`
  color: #666d94;
  &:hover,
  &:focus {
    color: #0e2bca;
  }
`;
