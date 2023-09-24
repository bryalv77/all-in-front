import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';

function BankView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.bank.fields.fintonicId')}
        value={record.fintonicId}
      />

      <TextViewItem
        label={i18n('entities.bank.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.bank.fields.logo')}
        value={record.logo}
      />
    </div>
  );
}

export default BankView;
