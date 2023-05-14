import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import ModalFunds from "../UI/ModalFunds";
import ModalView from "../UI/ModalView";

function AddMutualFund({mutualFunds}){
  
    const[result, setResult ] = useState();
    const options = {
      method: 'GET',
      url: 'https://latest-mutual-fund-nav.p.rapidapi.com/fetchLatestNAV',
      params: {
        SchemeType: 'Open Ended Schemes',
        SchemeCategory: 'Open Ended Schemes(Debt Scheme - Banking and PSU Fund)'
      },
      headers: {
        'X-RapidAPI-Key': '76ab98e499msh320cfbd0ac0dc8bp123dd4jsn336ac03ee8b0',
        'X-RapidAPI-Host': 'latest-mutual-fund-nav.p.rapidapi.com'
      }
    };
  
    useEffect(()=>{
      async function fetchMutualFunds() {
        try {
          const response = await axios.request(options);
          setResult(response.data);
        } catch (error) {
          console.error("error",error);
        }
      }
  
      fetchMutualFunds();
  
    },[]);

    return(
    <View >
        <View style={styles.container}>
          <View>
              <ModalFunds addMf="Add " selectMf="Select Mutual Fund" dropdownList={result}/>              
          </View>
          <ModalView mutualFunds={mutualFunds}/>
        </View>
    </View>
    )
}

export default AddMutualFund;


const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
})