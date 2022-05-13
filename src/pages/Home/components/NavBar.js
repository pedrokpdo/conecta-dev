import { Button, ListItem, ListItemText, ListSubheader, Paper } from "@mui/material"

export const NavBar = () => {
    const tags = [
        { id: 1, name: 'reactjs', },
        { id: 2, name: 'javascript', },
        { id: 3, name: 'dotNet', },
        { id: 4, name: 'php', },
        { id: 5, name: 'material ui', },
        { id: 6, name: 'webdev', },
    ]

    return (
        <Paper style={{ padding: '16px', width: '275px', marginRight:'16px', }}>
            <Button variant="outlined" color="secondary" style={{ width: '100%' }}>Registre-se Gratis</Button>
            <ListSubheader>{'tags em alta'}</ListSubheader>
            {tags.map((item) => (
                <ListItem dense button key={`item-${item.id}-${item.name}`}>
                    <ListItemText primary={`#${item.name}`}/>
                </ListItem>
            ))}


        </Paper>
    )
}