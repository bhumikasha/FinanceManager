import { inlineImageLeft } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import { useEffect, useState } from 'react/cjs/react.development';
import AddMutualFund from '../../components/homePage/AddMutualFund';
import { GlobalStyles } from '../../constants/styles';
import { retrieveMutualFunds } from '../../util/http';

function WelcomeScreen() {
  const[mutualFundInvestment, setMutualFundInvestment] = useState(0);
  const[mutualFunds, setMutualFundResults] = useState();
  
  useEffect(()=>{
    async function getMutualFunds(){
      const mutualfundResults = await retrieveMutualFunds();

      setMutualFundResults(mutualfundResults);

      let totalMfValue = mutualfundResults.map(item => Math.round(item.amount)).reduce((prev, next) => prev + next);
      setMutualFundInvestment(totalMfValue);
    }
    getMutualFunds();
  },[]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Total Investments</Text>
      <Text style={styles.total}>1000000</Text>
      <View style={styles.aligment}>
        <Title style={styles.titleDecor}>Mutual Funds</Title>
        <Title style={styles.spaced}>₹{mutualFundInvestment}</Title>
      </View>
      <AddMutualFund mutualFunds={mutualFunds}/>
      <View style={styles.aligment}>
        <Title style={styles.titleDecor}>Stocks</Title>
        <Title style={styles.spaced}>₹10,000</Title>
      </View>
      <AddMutualFund mutualFunds={mutualFunds}/>
      <View style={styles.aligment}>
        <Title style={styles.titleDecor}>Fixed Deposit</Title>
        <Title style={styles.spaced}>₹70,000</Title>
      </View>
      <AddMutualFund mutualFunds={mutualFunds}/>
      <View style={styles.aligment}>
        <Title style={styles.titleDecor}>NPS</Title>
        <Title style={styles.spaced}>₹90,000</Title>
      </View> 
      <AddMutualFund mutualFunds={mutualFunds}/>    
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  titleDecor: {
    fontSize: 18,
    fontWeight:600,
      
  },
  visibleAlignment: {
    flexDirection: 'row'
  },
  total: {
    fontWeight: 900,
    fontSize: 45,
    textAlign: 'center',
    color: 'teal'
  },
  amount: {
    borderColor: "gray",
    borderWidth: 1,
    elevation: 1,
    flex: 1,
    marginRight: 20,
    padding: 20
  },
  scheme: {
    borderColor: "gray",
    elevation:1,
    borderWidth: 1,
    flex: 1,
    marginLeft: 20,
    padding: 20
  },
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    minHeight: 50,
    padding: 32,
    margin: 60,
    elevation: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: 'gray'
  },
  aligment: {
    flexDirection: 'row',
    textAlign: 'right',
    marginTop: 20
  },
  spaced: {
    marginLeft: 4,
    fontSize: 22,
    fontWeight: 900,
    color: 'black',
    // textAlign: "justify",
    // marginRight: 120
  }
});