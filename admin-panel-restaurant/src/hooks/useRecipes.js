import React, { useEffect, useRef, useState } from "react";
import { DATABASE_URL } from "../utils/constants";
import { setRecipeLength } from "../store/ItemsSlice";
import { useDispatch } from "react-redux";

const useRecipes = () => {
  const [showForm, setShowForm] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const category = useRef(null);
  const recipeName = useRef(null);
  const price = useRef(null);
  const recipeImage = useRef(null);
  const ingredients = useRef(null);
  const dispatch = useDispatch();
  const fetchRecipeData = async () => {
    try {
      const response = await fetch(
        DATABASE_URL + "restaurant-recipe-admin.json"
      );
      const data = await response.json();

      const formattedData = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        };
      });
      setRecipes(formattedData);
      dispatch(setRecipeLength(formattedData.length));
    } catch {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchRecipeData();
  }, []);

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setIsEdit(false);
  };
  const handleRecipeFormData = async () => {
    try {
      if (isEdit) {
        await fetch(DATABASE_URL + "restaurant-recipe-admin/" + id + ".json", {
          method: "PUT",
          body: JSON.stringify({
            category: category?.current.value,
            recipeName: recipeName?.current.value,
            price: price?.current.value,
            ingredients: ingredients?.current.value,
            recipeImage: recipeImage?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        await fetch(DATABASE_URL + "restaurant-recipe-admin.json", {
          method: "POST",
          body: JSON.stringify({
            category: category?.current.value,
            recipeName: recipeName?.current.value,
            price: price?.current.value,
            ingredients: ingredients?.current.value,
            recipeImage: recipeImage?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      category.current.value = "";
      recipeName.current.value = "";
      price.current.value = "";
      ingredients.current.value = "";
      recipeImage.current.value = "";
    } catch {
      console.error("error");
    }
  };

  const editRecipeHandler = (item) => {
    setIsEdit(true);
    setShowForm(true);
    setId(item.id);
    setTimeout(() => {
      if (item.category && item.recipeName && item.price) {
        category.current.value = item.category;
        recipeName.current.value = item.recipeName;
        price.current.value = item.price;
        ingredients.current.value = item.ingredients;
        recipeImage.current.value = item.recipeImage;
      }
    }, 1000);
  };

  const deleteRecipeHandler = (id) => {
    fetch(DATABASE_URL + `restaurant-recipe-admin/${id}.json`, {
      method: "DELETE",
    });
  };

  return {
    fetchRecipeData,
    handleFormToggle,
    handleRecipeFormData,
    editRecipeHandler,
    deleteRecipeHandler,
    showForm,
    recipes,
    category,
    recipeName,
    price,
    recipeImage,
    ingredients,
    isEdit,
  };
};

export default useRecipes;
