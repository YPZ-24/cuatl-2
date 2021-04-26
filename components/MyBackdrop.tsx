import {Backdrop, CircularProgress} from '@material-ui/core'

function MyBackdrop({open}) {
    return (
        <Backdrop style={{zIndex: 1000}} open={open} onClick={()=>{}}>
            <CircularProgress color="secondary"/>
        </Backdrop>
    )
}

export default MyBackdrop
