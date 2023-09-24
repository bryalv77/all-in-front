import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CountryViewItem from 'src/view/country/view/CountryViewItem';

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
