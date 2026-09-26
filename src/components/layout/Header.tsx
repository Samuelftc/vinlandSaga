import { Languages, Moon, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import '../../styles/Header.css'
import '../../styles/Reset.css'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isScrolled ? 'scrolled' : ''}>
            <div className="logo">
                <Link to="/">
                    <img src="/assets/images/vinlandSagaLogo.png" height={100} alt="" />
                </Link>
            </div>

            <nav className='navPaginas'>
                <ul className='listaPaginas'>
                    <li className='liPagina'>
                        <Link to="/personagens">Personagens</Link>
                    </li>
                    <li className='liPagina'>
                        <Link to="/arcos">Arcos</Link>
                    </li>
                    <li className='liPagina'>
                        <Link to="/batalhas">Batalhas</Link>
                    </li>
                    <li className='liPagina'>
                        <Link to="#">Filosofias</Link>
                    </li>
                    <li className='liPagina'>
                        <Link to="#">Mundo</Link>
                    </li>
                </ul>
            </nav>

            <div className='campoBusca'>
                <Search className='buscarIcone' size={18} />
                <input type="text" placeholder='Buscar guerreiros, arcos...' />
            </div>

            <ul className='iconesHeader'>
                <li><Languages size={26} /></li>
                <li><Moon size={26} /></li>
            </ul>
        </header>
    );
}