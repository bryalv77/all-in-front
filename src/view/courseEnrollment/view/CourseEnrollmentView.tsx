import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function CourseEnrollmentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CourseViewItem
        label={i18n('entities.courseEnrollment.fields.courseId')}
        value={record.courseId}
      />

      <StudentViewItem
        label={i18n('entities.courseEnrollment.fields.studentId')}
        value={record.studentId}
      />

      {record.enrollmentDate && <TextViewItem
        label={i18n(
          'entities.courseEnrollment.fields.enrollmentDate',
        )}
        value={moment(record.enrollmentDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}
    </div>
  );
}

export default CourseEnrollmentView;
