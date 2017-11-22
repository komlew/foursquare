// @flow
import styled from 'styled-components';

/* (styled: Object); */

// Overview containters
export const MainContainer = styled.section`
  height: 100vh;
  padding: 0 10px;
  overflow: hidden;
`;
export const HeadContainer = styled.section`
  height: 75px;
  font-size: 0.8rem;
  margin: 10px 0;
  background: #f1ece6;
  border-radius: 5px;
  padding: 5px 5px 0 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;
const SideContainer = styled.section`
  display: inline-block;
  height: calc(100vh - 150px);
  vertical-align: top;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;
export const MapContainer = styled(SideContainer)`
  width: 40vw;
  position: absolute;
`;
export const ListContainer = styled(SideContainer)`
  margin-left: 40vw;
  width: calc(60vw - 20px);
  overflow-y: auto;
  position: relative;
  &[data-empty]:before {
    content: attr(data-empty);
    display: block;
    line-height: calc(100vh - 150px);
    text-align: center;
    font-size: 1.5rem;
    color: #ccc;
  }
`;

export const ContainerHeader = styled.h2`
  display: block;
  background: #f1ece6;
  margin: 0;
  font-size: 0.8rem;
  line-height: 27px;
  padding: 0 5px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;
export const ContainerFooter = styled.div`
  background: #f1ece6;
  position: relative;
  height: 10px;
  border-radius: 0 0 5px 5px;
  border-top: 1px solid #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

// Loading screen
export const Loading = styled.section`
  line-height: 100vh;
  text-align: center;
  font-size: 1.5rem;
  color: #ccc;
`;
