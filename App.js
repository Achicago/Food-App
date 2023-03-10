import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
