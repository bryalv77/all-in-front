import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/product/importer/productImporterActions';
import fields from '../../../modules/product/importer/productImporterFields';
import selectors from '../../../modules/product/importer/productImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function ProductImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.product.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.product.menu'), '/product'],
          [i18n('entities.product.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.product.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ProductImportPage;
