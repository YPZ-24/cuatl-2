import React, {Fragment} from 'react'
import {Drawer, List, ListItem, ListItemText, Link, Divider, Typography} from '@material-ui/core'

function DrawerDeptops({open, setOpen, departments}) {
    return (
        <div>
            <Drawer open={open} onClose={()=>{setOpen(false)}}>
                <List>
                {
                    departments ? 
                    departments.map((d) => (
                        <Fragment key={d.slug}>
                            <Link href={`/store/products?department=${d.slug}`}>
                                <ListItem button>
                                    <Typography variant="h6">{d.name}</Typography>
                                </ListItem>
                            </Link>
                            {
                                d.categories.map((c)=>(
                                    <Fragment key={c.slug}>
                                        <Link href={`/store/products?department=${d.slug}&category=${c.slug}`} >
                                            <ListItem button>
                                                <Typography style={{
                                                    paddingLeft: "20px"
                                                }} variant="subtitle1">{c.name}</Typography>
                                            </ListItem>
                                        </Link>
                                        {
                                            c.subcategories.map((sc)=>(
                                                <Link key={sc.slug} href={`/store/products?department=${d.slug}&category=${c.slug}&subcategory=${sc.slug}`} >
                                                    <ListItem button>
                                                        <Typography style={{
                                                            paddingLeft: "40px"
                                                        }} variant="subtitle2">{sc.name}</Typography>
                                                    </ListItem>
                                                </Link>
                                            ))
                                        }
                                    </Fragment>
                                ))
                            }
                            <Divider/>
                        </Fragment>
                        ))   
                    :null
                }
                </List>
            </Drawer>
        </div>
    )
}

export default DrawerDeptops
