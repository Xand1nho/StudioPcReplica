import Asus from '/RogCentro.png'
import Pesquisar from '/Pesquisar.png'
import Carrinho from '/Carrinho.png'
import Pontos from '/BotoesDeMenu.png'

import Styles from './App.module.css'


function App() {

  return (
    <>
    
    <nav>
        <div className={Styles.Menu}>
            <img className={Styles.MenuImg} src={Asus} alt="Image"/>
            <a  href="#s1"><right> S1</right></a>
            <img src={Pesquisar} alt="Image"/>
            <a  href="#s2"></a>
            <img src={Carrinho} alt="Image"/>
            <a  href="#s3"></a>
            <img src={Pontos} alt="Image"/>
            
        </div>
        <div class="wrap-links"> 
            
        </div>
    </nav>
    <main>

        <section id="s1">

            <div class="left">
                <div class="wrap-banner">
                </div>
            </div>

            <div class="right">
                    <h1>Volkswagen</h1>
                    <p>Volkswagen é uma montadora de automóveis alemã, conhecida por sua inovação e qualidade. A empresa foi fundada em 1937 e desde então tem sido uma das líderes da indústria automotiva mundial.</p>
            </div>
        </section>

       

    </main>
    </>
  )
}

export default App
