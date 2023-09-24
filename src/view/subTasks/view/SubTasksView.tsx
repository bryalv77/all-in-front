import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import TasksViewItem from '../../../view/tasks/view/TasksViewItem';

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
