import React from 'react'
import {useField} from 'formik'
import {FormControlLabel, Checkbox} from '@material-ui/core'

function MyCheckBox({label, name, ...props}) {

    const [field, meta] = useField({name, ...props})

    const errorProperties = meta.touched && meta.error ? {error: true, helperText: meta.error} : {}

    return (
        <>
            <FormControlLabel
                label={label}
                control={
                    <Checkbox
                        color="primary"
                        checked={Boolean(field.value)}
                        {...field}
                        {...props}
                        {...errorProperties}
                    />
                }
            />
        </>
    )
}

export default MyCheckBox
