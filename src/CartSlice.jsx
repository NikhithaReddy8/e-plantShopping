import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to hold cart items
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name);
      if (existingItem) {
        // If item exists, increment quantity
        existingItem.quantity += 1;
      } else {
        // If item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },

    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);
      if (existingItem) {
        existingItem.quantity = quantity; // Update quantity
      }
    },
  },
});

// Exporting actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Exporting the reducer
export default cartSlice.reducer;
