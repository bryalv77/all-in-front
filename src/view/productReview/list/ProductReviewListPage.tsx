import React from 'react';
import { i18n } from 'src/i18n';
import ProductReviewListFilter from 'src/view/productReview/list/ProductReviewListFilter';
import ProductReviewListTable from 'src/view/productReview/list/ProductReviewListTable';
import ProductReviewListToolbar from 'src/view/productReview/list/ProductReviewListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function ProductReviewListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.productReview.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.productReview.list.title')}
        </h1>
        <ProductReviewListToolbar />
        <ProductReviewListFilter />
        <ProductReviewListTable />
      </div>
    </>
  );
}

export default ProductReviewListPage;
