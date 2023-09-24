import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';

function StudentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.student.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.student.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.student.fields.photo')}
        value={record.photo}
      />
    </div>
  );
}

export default StudentView;
