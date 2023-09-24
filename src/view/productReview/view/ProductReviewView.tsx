import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';

function ProductReviewView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.productReview.fields.comment')}
        value={record.comment}
      />

      <ProductViewItem
        label={i18n('entities.productReview.fields.productId')}
        value={record.productId}
      />

      <CustomerViewItem
        label={i18n('entities.productReview.fields.customerId')}
        value={record.customerId}
      />

      <TextViewItem
        label={i18n('entities.productReview.fields.rating')}
        value={record.rating}
      />
    </div>
  );
}

export default ProductReviewView;
