import ProductRow from "./ProductRow";

const ProductTable = ({ products, removeProduct }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          {[
            "Product Name",
            "Price",
            "Category",
            "Rating",
            "Action",
            "View",
          ].map((item, index) => (
            <th scope="col" className="px-6 py-3" key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onDelete={removeProduct}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6" className="px-6 py-4 text-center">
              No products available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ProductTable;
