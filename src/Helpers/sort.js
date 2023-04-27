export const createProductObject = (product) => {
  return Object.fromEntries(
    Object.entries(product).filter(([_, value]) => value !== null)
  );
};
// function to sort the different types of products
export const getProducts = async () => {
  const token = localStorage.getItem("token");
  try {
    const promise = await fetch("http://localhost:4069/products/readall", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await promise.json();
    const { data: allProducts } = data;
    const sortedProducts = allProducts.reduce(
      (acc, curr) => {
        const productObj = createProductObject(curr);
        if (productObj.typeId === 3) {
          acc.weapons.push(productObj);
        } else if (productObj.typeId === 1) {
          acc.armors.push(productObj);
        } else if (productObj.typeId === 2) {
          acc.vehicles.push(productObj);
        }
        return acc;
      },
      { weapons: [], armors: [], vehicles: [] }
    );
    const products = allProducts.map((product) => {
      createProductObject(product);
    });
    return {
      products,
      armors: sortedProducts.armors,
      vehicles: sortedProducts.vehicles,
      weapons: sortedProducts.weapons,
    };
  } catch (err) {
    return Error(err.message);
  }
};
