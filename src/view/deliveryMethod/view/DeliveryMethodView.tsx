import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function DeliveryMethodView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.deliveryMethod.fields.name')}
        value={record.name}
      />

      <UserViewItem
        label={i18n('entities.deliveryMethod.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.deliveryMethod.fields.vehicleInfo')}
        value={record.vehicleInfo}
      />

      <TextViewItem
        label={i18n('entities.deliveryMethod.fields.additionalInfo')}
        value={record.additionalInfo}
      />

      <TextViewItem
        label={i18n('entities.deliveryMethod.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default DeliveryMethodView;
