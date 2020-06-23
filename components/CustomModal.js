import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Modal, TouchableHighlight,} from 'react-native';
import Icon from './Icon';
import { Container, IconClose, IconCloseText, Row } from './CustomModalStyle';
const hash = 'oWp/u5Pl6ySX9RFYe+XBTjCiGepyYC6uO+m1NLWJEQY+fVi3cc3RAA';
const CustomModal = ({ isVisible, onRequestClose, onRequestDni }) => {

    const handlerReturn = (id) =>{
        console.log('<CustomModal>: ', id);
        
        onRequestDni(id);
        onRequestClose();
    }

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
                        </IconClose>

                    </Row>
                    <Row style={{
                        flexDirection:'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '80%'

                    }}>
                    
                    <IconClose onPress={()=>handlerReturn(hash)}
                     style={{width: 300, height:60, backgroundColor: 'black'}}
                    >
                            <IconCloseText style={{fontSize: 22}}>Devolver el Rut: 1-9</IconCloseText>
                    </IconClose>
                    </Row>
                 

                    
                    
                </Container>
        </Modal>
    )
};

export default CustomModal;
