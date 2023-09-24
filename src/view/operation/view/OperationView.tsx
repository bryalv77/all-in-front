import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import FilesViewItem from 'src/view/shared/view/FilesViewItem';
import CategoryViewItem from 'src/view/category/view/CategoryViewItem';
import BankViewItem from 'src/view/bank/view/BankViewItem';

function OperationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.operation.fields.fintonicId')}
        value={record.fintonicId}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.reference')}
        value={record.reference}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.note')}
        value={record.note}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.userDescription')}
        value={record.userDescription}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.quantity')}
        value={record.quantity}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.valueDate')}
        value={record.valueDate}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.operationDate')}
        value={record.operationDate}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.cleanNote')}
        value={record.cleanNote}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.cleanUserDescription')}
        value={record.cleanUserDescription}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.primaryDisplay')}
        value={record.primaryDisplay}
      />

      <TextViewItem
        label={i18n('entities.operation.fields.secondaryDisplay')}
        value={record.secondaryDisplay}
      />

      <CategoryViewItem
        label={i18n('entities.operation.fields.categoryId')}
        value={record.categoryId}
      />

      <BankViewItem
        label={i18n('entities.operation.fields.bankId')}
        value={record.bankId}
      />

      <FilesViewItem
        label={i18n(
          'entities.operation.fields.receipt',
        )}
        value={record.receipt}
      />

      <UserViewItem
        label={i18n('entities.operation.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default OperationView;
