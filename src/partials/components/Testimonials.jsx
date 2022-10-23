import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import TestimonyCard from './TestimonyCard';
import nouhaila from '../../images/nouhaila.jpg';
import malak from '../../images/malak.jpg';
import hamza from '../../images/hamza.jpg';
import bahija from '../../images/bahija.jpg';
import youness from '../../images/youness.jpg';
import maryam from '../../images/meryem.jpg';

function nouhailaquote() {
    return <span>I'm very much impressed and satisfied with my experience in lkhibra because I got all the training and support that I was looking for, the tutor was very helpful, he took care of any needs I required. <br />
    I'm glad I have done this training.</span>;
  }
function malakquote() {
    return <span>Formation de haut niveau, cela m'a permis d'apprendre le langage de programmation python de manière simple (synthaxe, POO, principales bibliothèques de python), le plus important est que nous travaillions sur des projets avec la possibilité de contacter notre professeur tout le temps</span>;
}
function hamzaquote() {
    return <span>I always have fears to do coding. After scrolling on Instagram, I found this page named "lkhibra", proposing an immersive python training. The instructor, is great at explaining the concepts. Especially, he is very patient and helpful."</span>;
}
function bahijaquote() {
    return <span>The material was presented in a way that was easy to understand, even if you don't really know programming languages. In addition, the training team was attentive and patient about everyone's level of understanding.</span>
}
function younessquote() {
    return <span>This course helped me grasp the basics of algorithmes and allowed me to use them with python, and this opened up my curiosity to learn more about programming and be as creative as i can.</span>;
}
function maryamquote() {
    return <span>J'ai toujours voulu découvrir ce domaine, mais les centres donnent des prix très chers, jusqu'à ce que je trouve que lkhibra lance un atelier de design graphique avec un prix raisonnable.Les tuteurs étaient très utiles et nous ont donné toute l'attention dont nous avions besoin.</span>;
}




export default function Testimonials() {
    // const n={"<p>I'm very much impressed and satisfied with my experience in lkhibra because I got all the training and support that I was looking for, the tutor was very helpful, he took care of any needs I required. </br>

    // I'm glad I have done the course.</p>"};

      return (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12  ">
            <div dir='rtl' className="w-full mx-auto text-center">
                <h1 className='h2 mb-8'>Student Reviews</h1>
            </div>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    autoplay={{delay:4300}}
                    loop={'true'}
                    // className={'bg-cyan-400 mb-4'}
                    breakpoints= {{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 5,
                            
                        },
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 7,
                            
                        },
                        620: {
                            slidesPerView: 1.7,
                            spaceBetween: 10,
                            
                        },
                        920: {
                            slidesPerView: 3.2,
                            spaceBetween: 20,
                            
                        }
                    }}
                >

                <SwiperSlide>
                    <TestimonyCard name={"Malak Laarabi"} 
                    status={"Programming 101 Training Student"} pic={malak}
                    quote={malakquote()}
                    />
                    
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"Hamza Kamal"} 
                    status={"Programming 101 Training Student"} pic={hamza}
                    quote={ hamzaquote()}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"Bahija Baidou"} 
                    status={"Lkhibra flbermaja Training Student"} pic={bahija}
                    quote={bahijaquote()}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"Youness El yazami Adli"} 
                    status={"Programming 101 Training Student"} pic={youness}
                    quote={younessquote()}
                    />
                </SwiperSlide>

                <SwiperSlide>
                <TestimonyCard name={"Nouhaila El Fid"} 
                    status={"Lkhibra flbermaja Training Student"} pic={nouhaila}
                    quote={nouhailaquote()}
                    />
                 </SwiperSlide>

                 <SwiperSlide> 
                <TestimonyCard name={"Maryam Lachguer"} 
                    status={"Graphic Design Student"} pic={maryam}
                    quote={maryamquote()}
                    />
                </SwiperSlide>

            </Swiper>
        </div>
  );
}

