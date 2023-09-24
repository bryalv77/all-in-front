import React from 'react';
import { i18n } from '../../../i18n';
import PromotionsListFilter from '../../../view/promotions/list/PromotionsListFilter';
import PromotionsListTable from '../../../view/promotions/list/PromotionsListTable';
import PromotionsListToolbar from '../../../view/promotions/list/PromotionsListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PromotionsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.promotions.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.promotions.list.title')}
        </h1>
        <PromotionsListToolbar />
        <PromotionsListFilter />
        <PromotionsListTable />
      </div>
    </>
  );
}

export default PromotionsListPage;
