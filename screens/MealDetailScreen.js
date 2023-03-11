import { ScrollView } from "react-native";
import { Text, StyleSheet, View, Image } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
                <Text style={styles.title}>{selectedMeal.title} </Text>
                <MealDetails
                    affordability={selectedMeal.affordability}
                    complexity={selectedMeal.complexity}
                    duration={selectedMeal.duration}
                    textStyle={styles.detailText}
                />

                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        color: 'white',
        textAlign: 'center',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
});
