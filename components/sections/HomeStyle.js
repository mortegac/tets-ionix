import { View, Text, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(View)`
  flex: 1;
  flex-Direction: column;
  padding: 25px 25px;
  justify-content: space-between;

`;

export const Row = styled(View)`
    flex-Direction: row;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap:  wrap;
`;

export const Column = styled(View)`
    flex-Direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonMenu = styled(TouchableOpacity)`
  background: rgba(255, 255, 255, .4);
  border-radius: 4px;
  width: 31%;
  height: 31%;
  margin-top:10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled(Text)`
    font-size: 10px;
    color: #808080;
    text-align: center;
    width: 100%;
    margin-top:10px;
`;

export const TextName = styled(Text)`
    font-size: 12px;
    color: #fff;
    text-align: left;
    width: 100%;
`;



export const ImgBackground = styled(ImageBackground)`
    flex: 1;
    padding-top:30;
`;