import Container from '@mui/material/Container'
import { padding } from '@mui/system'
import Box from '@mui/system/Box'
import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
//import './styles.css'


export const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <div style={{ minHeight: '80px' }}></div>
            <main style={{height:'100vh', padding:24}}>
                <Container maxWidth='lg'>
                    <Box display='flex'>
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>

            </main>
        </div>
    )
}

