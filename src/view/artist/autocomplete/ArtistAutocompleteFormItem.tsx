import React, { useState } from 'react';
import ArtistService from '../../../modules/artist/artistService';
import ArtistFormModal from '../../../view/artist/form/ArtistFormModal';
import AutocompleteInMemoryFormItem from '../../../view/shared/form/items/AutocompleteInMemoryFormItem';
import { useFormContext } from 'react-hook-form';
import { useSelector } from 'react-redux';
import selectors from '../../../modules/artist/artistSelectors';

function ArtistAutocompleteFormItem(props) {
  const { setValue, getValues } = useFormContext();

  const [modalVisible, setModalVisible] = useState(false);

  const hasPermissionToCreate = useSelector(
    selectors.selectPermissionToCreate,
  );

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    const { name, mode } = props;

    if (mode && mode === 'multiple') {
      setValue(
        name,
        [...(getValues()[name] || []), record],
        { shouldValidate: true, shouldDirty: true },
      );
    } else {
      setValue(name, record, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }

    doCloseModal();
  };

  const fetchFn = (value, limit) => {
    return ArtistService.listAutocomplete(value, limit);
  };

  const mapper = {
    toAutocomplete(originalValue) {
      if (!originalValue) {
        return null;
      }

      const value = originalValue.id;
      let label = originalValue.label;

      if (originalValue.name) {
        label = originalValue.name;
      }

      return {
        key: value,
        value,
        label,
      };
    },

    toValue(originalValue) {
      if (!originalValue) {
        return null;
      }

      return {
        id: originalValue.value,
        label: originalValue.label,
      };
    },
  };

  return (
    <>
      <AutocompleteInMemoryFormItem
        {...props}
        fetchFn={fetchFn}
        mapper={mapper}
        onOpenModal={doOpenModal}
        hasPermissionToCreate={hasPermissionToCreate}
      />

      {modalVisible && (
        <ArtistFormModal
          onClose={doCloseModal}
          onSuccess={doCreateSuccess}
        />
      )}
    </>
  );
}

export default ArtistAutocompleteFormItem;
