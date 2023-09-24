import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

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
