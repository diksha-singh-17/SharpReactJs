import React, { useEffect, useRef, useState } from "react";
import { DATABASE_URL } from "../utils/constants";
import { setCategoryLength } from "../store/ItemsSlice";
import { useDispatch } from "react-redux";

const useCategories = () => {
  const [showForm, setShowForm] = useState(false);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const category = useRef(null);
  const imageUrl = useRef(null);
  const dispatch = useDispatch();
  const fetchCategoryData = async () => {
    try {
      let response = await fetch(DATABASE_URL + "restaurant-admin.json");
      let data = await response.json();

      const formattedData = Object.keys(data).map((key) => {
        return {
          id: key,
          ...data[key],
        };
      });

      setCategories(formattedData);
      dispatch(setCategoryLength(formattedData.length));
    } catch {
      console.error("error");
    }
  };
  useEffect(() => {
    fetchCategoryData();
  }, []);

  const handleFormToggle = () => {
    setShowForm(!showForm);
    setIsEdit(false);
  };

  const handleCategoryFormData = async () => {
    try {
      if (isEdit) {
        await fetch(DATABASE_URL + "restaurant-admin/" + id + ".json", {
          method: "PUT",
          body: JSON.stringify({
            category: category?.current.value,
            imageUrl: imageUrl?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        await fetch(DATABASE_URL + "restaurant-admin.json", {
          method: "POST",
          body: JSON.stringify({
            category: category?.current.value,
            imageUrl: imageUrl?.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      category.current.value = "";
      imageUrl.current.value = "";
    } catch {
      console.error("error");
    }
  };

  const editCategoryHandler = (item) => {
    setIsEdit(true);
    setShowForm(true);
    setId(item.id);
    setTimeout(() => {
      if (item.category && item.imageUrl) {
        category.current.value = item.category;
        imageUrl.current.value = item.imageUrl;
      }
    }, 1000);
  };

  const deleteCategoryHandler = (id) => {
    fetch(DATABASE_URL + `restaurant-admin/${id}.json`, {
      method: "DELETE",
    });
  };

  return {
    showForm,
    categories,
    id,
    isEdit,
    category,
    imageUrl,
    handleFormToggle,
    handleCategoryFormData,
    editCategoryHandler,
    deleteCategoryHandler,
  };
};

export default useCategories;
