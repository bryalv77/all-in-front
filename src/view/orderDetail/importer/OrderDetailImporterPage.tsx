import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/orderDetail/importer/orderDetailImporterActions';
import fields from 'src/modules/orderDetail/importer/orderDetailImporterFields';
import selectors from 'src/modules/orderDetail/importer/orderDetailImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function OrderDetailImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.orderDetail.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.orderDetail.menu'), '/order-detail'],
          [i18n('entities.orderDetail.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.orderDetail.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default OrderDetailImportPage;
