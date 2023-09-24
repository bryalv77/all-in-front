import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ProductViewItem from '../../../view/product/view/ProductViewItem';

function PromotionsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.promotions.fields.code')}
        value={record.code}
      />

      <TextViewItem
        label={i18n('entities.promotions.fields.discount')}
        value={record.discount}
      />

      <TextViewItem
        label={i18n('entities.promotions.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.promotions.fields.endDate')}
        value={record.endDate}
      />

      <ProductViewItem
        label={i18n('entities.promotions.fields.productId')}
        value={record.productId}
      />
    </div>
  );
}

export default PromotionsView;
