import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';
import CourseViewItem from '../../../view/course/view/CourseViewItem';

function LessonView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.lesson.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.lesson.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.lesson.fields.externalUrl')}
        value={record.externalUrl}
      />

      <FilesViewItem
        label={i18n('entities.lesson.fields.media')}
        value={record.media}
      />

      <TextViewItem
        label={i18n('entities.lesson.fields.hoursDuration')}
        value={record.hoursDuration}
      />

      <CourseViewItem
        label={i18n('entities.lesson.fields.courseId')}
        value={record.courseId}
      />

      <TextViewItem
        label={i18n('entities.lesson.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default LessonView;
