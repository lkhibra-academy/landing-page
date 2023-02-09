import React,{useState} from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import nouhaila from '../../images/nouhaila.jpg';
import malak from '../../images/malak.jpg';
import hamza from '../../images/hamza.jpg';
import bahija from '../../images/bahija.jpg';
import youness from '../../images/youness.jpg';
import maryam from '../../images/meryem.jpg';
import TestimonyCard from './TestimonyCard';




export default function Testimonials() {
    
    let content = {
        Malak: {
                name:"Malak",
                status:"Programming Student",
                quote:"Formation de haut niveau, cela m'a permis d'apprendre le langage de programmation python de manière simple (synthaxe, POO, principales bibliothèques de python), le plus important est que nous travaillions sur des projets avec la possibilité de contacter notre professeur tout le temps",
        },
        Nouhaila: {
            name:"Nouhaila",
            status:"Programming Student",
            quote:"I'm very much impressed and satisfied with my experience in lkhibra because I got all the training and support that I was looking for, the tutor was very helpful, he took care of any needs I required. ",
        },
        Hamza: {
            name:"Hamza",
            status:"Programming Student",
            quote:"I always have fears to do coding. After scrolling on Instagram, I found this page named lkhibra, proposing an immersive python training. The instructor, is great at explaining the concepts. Especially, he is very patient and helpful.",
        },
        Maryam: {
            name:"Maryam",
            status:"Graphic Design Student",
            quote:"J'ai toujours voulu découvrir ce domaine, mais les centres donnent des prix très chers, jusqu'à ce que je trouve que lkhibra lance un atelier de design graphique avec un prix raisonnable.Les tuteurs étaient très utiles et nous ont donné toute l'attention dont nous avions besoin.",
        },
        Youness: {
            name:"Youness",
            status:"Programming Student",
            quote:"This Training helped me grasp the basics of algorithmes and allowed me to use them with python, and this opened up my curiosity to learn more about programming and be as creative as i can.",
        },
        Bahija: {
            name:"Youness",
            status:"Programming Student",
            quote:"The material was presented in a way that was easy to understand, even if you don't really know programming languages. In addition, the training team was attentive and patient about everyone's level of understanding.",
        },
      };

      return (
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12  ">
            <div dir='rtl' className="w-full mx-auto text-center">
                <p className='font-bold leading-tight text-2xl md:text-3xl text-center mb-6'>شهادات الطلاب</p>
            </div>
            <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    autoplay={{delay:3000}}
                    loop={'true'}
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
                            slidesPerView: 2,
                            spaceBetween: 10,
                            
                        },
                        920: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                            
                        }
                    }}
                >
                
                <SwiperSlide>
                    <TestimonyCard name={content.Malak.name} status={content.Malak.status} quote={content.Malak.quote} pic={malak}/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonyCard name={content.Youness.name} status={content.Youness.status} quote={content.Youness.quote} pic={youness}/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonyCard name={content.Bahija.name} status={content.Bahija.status} quote={content.Bahija.quote} pic={bahija}/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonyCard name={content.Hamza.name} status={content.Hamza.status} quote={content.Hamza.quote} pic={hamza}/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonyCard name={content.Nouhaila.name} status={content.Nouhaila.status} quote={content.Nouhaila.quote} pic={nouhaila}/>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <TestimonyCard name={content.Maryam.name} status={content.Maryam.status} quote={content.Maryam.quote} pic={maryam}/>
                    
                </SwiperSlide>
                

                {/* <SwiperSlide>
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
                </SwiperSlide> */}

            </Swiper>
        </div>
  );
}

