export const buyItem = (item) => {
  return { type: "BUY_ITEM", payload: item };
};

export const removeFeature = (item) => {
  return { type: "DELETE_FEATURE", payload: item };
};
