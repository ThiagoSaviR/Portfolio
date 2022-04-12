import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  height: auto;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  margin-bottom: 20px;
  filter: drop-shadow(3px 3px 8px #000);
`;

export const Legend = styled.legend`
  width: auto;
  margin-left: 16px;
  padding: 0 4px 0;
  color: #e4e4e4;
  font-size: 12px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0px 15px;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #e4e4e4;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
  resize: none;
  background: transparent;
`;
