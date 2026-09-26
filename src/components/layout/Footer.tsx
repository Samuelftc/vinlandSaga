import { Link } from 'react-router-dom';
import '../../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className='resumoCopyright'>
                <Link to="/"><img src="/assets/images/vinlandSagaLogo.png" height={100} alt="" /></Link>
                <p>&copy; 2026 Vinland Saga & Encyclopedia. Baseado na obra épica de Makoto Yukimura.
                    Todos os direitos reservados.</p>
            </div>

            <div className="blocosFooter">
                <div className="blocoFooter">
                    <h3>Links Rápidos</h3>
                    <ul>
                        <li><Link to="/personagens">Personagens</Link></li>
                        <li><Link to="/arcos">Arcos</Link></li>
                        <li><Link to="/batalhas">Batalhas</Link></li>
                        <li><Link to="#">Filosofias</Link></li>
                        <li><Link to="#">Mundo</Link></li>
                    </ul>
                </div>

                <div className="blocoFooter" id="contatoFooter">
                    <h3>Contato</h3>
                    <ul>
                        <li>
                            <a href="mailto:contato@vinland.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20mais%20informações.">
                                contato@vinland.com
                            </a>
                        </li>

                        <li>
                            <a href="tel:+5511950486252">(11) 95048-6252</a>
                        </li>

                        <li>
                            <a href="#" target="_blank">São Paulo, SP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}