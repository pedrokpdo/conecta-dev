import { Button } from "@mui/material"
import { AppBar } from '@mui/material'
import { Toolbar } from "@mui/material"


export const Header = () => {
    return (
        <AppBar>
                <Toolbar className="toolbar">
                    <div className="">
                        <span>Conecta-Dev</span>
                    </div>
                    <div className="">
                        <Button color='primary' variant="contained">Novo Post</Button>
                        <span>img1</span>
                        <span>img2</span>
                    </div>
                </Toolbar>
            </AppBar>
    )
}