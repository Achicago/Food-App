
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route }) {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            imageUrl: item.imageUrl,
            title: item.title,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability,
        }


        return <MealItem
            {...mealItemProps}
        />;
    }

    return (
        <View style={styles.container} >
            <FlatList
                data={displayedMeals}
                renderItem={renderMealItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});