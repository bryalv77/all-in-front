import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';

function TaskListView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.taskList.fields.name')}
        value={record.name}
      />

      <UserViewItem
        label={i18n('entities.taskList.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default TaskListView;
