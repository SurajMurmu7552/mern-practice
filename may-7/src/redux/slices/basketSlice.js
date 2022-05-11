import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    groceries: [
      {
        item: "Strawberry",
      },
      {
        item: "Blueberry",
      },
      {
        item: "Orange",
      },
      {
        item: "Banana",
      },
      {
        item: "Apple",
      },
      {
        item: "Carrot",
      },
      //   "Celery",
      //   "Mushroom",
      //   "Green Pepper",
      //   "Eggs",
      //   "Cheese",
      //   "Butter",
      //   "Chicken",
      //   "Beef",
      //   "Pork",
      //   "Fish",
      //   "Rice",
      //   "Pasta",
      //   "Bread",
    ],
    basket: [],
  },
  reducers: {
    addToBasket(state, { payload }) {
      let found = false;
      state.basket.forEach((el) => {
        if (el.item === payload.item) {
          found = true;
        }
      });

      if (found) {
        state.basket.forEach((el) => {
          if (el.item === payload.item) {
            el.count += 1;
          }
        });
      } else
        state.basket.push({
          count: 1,
          item: payload.item,
          pending: true,
        });

      console.log(state);
    },

    purchasedFromBasket(state, { payload }) {
      state.basket.forEach((el) => {
        if (el.item === payload.item) {
          el.pending = !el.pending;
        }
        return el;
      });
    },
  },
});

export const { addToBasket, purchasedFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
