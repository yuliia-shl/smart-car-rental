import CarCatalog from "../../components/CarCatalog/CarCatalog";
import FilterPanel from "../../components/FilterPanel/FilterPanel";

const CatalogPage = () => {
  return (
    <div>
      <FilterPanel />
      <CarCatalog />
    </div>
  );
};

export default CatalogPage;
