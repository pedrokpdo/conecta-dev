import { Feed } from './components/Feed'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
//import './styles.css'


export const Home = () => {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Header/>
            <main style={{height:'100vh', display:'flex', width:'1200px', margin:'0 auto'}}>
                <NavBar/>
                <Feed/>
            </main>
        </div>
    )
}

