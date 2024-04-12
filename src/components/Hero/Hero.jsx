import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';
import { TypeAnimation } from 'react-type-animation';


export const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm DEVANSHU RAJ</h1>
            <p className={styles.description}>
            I'm a <TypeAnimation
         sequence={[
           'Software Developer',
           1000,
           'Fullstack Dev',
           1000,
         ]}
         wrapper="span"
         speed={1}
         style={{ color:  '#00ffee' }}
         repeat={Infinity}

         />
            </p>
            <a href="mailto:devevdkflklfk@gmail.com" 
            className={styles.contactBtn}>Contact Me</a>
            
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt='hero image of me' 
        className={styles.heroImg}
        />
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  );
};
