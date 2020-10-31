import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
`;

export const Subtitle = styled.span`
  font-weight: 100;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Space = styled.div`
  width: 100%;
  height: 5px;
  border-bottom: 1px gray solid;
`;

export const StatusDot = styled.div<{ color: string }>`
  display: inline-block;
  margin-right: 8px;
  width: 12px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 12px;
`;
