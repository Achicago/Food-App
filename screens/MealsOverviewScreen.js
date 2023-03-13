
import { useLayoutEffect } from "react";
// import { Text, View, StyleSheet, FlatList } from "react-native";
// import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";
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

    return <MealsList items={displayedMeals} />

};

export default MealsOverviewScreen;

