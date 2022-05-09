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
    basket: [
      {
        count: 0,
        item: "apple",
        pending: null,
      },
    ],
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
        state = {
          basket: state.basket.map((el) => {
            if (el.item === payload.item) {
              return {
                ...el,
                count: el.count + 1,
                // pending: el.pending === null ? true : el.pending,
              };
            }
            return el;
          }),
        };
      } else
        state = {
          basket: [
            ...state.basket,
            { count: 0, item: payload.item, pending: true },
          ],
        };
    },

    purchasedFromBasket(state, { payload }) {
      state = {
        basket: state.basket.map((el) => {
          if (el.item === payload.item) {
            return {
              ...el,
              pending: !state.pending,
            };
          }
          return el;
        }),
      };
    },
  },
});

export const { addToBasket, purchasedFromBasket } = basketSlice.actions;

export default basketSlice.reducer;
