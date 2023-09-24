import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TaskListViewItem from 'src/view/taskList/view/TaskListViewItem';

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
