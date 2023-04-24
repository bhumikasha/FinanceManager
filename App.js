import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 

import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/ExpensesContext';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator 
  screenOptions={({navigation}) => ({ 
    headerstyle: {backgroundColor: GlobalStyles.colors.primary500},
    tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    tabBarInactiveTintColor: GlobalStyles.colors.gray900,

    headerRight: ({tintColor}) => <IconButton 
    icon="add" 
    size={24}
    color={tintColor} 
    onPress={()=>{
      navigation.navigate('ManageExpense')
    }}/>
    })}
    >
    <BottomTabs.Screen name="Recent Expenses" component={RecentExpenses} options={{
      tabBarLabel: 'Recent',
      headerTintColor: GlobalStyles.colors.primary800,
      tabBarIcon: ({color, size}) =>
       <Ionicons name="hourglass" size={size} color={color} />
    }}/>
    <BottomTabs.Screen name="All Expenses" component={AllExpenses} options={{
      tabBarLabel: 'All Expenses',
      headerTintColor: GlobalStyles.colors.primary800,
      tabBarIcon: ({color, size}) =>
       <Ionicons name="calendar" size={size} color={color} />
    }}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{ 
            headerstyle: {backgroundColor: GlobalStyles.colors.accent500},
            headerTintColor: GlobalStyles.colors.primary800,
          }}
          >
            <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} 
            options={{headerShown: false}}/>
            <Stack.Screen name="ManageExpense" component={ManageExpenses} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}