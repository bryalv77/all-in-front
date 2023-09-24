import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';
import StudentViewItem from '../../../view/student/view/StudentViewItem';
import CourseViewItem from '../../../view/course/view/CourseViewItem';
import LessonViewItem from '../../../view/lesson/view/LessonViewItem';

function CourseCommentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n(
          'entities.courseComment.fields.comment',
        )}
        value={record.comment}
      />

      <StudentViewItem
        label={i18n(
          'entities.courseComment.fields.studentId',
        )}
        value={record.studentId}
      />

      <CourseViewItem
        label={i18n(
          'entities.courseComment.fields.courseId',
        )}
        value={record.courseId}
      />

      <LessonViewItem
        label={i18n(
          'entities.courseComment.fields.lessonId',
        )}
        value={record.lessonId}
      />

      <FilesViewItem
        label={i18n('entities.courseComment.fields.media')}
        value={record.media}
      />
    </div>
  );
}

export default CourseCommentView;
