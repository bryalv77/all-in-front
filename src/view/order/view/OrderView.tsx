import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';
import CustomerViewItem from '../../../view/customer/view/CustomerViewItem';
import DeliveryMethodViewItem from '../../../view/deliveryMethod/view/DeliveryMethodViewItem';

function OrderView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CustomerViewItem
        label={i18n('entities.order.fields.customer')}
        value={record.customer}
      />

      <TextViewItem
        label={i18n('entities.order.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.order.enumerators.status.${record.status}`,
          )
        }
      />

      <FilesViewItem
        label={i18n('entities.order.fields.attachments')}
        value={record.attachments}
      />

      <TextViewItem
        label={i18n('entities.order.fields.shippingPrice')}
        value={record.shippingPrice}
      />

      <TextViewItem
        label={i18n('entities.order.fields.total')}
        value={record.total}
      />

      <DeliveryMethodViewItem
        label={i18n('entities.order.fields.deliver')}
        value={record.deliver}
      />
    </div>
  );
}

export default OrderView;
