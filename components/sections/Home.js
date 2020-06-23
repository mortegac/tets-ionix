import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../../store/users/actions';
import Icon from '../Icon';
import CustomModal from '../CustomModal';
import {Container, Row, Column, ButtonMenu, TextButton, TextName, ImgBackground} from './HomeStyle';

class HomeScreen extends Component {
  state = {
    modalVisible: false,
    isResponse:false
  }



    //  searchDNI(id) {
    searchDNI = (id) => {
      console.log('<id>', id);

      const {getUsers} = this.props;
      getUsers({ dni: id });
      this.setState({isResponse:true})
    }

    modalClose = () => {
      const stateModal = this.state.modalVisible; 
      this.setState({ modalVisible: !stateModal });
      };

    render() {
      const {modalVisible, isResponse} = this.state;
      const {users} = this.props;

      return (
        <>
          <CustomModal
              isVisible={modalVisible}
              onRequestClose={this.modalClose}
              onRequestDni={(id)=>this.searchDNI(id)}
          />
            <ImgBackground 
                resizeMode="cover"
              source={require('../../assets/splash.png')} 
            >
              <Container>
                <Row>
                  <Column>
                      <TextName style={{fontWeight: "bold", fontSize:15}}>Bienvenido</TextName>
                      <TextName>Francisco</TextName>
                  </Column>  
                  <Column>
                    <Icon library="AntDesign" name="questioncircle" size={22} color={'#DCDCDC'} />
                    <TextButton style={{color:'#fff', marginTop:0}}>v2.5.4</TextButton>
                  </Column> 
                </Row>
                { isResponse? 
                  (
                    <Row>
                      <TextName style={{backgroundColor: 'black'}}>RESPUESTA DESDE LA API:{JSON.stringify(users)}</TextName>
                    </Row>
                  ): null
                }
                <Row style={{height: '35%'}}>
                  <ButtonMenu onPress={() => { this.modalClose();}}>
                      <Icon library="FontAwesome" name="dollar" size={22} color={'#696969'}/>
                      <TextButton>Pago Fácil</TextButton>
                  </ButtonMenu>
                  <ButtonMenu>
                      <Icon library="Feather" name="map-pin" size={22} color={'#696969'}/>
                      <TextButton>Estaciones de Servicios</TextButton>
                  </ButtonMenu>
                  <ButtonMenu>
                      <Icon library="FontAwesome" name="map-o" size={22} color={'#696969'}/>
                      <TextButton>Mi Ruta</TextButton>
                  </ButtonMenu>


                  <ButtonMenu>
                      <Icon library="FontAwesome" name="star-o" size={22} color={'#696969'}/>
                      <TextButton>Mis Beneficios</TextButton>
                  </ButtonMenu>

                  <ButtonMenu>
                      
                      <Icon library="Octicons" name="mail" size={22} color={'#696969'}/>

                      <TextButton>Mensajes[0]</TextButton>
                  </ButtonMenu>

                  <ButtonMenu>
                      <Icon library="SimpleLineIcons" name="settings" size={22} color={'#696969'}/>
                      <TextButton>Configración</TextButton>
                  </ButtonMenu>
                </Row>

              </Container>
            </ImgBackground>
        </>
      )
  }

}

// export default HomeScreen;

const mapStateToProps = state => {
    return {
        users: state.users,
    }
};


const mapDispatchToProps = dispatch => ({
    getUsers: (payload) => dispatch(getUsers(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);