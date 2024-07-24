import styled from 'styled-components';
import { cores } from '../../styles';

import { Props } from '.';

export const TagContainer = styled.div<Props>`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  font-family: Roboto;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  text-align: center;
  width: ${(props) => (props.size === 'big' ? '131px' : '71px')};
  height: 26px;
  border-radius: 8px;
  line-height: 24.1px;
  margin-right: 10px;
`;
