import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import OrderViewItem from 'src/view/order/view/OrderViewItem';
import ProductViewItem from 'src/view/product/view/ProductViewItem';

function OrderDetailView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <OrderViewItem
        label={i18n('entities.orderDetail.fields.orderId')}
        value={record.orderId}
      />

      <ProductViewItem
        label={i18n('entities.orderDetail.fields.productId')}
        value={record.productId}
      />

      <TextViewItem
        label={i18n('entities.orderDetail.fields.quantity')}
        value={record.quantity}
      />

      <TextViewItem
        label={i18n('entities.orderDetail.fields.unitPrice')}
        value={record.unitPrice}
      />
    </div>
  );
}

export default OrderDetailView;
