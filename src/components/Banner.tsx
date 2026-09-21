import { BookOpen, Clapperboard, ScrollText, Swords, Users } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../styles/Banner.css'

const bannerImages = [
    {
        backgroundImage: "url('/assets/images/bannerPrincipal.png')",
    },
    {
        backgroundImage: "url('/assets/images/bannerPrincipal2.png')",
    },
    {
        backgroundImage: "url('/assets/images/bannerPrincipal3.png')",
    },
    {
        backgroundImage: "url('/assets/images/bannerPrincipal4.png')",
    },
];

export default function Banner() {
    return (
        <section className='bannerContainer'>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="bannerSwiper"
            >
                {bannerImages.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="sectionBannerSlide" style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${image.backgroundImage}`
                        }} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='informacoesBanner'>
                <div className='informacoesResumo'>
                    <h1>Vinland Saga</h1>
                    <p>Adentre as crônicas do Mar do Norte, a jornada brutal de Thorfinn e a busca incessante pela mítica terra sem guerras e escravidão.</p>

                    <nav>
                        <ul className='ulBanner'>
                            <li className='liBanner' id='liBanner1'>
                                <Swords />
                                <a href="">
                                    Explorar Personagens
                                </a>
                            </li>
                            <li className='liBanner' id='liBanner2'>
                                <BookOpen color='red' />
                                <a href="">
                                    Ver Arcos
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <hr />

                <div className='listaBadges'>
                    <div className='divBadge'>
                        <Clapperboard className='iconDivBadge' />
                        <div>
                            <p className='tituloBadge'>54+ Episódios</p>
                            <p>Documentados e Catalogados</p>
                        </div>
                    </div>
                    <div className='divBadge'>
                        <Users className='iconDivBadge' />
                        <div>
                            <p className='tituloBadge'>120+ Personagens</p>
                            <p>Dossiês Biográficos</p>
                        </div>
                    </div>
                    <div className='divBadge'>
                        <ScrollText className='iconDivBadge' />
                        <div>
                            <p className='tituloBadge'>4 Grande Arcos</p>
                            <p>Crônicas Históricas Nórdicas</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}