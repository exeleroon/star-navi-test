import React, {useState} from 'react';
import {Field, Form, Formik, FormikProps} from "formik";

interface ISelect {
    name?: string;
    initialValues?: any[];
    onChange: (e) => void;
    options: any[];
    defaultValue?: string | number;
    placeholder?: string;
}

const Select: React.FC<ISelect> = ({initialValues, onChange, options, name, defaultValue, placeholder}) => {
    const [value, setValue] = useState(defaultValue);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<any>) => (
                <Form>
                    <Field className={'form-select'} value={value} onChange={e => {
                        onChange(e);
                        setValue(e.target.value);
                    }}
                           as="select" name={name}>
                        <option value={defaultValue} disabled>{placeholder}</option>
                        {options && options.map(set =>
                            <option key={set.id} value={set.field}>{set.name}</option>
                        )}
                    </Field>
                </Form>
            )}
        </Formik>
    );
};

export default Select;