export const selectProducts = (state) => {
  const { armors, vehicles, weapons } = state.products;
  const products = [...armors, ...vehicles, ...weapons];
  return products;
};
