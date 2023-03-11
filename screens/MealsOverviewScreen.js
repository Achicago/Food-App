
import { useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const categorytitle = CATEGORIES.find(
            (category) => category.id === catId).title;
        navigation.setOptions({
            title: categorytitle,
        });

    }, [catId, navigation])


    function renderMealItem(itemData) {
        const item = itemData.item;

        const mealItemProps = {
            id: item.id,
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