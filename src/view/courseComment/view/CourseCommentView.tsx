import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import LessonViewItem from 'src/view/lesson/view/LessonViewItem';

function CourseCommentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.courseComment.fields.comment')}
        value={record.comment}
      />

      <StudentViewItem
        label={i18n('entities.courseComment.fields.studentId')}
        value={record.studentId}
      />

      <CourseViewItem
        label={i18n('entities.courseComment.fields.courseId')}
        value={record.courseId}
      />

      <LessonViewItem
        label={i18n('entities.courseComment.fields.lessonId')}
        value={record.lessonId}
      />

      <FilesViewItem
        label={i18n(
          'entities.courseComment.fields.media',
        )}
        value={record.media}
      />
    </div>
  );
}

export default CourseCommentView;
