import styles from './Testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

export const Testimonial = () => {
    const { t } = useTranslation();


    const data = [
        {
            id: "1",
            text: t('site_testimonials1'),
            author: t('site_testimonials2'),
            image: "http://localhost:5173/public/images/client1.png"
        },
        {
            id: "2",
            text: t('site_testimonials3'),
            author: t('site_testimonials4'),
            image: "http://localhost:5173/public/images/client2.png"
        },
        {
            id: "3",
            text: t('site_testimonials5'),
            author: t('site_testimonials6'),
            image: "http://localhost:5173/public/images/client3.png"
        }
    ];

    return (
        <section id='testimonials' className={styles.testimonial}>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                direction='horizontal'
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <h2>{item.text}</h2>
                        <p>{item.author}</p>
                        <img src={item.image} alt={item.author} className={styles.slideItem} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );

}