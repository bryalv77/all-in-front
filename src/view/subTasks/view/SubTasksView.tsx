import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import TasksViewItem from 'src/view/tasks/view/TasksViewItem';

function SubTasksView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.subTasks.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.subTasks.fields.status')}
        value={
          record.status &&
          i18n(
            `entities.subTasks.enumerators.status.${record.status}`,
          )
        }
      />

      <TasksViewItem
        label={i18n('entities.subTasks.fields.taskId')}
        value={record.taskId}
      />
    </div>
  );
}

export default SubTasksView;
