import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Header
import Header  from './components/layout/Header' 

// Banner
import Banner from './components/Banner'

// Mock dos personagens
import { personagensData } from './data/Personagens'

// Seções da Home
import SecaoPersonagens from './components/sectionsHome/SecaoPersonagens'
import SecaoEpisodios from './components/sectionsHome/SecaoEpisodios'
import SecaoArcos from './components/sectionsHome/SecaoArcos'
import SecaoIdeologias from './components/sectionsHome/SecaoIdeologias'
import SecaoCartografia from './components/sectionsHome/SecaoCartografia'

// Footer
import Footer from './components/layout/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banner />
    <SecaoPersonagens personagens={personagensData} />
    <SecaoEpisodios />
    <SecaoArcos />
    <SecaoIdeologias />
    <SecaoCartografia />
    <Footer />
  </StrictMode>,
)
