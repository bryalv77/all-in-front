import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { i18n } from '../../../i18n';
import CategoryListItem from '../../../view/category/list/CategoryListItem';
import CategoryAutocompleteFormItem from '../../category/autocomplete/CategoryAutocompleteFormItem';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import actions from '../../../modules/operation/form/operationFormActions';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  categoryId: yupFilterSchemas.relationToOne(
    i18n('entities.operation.fields.categoryId'),
  ),
});

function CategoryForm({
  operation,
  categoryId,
  setCategoryId,
}) {
  const dispatch = useDispatch();
  const emptyValues = {
    categoryId,
  };
  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
    };
  });
  const form = useForm({
    resolver: yupResolver(schema) as any,
    defaultValues: initialValues,
    mode: 'all',
  });

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    console.log('rawValues: ', rawValues);
    // dispatch(actions.doFetch(values, rawValues) as any);
  };

  const onChange = (value) => {
    if (value.id) {
      form.setValue('categoryId', value.id);
      setCategoryId({ id: value.id, name: value.label });
      const operationCopy = JSON.parse(
        JSON.stringify(operation),
      );
      operationCopy.categoryId = value.id;
      delete operationCopy.categoryIdId;
      operationCopy.bankId = operationCopy.bankIdId;
      delete operationCopy.bankIdId;
      operationCopy.userId = operationCopy.userIdId;
      delete operationCopy.userIdId;
      delete operationCopy.createdAt;
      delete operationCopy.createdById;
      delete operationCopy.deletedAt;
      delete operationCopy.id;
      delete operationCopy.importHash;
      delete operationCopy.tenantId;
      delete operationCopy.updatedAt;
      delete operationCopy.updatedById;

      dispatch(
        actions.doUpdate(
          operation.id,
          operationCopy,
        ) as any,
      );
    }
  };
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CategoryListItem value={categoryId} />
          <div className="w-[200px]">&nbsp;</div>
          <CategoryAutocompleteFormItem
            name="categoryId"
            label={i18n(
              'entities.operation.fields.categoryId',
            )}
            value={categoryId}
            onChange={onChange}
          />
        </form>
      </FormProvider>
    </>
  );
}

export default CategoryForm;
