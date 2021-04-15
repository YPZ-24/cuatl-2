import React from 'react'
import Button from '@material-ui/core/Button'

function MyButton({value, props}) {
    return (
        <Button fullWidth {...props} variant="contained" color="primary">
          {value}
        </Button>
    )
}

export default MyButton
