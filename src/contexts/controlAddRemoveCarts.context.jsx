import { createContext, useState, useEffect } from "react";

const controlAddRemove = (items, productToAdd) => {
  const existingBookmark = items.find((bookmark) => bookmark._id === productToAdd._id);
  if(existingBookmark) {
    return items.map((item) => item._id === productToAdd._id ? '' : item)
  }
  return [...items, { ...productToAdd }]
}

const addCartItem = (items, productToAdd) => {
  const existingCartItem = items.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return items.map((item) =>
    item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1} : item
    );
  }
  return [...items, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (items, productToRemove) => {
  return items.map((item) =>
  item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

export const AddRemoveContext = createContext({
  bookmarks: [],
  addItemToBookmarks: () => {},
  shoppingCart: [],
  addItemToShoppingCart: () => {},
  items: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 1,
});

export const AddRemoveProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(localStorage.getItem('bookmarks') ? [...JSON.parse(localStorage.getItem('bookmarks'))] : [] );
  const [shoppingCart, setShoppingCart] = useState(localStorage.getItem('shoppingCart') ? [...JSON.parse(localStorage.getItem('shoppingCart'))] : [] );
  
  const controlItemToBookmarks = (productToAdd) => {
    setBookmarks(controlAddRemove(bookmarks, productToAdd))
  }
  const controlItemToShoppingCart = (productToAdd) => {
    setShoppingCart(controlAddRemove(shoppingCart, productToAdd))
  }
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);
  
  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const [items, setItems] = useState(localStorage.getItem('items') ? [...JSON.parse(localStorage.getItem('items'))] : [])
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = items.reduce(
      (total, cartItem) => total + cartItem.quantity,
      1
    );
    setCartCount(newCartCount);
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  
  const addItemToCart = (productToAdd) => {
    setItems(addCartItem(items, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setItems(removeCartItem(items, cartItemToRemove));
  };
  
  const value = { bookmarks, setBookmarks, controlItemToBookmarks, shoppingCart, setShoppingCart, controlItemToShoppingCart, items, setItems, addItemToCart, removeItemToCart, cartCount };

  return <AddRemoveContext.Provider value={value}>{children}</AddRemoveContext.Provider>;
};
