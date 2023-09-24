import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import CourseViewItem from 'src/view/course/view/CourseViewItem';
import StudentViewItem from 'src/view/student/view/StudentViewItem';

function CourseTransactionView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.courseTransaction.fields.amount')}
        value={record.amount}
      />

      {record.transactionDate && <TextViewItem
        label={i18n(
          'entities.courseTransaction.fields.transactionDate',
        )}
        value={moment(record.transactionDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <CourseViewItem
        label={i18n('entities.courseTransaction.fields.courseId')}
        value={record.courseId}
      />

      <StudentViewItem
        label={i18n('entities.courseTransaction.fields.studentId')}
        value={record.studentId}
      />
    </div>
  );
}

export default CourseTransactionView;
