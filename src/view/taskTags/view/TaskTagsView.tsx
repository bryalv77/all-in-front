import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TasksViewItem from 'src/view/tasks/view/TasksViewItem';
import TagsViewItem from 'src/view/tags/view/TagsViewItem';

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
