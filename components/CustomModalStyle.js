import styled from 'styled-components/native';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export const Container = styled(View)`
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 40px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: gray; 
`;

export const Row = styled(View)`
  justify-content: center;
  align-items: baseline;
`;

export const IconClose = styled(TouchableOpacity)`
`;

export const IconCloseText = styled(Text)`
  font-size: 10;
  color: #696969;
`;
