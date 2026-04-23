import ProductCard from "./ProductCard";

const ProductList = ({ produtos }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 py-10">
      {produtos.map((p) => (
        <ProductCard key={p.id} item={p} />
      ))}
    </div>
  );
};

export default ProductList;