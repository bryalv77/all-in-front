import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import CountryViewItem from '../../../view/country/view/CountryViewItem';

function CityView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.city.fields.name')}
        value={record.name}
      />

      <CountryViewItem
        label={i18n('entities.city.fields.country')}
        value={record.country}
      />
    </div>
  );
}

export default CityView;
