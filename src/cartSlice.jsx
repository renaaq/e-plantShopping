// src/cartSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // cada item: { id, name, image, description, cost, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Agregar item al carrito
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // Si ya existe, solo aumenta la cantidad
        existingItem.quantity += 1;
      } else {
        // Si no existe, lo agrega con cantidad 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Eliminar item por nombre
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // Actualizar cantidad de un item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exportar acciones
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Exportar reductor por defecto
export default cartSlice.reducer;
