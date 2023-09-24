import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TasksViewItem from '../../../view/tasks/view/TasksViewItem';
import TagsViewItem from '../../../view/tags/view/TagsViewItem';

function TaskTagsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TasksViewItem
        label={i18n('entities.taskTags.fields.taskId')}
        value={record.taskId}
      />

      <TagsViewItem
        label={i18n('entities.taskTags.fields.tagId')}
        value={record.tagId}
      />
    </div>
  );
}

export default TaskTagsView;
