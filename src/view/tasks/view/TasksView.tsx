import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import TaskListViewItem from '../../../view/taskList/view/TaskListViewItem';

function TasksView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.tasks.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.tasks.fields.dueDate')}
        value={record.dueDate}
      />

      <TextViewItem
        label={i18n('entities.tasks.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.tasks.enumerators.status.${record.status}`,
          )
        }
      />

      <TaskListViewItem
        label={i18n('entities.tasks.fields.taskList')}
        value={record.taskList}
      />
    </div>
  );
}

export default TasksView;
