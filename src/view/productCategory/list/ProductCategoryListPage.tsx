import React from 'react';
import { i18n } from 'src/i18n';
import ProductCategoryListFilter from 'src/view/productCategory/list/ProductCategoryListFilter';
import ProductCategoryListTable from 'src/view/productCategory/list/ProductCategoryListTable';
import ProductCategoryListToolbar from 'src/view/productCategory/list/ProductCategoryListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProductCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.productCategory.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.productCategory.list.title')}
        </h1>
        <ProductCategoryListToolbar />
        <ProductCategoryListFilter />
        <ProductCategoryListTable />
      </div>
    </>
  );
}

export default ProductCategoryListPage;
