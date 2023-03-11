import { Text, StyleSheet } from "react-native";


function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId;
    return <Text> This is the Meal Detail Screen {mealId} </Text>
}

export default MealDetailsScreen;

const styles = StyleSheet.create({

});
