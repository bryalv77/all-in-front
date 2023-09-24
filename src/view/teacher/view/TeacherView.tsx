import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function TeacherView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.teacher.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.teacher.fields.photo')}
        value={record.photo}
      />

      <UserViewItem
        label={i18n('entities.teacher.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default TeacherView;
