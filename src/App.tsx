import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

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

import PaginaPersonagens from './pages/PaginaPersonagens';
import PaginaArcos from './pages/paginaArcos';
import PaginaBatalhas from './pages/paginaBatalhas';

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <SecaoPersonagens personagens={personagensData} />
            <SecaoEpisodios />
            <SecaoArcos />
            <SecaoIdeologias />
            <SecaoCartografia />
            <Footer />
        </>
    );
}

export default function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personagens" element={<PaginaPersonagens />} />
            <Route path="/arcos" element={<PaginaArcos />} />
            <Route path="/batalhas" element={<PaginaBatalhas />} />
        </Routes>
    );
}
