import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';

function PaymentMethodsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.paymentMethods.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n(
          'entities.paymentMethods.fields.additionalInfo',
        )}
        value={record.additionalInfo}
      />

      <TextViewItem
        label={i18n(
          'entities.paymentMethods.fields.active',
        )}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default PaymentMethodsView;
