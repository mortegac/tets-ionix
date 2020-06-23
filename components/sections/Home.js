import React, {Component} from 'react';
// import { Modal } from 'react-native';
import Icon from '../Icon';
import CustomModal from '../CustomModal';
import {Container, Row, Column, ButtonMenu, TextButton, TextName, ImgBackground} from './HomeStyle';

class HomeScreen extends Component {
  state = {
    modalVisible: false
  }



    modalClose = () => {
      const stateModal = this.state.modalVisible; 
      this.setState({ modalVisible: !stateModal });
      };

    render() {
      const {modalVisible} = this.state;
      return (
        <>
          <CustomModal
              isVisible={modalVisible}
              onRequestClose={this.modalClose}
          />
            <ImgBackground 
                resizeMode="cover"
              source={require('../../assets/splash.png')} 
            >
          <TextName>{modalVisible.toString()}</TextName>
              <Container>
                <Row>
                  <Column>
                      <TextName style={{fontWeight: "bold", fontSize:15}}>Bienvenido</TextName>
                      <TextName>Francisco</TextName>
                  </Column>  
                  <Column>
                    <Icon library="AntDesign" name="questioncircle" size={25} color={'#DCDCDC'} />
                    <TextButton style={{color:'#fff', marginTop:0}}>v2.5.4</TextButton>
                  </Column> 
                </Row>

                <Row style={{height: '35%'}}>
                  <ButtonMenu onPress={() => { this.modalClose();}}>
                      <Icon library="FontAwesome" name="dollar" size={35} color={'#696969'}/>
                      <TextButton>Pago Fácil</TextButton>
                  </ButtonMenu>
                  <ButtonMenu>
                      <Icon library="Feather" name="map-pin" size={35} color={'#696969'}/>
                      <TextButton>Estaciones de Servicios</TextButton>
                  </ButtonMenu>
                  <ButtonMenu>
                      <Icon library="FontAwesome" name="map-o" size={35} color={'#696969'}/>
                      <TextButton>Mi Ruta</TextButton>
                  </ButtonMenu>


                  <ButtonMenu>
                      <TextButton>Mis Beneficios</TextButton>
                  </ButtonMenu>

                  <ButtonMenu>
                      
                      <Icon library="Octicons" name="mail" size={35} color={'#696969'}/>

                      <TextButton>Mensajes[0]</TextButton>
                  </ButtonMenu>

                  <ButtonMenu>
                      <Icon library="SimpleLineIcons" name="settings" size={35} color={'#696969'}/>
                      <TextButton>Configración</TextButton>
                  </ButtonMenu>
                </Row>

              </Container>
            </ImgBackground>
        </>
      )
  }

}

export default HomeScreen;