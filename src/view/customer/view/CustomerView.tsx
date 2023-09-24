import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function CustomerView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.customer.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.birthdate')}
        value={record.birthdate}
      />

      <TextViewItem
        label={i18n('entities.customer.fields.gender')}
        value={
          record.gender &&
          i18n(
            `entities.customer.enumerators.gender.${record.gender}`,
          )
        }
      />

      <UserViewItem
        label={i18n('entities.customer.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default CustomerView;
