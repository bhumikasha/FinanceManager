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
import LoginScreen from './screens/Authentication/LoginScreen';
import SignupScreen from './screens/Authentication/SignupScreen';
import WelcomeScreen from './screens/Authentication/WelcomeScreen';
import AuthenticationContextProvider, { AuthContext } from './store/AuthContext';
import { useContext } from 'react';
import RewardsScreen from './screens/Authentication/RewardsScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return <BottomTabs.Navigator 
  screenOptions={({navigation}) => ({
    tabBarActiveTintColor: 'teal',
    tabBarInactiveTintColor: GlobalStyles.colors.gray900,

    headerRight: ({tintColor}) => <IconButton 
    icon="add" 
    size={32}
    color={tintColor} 
    onPress={()=>{
      navigation.navigate('ManageExpense')
    }}/>
    })}
    >
    <BottomTabs.Screen name="All Investments" component={WelcomeScreen} 
      options={{
      tabBarLabel: 'Investments',
      headerTintColor: GlobalStyles.colors.primary800,
      tabBarIcon: ({color, size}) =>
       <Ionicons name="airplane-outline" size={size} color={color} />
      }}/>
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
    <BottomTabs.Screen name="Rewards" component={RewardsScreen} 
      options={{
      tabBarLabel: 'Rewards',
      headerTintColor: GlobalStyles.colors.primary800,
      tabBarIcon: ({color, size}) =>
       <Ionicons name="trophy-outline" size={size} color={color} />
      }}/>
  </BottomTabs.Navigator>
}

function AuthStack() {
  return (<>
    <StatusBar style="light" />
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.gray500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: GlobalStyles.colors.primary700 },
      }}
    >
      <Stack.Screen name="FinanceManager" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
    </>
  );
}

function AuthenticatedStack() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar style="dark" />
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
      </ExpensesContextProvider>
    </>
  );
}

  function Navigation() {
    const authCtx = useContext(AuthContext);
    return (
        <NavigationContainer>
          {!authCtx.isAuthenticated && <AuthStack />}
          {authCtx.isAuthenticated && <AuthenticatedStack />}
        </NavigationContainer>
    )
  }


export default function App() {
  return (
    <>
      <AuthenticationContextProvider>
      <Navigation />
      </AuthenticationContextProvider>
    </>
  );
}