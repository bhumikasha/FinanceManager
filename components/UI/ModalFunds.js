import { useEffect, useState } from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, Button, TextInput} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { storeMutualFund } from '../../util/http';
import DropdownComponent from './Dropdown';

function ModalFunds({addMf,selectMf,dropdownList}){
    const [modalVisible, setModalVisible] = useState(false);
    const [amount, handleAmount] = useState();
    const [dropdown, setDropDown] = useState();

    async function fetchMutualFunds(amount) {
      const id = await storeMutualFund(amount);
    }

    function relatedDropdown(dropdownVal){
      setDropDown(dropdownVal); 
    }

    useEffect(()=>{
    },[dropdown, handleMutualFunds])

    function handleMutualFunds() {
      let mfObj = new Object({amount: amount, scheme: dropdown});
      fetchMutualFunds(mfObj);
    }

    return(
        <View>
            <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{addMf}</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    
                    <Text style={styles.textStyle}>Enter Amount</Text>
                    <TextInput onChangeText={text=>{handleAmount(text)}} value={amount} style={styles.textWidth} />

                    <Text style={styles.textStyle}>{selectMf}</Text>
                    <DropdownComponent dropdownList={dropdownList} relatedValue={relatedDropdown}/>

                    <View style={styles.alignTogether}>
                      <Text style={styles.hideModal}>Cancel</Text> 
                      <View><Button style={styles.addButton} title="Add" onPress={handleMutualFunds}></Button></View>
                    </View>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textColor}>{addMf}</Text>
            </Pressable>
            </View>
        </View>
    );
}

export default ModalFunds;

const styles = StyleSheet.create({
  textWidth: {
    minWidth: 350,
    marginBottom: 40,
    borderColor: 'gray',
    borderWidth: 2,

  },
  alignTogether:{
    flexDirection: 'row',
    marginTop: 60
  },
  addButton:{
    fontSize: 100,
    fontWeight: 600
  },
    centeredView: {
      flex: 1,
      marginTop: 10,
      paddingTop: 100,
      backgroundColor: 'black'
    },
    modalView: {
      margin: 2,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 8,
      elevation: 2,
      alignItems: 'flex-start',
      minWidth: 90,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 900,
      paddingLeft: 30
    },
    buttonOpen: {
      backgroundColor: '#d3d3d3',
    },
    buttonClose: {
      backgroundColor: 'white',
    },
    textStyle: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 20
    },
    textColor:{
      fontSize: 14,
      color: GlobalStyles.colors.gray700,
      fontWeight: 600
    },
    hideModal: {
      fontSize: 16,
      marginLeft: 250,
      fontWeight: 600,
      borderColor: 'black',
      borderWidth: 1,
      padding: 5,
      marginRight: 10
    },
    modalText: {
      marginBottom: 20,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 600
    },
  });