import { Button } from "@mui/material"
import { AppBar } from '@mui/material'
import { Toolbar } from "@mui/material"
import { SvgIcon } from "@mui/material"
import { Bell } from "react-feather"
import { Avatar } from "@mui/material"

export const Header = () => {
    return (
        <AppBar style={{ boxShadow: 'none' }} position="fixed" color='inherit'>
            <Toolbar className="toolbar">
                <h1>Conecta-Dev</h1>
                <div style={{flexGrow:'1'}}></div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <Button style={{marginRight:'10px'}} color='primary' variant="contained">Novo Post</Button>
                    <SvgIcon>
                        <Bell/>
                    </SvgIcon>
                    <Avatar style={{marginLeft:'10px'}}/>
                </div>
            </Toolbar>
        </AppBar>
    )
}