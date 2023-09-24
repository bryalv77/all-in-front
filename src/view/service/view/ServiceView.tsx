import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';
import BusinessViewItem from '../../../view/business/view/BusinessViewItem';

function ServiceView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.service.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.service.fields.photo')}
        value={record.photo}
      />

      <TextViewItem
        label={i18n('entities.service.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n(
          'entities.service.fields.hoursDuration',
        )}
        value={record.hoursDuration}
      />

      <TextViewItem
        label={i18n('entities.service.fields.price')}
        value={record.price}
      />

      <BusinessViewItem
        label={i18n('entities.service.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.service.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default ServiceView;
