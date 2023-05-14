import React, {useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, FlatList} from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ModalView = ({ mutualFunds}) => {
  const [modalVisible, setModalVisible] = useState(false);

  function handlePress() {
    setModalVisible(!modalVisible);
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList data={mutualFunds}
            renderItem={({item}) => {return <View style={styles.alignTable}>
              <Text style= {styles.tableLeft}>{item.scheme}</Text>
              <Text style= {styles.tableRight}>₹{item.amount}</Text>
            </View>}}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handlePress}>
              <Text style={styles.textStyle}>Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show All</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  alignTable: {
    borderWidth:1,
    borderColor: 'black',
    flexDirection: 'row'
  },
  tableLeft: {
    width:150, 
    backgroundColor: 'teal',
    fontSize: 18,
    padding: 25,
    fontWeight: 500,
    color: 'white',
    borderRightColor: 'black',
    borderRightWidth:1
  },
  tableRight: {
    width: 140,
    paddingLeft:30,
    backgroundColor: '#d3d3d3',
    fontSize: 18,
    paddingTop: 25,
    paddingRight: 50,
    fontWeight:600,
    borderRightColor: 'black',
    borderRightWidth:1
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 90,
  },
  button: {
    marginLeft: 13,
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    padding: 9,
    elevation: 8,
    color: 'black',
    minWidth: 90,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 900
  },
  buttonClose: {
    backgroundColor: '#d3d3d3',
  },
  textStyle: {
    color: GlobalStyles.colors.gray700,
    fontWeight: 900,
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
  },
});

export default ModalView;