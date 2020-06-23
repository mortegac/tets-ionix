import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight,} from 'react-native';
import Icon from './Icon';
import { Container, IconClose, IconCloseText, Row } from './CustomModalStyle';


const CustomModal = ({ isVisible, onRequestClose }) => {

    return(  
        <Modal
            animationType="slide"
            transparent={false}
            visible={isVisible}
        // onRequestClose={() => {
        //     Alert.alert('Modal has been closed.');
        // }}
        >

   
                <Container>
                    <Row style={{
                        alignItems: 'flex-end', 
                        justifyContent: 'flex-end',
                        marginRight: 20
                }}>
                        <IconClose onPress={onRequestClose}>
                            <Icon library="Ionicons" name="ios-close-circle-outline" size={35} color="#fff" />
                            {/* <IconCloseText>Close</IconCloseText> */}
                        </IconClose>

                    </Row>
                    <Row style={{
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '80%'

                    }}>
                        
                    
                    </Row>
                 

                    
                    
                </Container>
        </Modal>
    )
};

export default CustomModal;
