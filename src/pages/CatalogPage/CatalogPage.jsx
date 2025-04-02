import CarCatalog from '../../components/CarCatalog/CarCatalog';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import Button from '../../components/Button/Button';

const CatalogPage = () => {
  return (
    <div className="container">
      <FilterPanel />
      <CarCatalog />
      <Button label="Load more" size="small" color="secondary" />
    </div>
  );
};

export default CatalogPage;
