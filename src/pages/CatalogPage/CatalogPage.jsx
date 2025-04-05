import CarCatalog from '../../components/CarCatalog/CarCatalog';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import s from './CatalogPage.module.css';
import clsx from 'clsx';

const CatalogPage = () => {
  return (
    <div className={clsx('container', s.catalogPage)}>
      <FilterPanel />
      <CarCatalog />
    </div>
  );
};

export default CatalogPage;
