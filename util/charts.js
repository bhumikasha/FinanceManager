import {
    SafeAreaView,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
  } from 'react-native';
  
import { LineChart } from 'react-native-chart-kit';

import { GlobalStyles } from '../constants/styles';
  
  const MyBezierLineChart = () => {
    return (
      <>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16} // from react-native
          height={220}
          yAxisLabel={'Rs'}
          chartConfig={{
            backgroundGradientFrom: GlobalStyles.colors.primary700,
            backgroundGradientTo: GlobalStyles.colors.primary700,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </>
    );
  };
  
  
  const ChartF = () => {
    return (
      <SafeAreaView style={{flex: 1, marginBottom: 15}}>
        <ScrollView>
          <View style={styles.container}>
            <View>
              <MyBezierLineChart />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ChartF;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      paddingLeft: 25,
      paddingRight: 10
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });
  