import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >

          <Stack.Screen name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name='MealOverview'
            component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }}
          />

          <Stack.Screen name='MealDetail'
            component={MealDetailsScreen}
          // options={{
          //   headerRight: () => {
          //     return <Button title='tap me' />
          //     // return <Text>in the header</Text>
          //   }
          // }}
          // Check MealDetailScreen.js to see implementations
          />

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
