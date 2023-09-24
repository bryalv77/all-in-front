import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import LessonViewItem from 'src/view/lesson/view/LessonViewItem';

function CourseProgressView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <StudentViewItem
        label={i18n('entities.courseProgress.fields.studentId')}
        value={record.studentId}
      />

      <CourseViewItem
        label={i18n('entities.courseProgress.fields.courseId')}
        value={record.courseId}
      />

      <TextViewItem
        label={i18n('entities.courseProgress.fields.progressPercentage')}
        value={record.progressPercentage}
      />

      <LessonViewItem
        label={i18n('entities.courseProgress.fields.currentLesson')}
        value={record.currentLesson}
      />
    </div>
  );
}

export default CourseProgressView;
