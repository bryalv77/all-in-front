import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';

function HashtagView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.hashtag.fields.hashtagText')}
        value={record.hashtagText}
      />

      <TextViewItem
        label={i18n('entities.hashtag.fields.usageCount')}
        value={record.usageCount}
      />
    </div>
  );
}

export default HashtagView;
