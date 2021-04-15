import React from 'react'
import {useField} from 'formik'
import {FormControl, Select, InputLabel, FormHelperText, Input} from '@material-ui/core'

function MySelectWithCheck({children, label, name, ...props}) {
    const [field, meta] = useField({name, ...props})
    const {error, helperText} = meta.touched && meta.error ? {error: true, helperText: meta.error} : {error: false, helperText: ''}

    return (
        <>
            <FormControl fullWidth error={error} >
                <InputLabel id="demo-mutiple-checkbox-label">{label}</InputLabel>
                <Select 
                    labelId="demo-mutiple-checkbox-label"
                    id="demo-mutiple-name"
                    input={<Input/>}
                    {...field}
                    {...props}
                >
                    {children}
                </Select>
                <FormHelperText>{helperText}</FormHelperText>
            </FormControl>
        </>
    )
}

export default MySelectWithCheck
