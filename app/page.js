'use client'

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { AiFillHeart } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from 'next/link';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const group1Ref = useRef(null);
  const group2Ref = useRef(null);
  const group3Ref = useRef(null);

  const url = ['/happyday', '/dates', '/travels'];

  const handleLoveClick = () => {
    const nextIndex = activeIndex + 1 <= 2 ? activeIndex + 1 : 0;

    let currentGroup, nextGroup;
    if (activeIndex === 0) {
      currentGroup = group1Ref.current;
      nextGroup = group2Ref.current;
    } else if (activeIndex === 1) {
      currentGroup = group2Ref.current;
      nextGroup = group3Ref.current;
    }
    else {
      currentGroup = group3Ref.current;
      nextGroup = group1Ref.current;
    }


    if (currentGroup && currentGroup.dataset) {
      currentGroup.dataset.status = "after";
    }
    if (nextGroup && nextGroup.dataset) {
      nextGroup.dataset.status = "becoming-active-from-before";
    }

    setTimeout(() => {
      if (nextGroup && nextGroup.dataset) {
        nextGroup.dataset.status = "active";
      }
      setActiveIndex(nextIndex);
    });
  }

  const handleHateClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 2;

    let currentGroup, nextGroup;
    if (activeIndex === 0) {
      currentGroup = group1Ref.current;
      nextGroup = group3Ref.current;
    } else if (activeIndex === 1) {
      currentGroup = group2Ref.current;
      nextGroup = group1Ref.current;
    }
    else{
      currentGroup = group3Ref.current;
      nextGroup = group2Ref.current;
    }

    if (currentGroup && currentGroup.dataset) {
      currentGroup.dataset.status = "before";
    }
    if (nextGroup && nextGroup.dataset) {
      nextGroup.dataset.status = "becoming-active-from-after";
    }

    setTimeout(() => {
      if (nextGroup && nextGroup.dataset) {
        nextGroup.dataset.status = "active";
      }
      setActiveIndex(nextIndex);
    });
  }

  return (
    <main className={styles.container}>
      <div className={styles.card_groups}>
        <div className={styles.card_group} ref={group1Ref} data-index="0" data-status="active">
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>

        </div>
        <div className={styles.card_group} ref={group2Ref} data-index="1" data-status="unknown">
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
        </div>
        <div className={styles.card_group} ref={group3Ref} data-index="2" data-status="unknown">
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
          <div className={styles.little_card}>

          </div>
          <div className={styles.big_card}>

          </div>
        </div>
      </div>

      <div className={styles.card_swiper_buttons}>
        <button className={styles.arrow_button}>
          <BsArrowLeft className={styles.arrow_icon} onClick={handleHateClick} />
        </button>
        <button className={styles.heart_button}>
          <Link href={url[activeIndex]}>
            <AiFillHeart className={styles.heart_icon} />
          </Link>

        </button>
        <button className={styles.arrow_button}>
          <BsArrowRight className={styles.arrow_icon} onClick={handleLoveClick} />
        </button>

      </div>
    </main >
  )
}
