import styles from './Testimonial.module.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


export const Testimonial = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5173/public/data.json')
            .then((response) => response.json())
            .then(setData);
    }, []);


    return (
        <div>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation

            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <h2>{item.text}</h2>
                        <p>{item.author}</p>
                        <img src={item.image} alt={item.useState} className={styles.slideIten} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );

}