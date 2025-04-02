import CarCatalog from '../../components/CarCatalog/CarCatalog';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import Button from '../../components/Button/Button';
import s from './CatalogPage.module.css';
import clsx from 'clsx';

const CatalogPage = () => {
  return (
    <div className={clsx('container', s.catalogPage)}>
      <FilterPanel />
      <CarCatalog />
      <Button label="Load more" size="small" color="secondary" />
    </div>
  );
};

export default CatalogPage;
