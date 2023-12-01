import styles from './travels.module.css'
import Link from 'next/link'
import { AiOutlineArrowLeft } from "react-icons/ai"

function ImagesLeft({ img1, img2, img3, title, children }) {
    return (
        <div className={styles.memory}>
            <div className={styles.images}>
                <img src={img1} alt="" className={styles.image1} />
                <img src={img2} alt="" className={styles.image2} />
                <img src={img3} alt="" className={styles.image3} />
            </div>
            <div className={styles.content}>
                <div className={styles.content_title}>
                    {title}
                </div>
                <p className={styles.para}>
                    {children}
                </p>
            </div>
        </div>
    )
}

function ImagesRight({ img1, img2, img3, title, children }) {
    return (
        <div className={styles.memory}>
            <div className={styles.content_right}>
                <div className={styles.content_title}>
                    {title}
                </div>
                <p className={styles.para}>
                    {children}
                </p>
            </div>
            <div className={styles.images_left}>
                <img src={img1} alt="" className={styles.image4} />
                <img src={img2} alt="" className={styles.image5} />
                <img src={img3} alt="" className={styles.image6} />
            </div>
        </div>
    )
}

export default function Dates() {
    return (
        <main className={styles.container}>
            <div className={styles.back}>
                <AiOutlineArrowLeft />
                <Link href='/' >
                    atras
                </Link>
            </div>
            <section className={styles.wrap}>
                <h2 className={styles.title}>
                    Si te tenia que conquistar era
                    <span className={styles.color}> viajando</span>
                </h2>
                <h4 className={styles.subtitle}>
                    Uno de los puntos donde mas conectamos fue en los viajes y es que asi te conquiste
                    mi amorrr. Siempre me ha gustado viajar, quise aprovechar que a ti tambien te encanta
                    para compartir mas tiempo juntos. Deseo que estos sean los primos viajes de muchisimos
                    mas a tu lado.
                </h4>
            </section>
            <section className={styles.memories}>
                <ImagesLeft
                img1={'/tovar1.jpeg'}
                img2={'/tovar2.jpeg'}
                img3={'/tovar3.jpeg'}
                title={`Colonia Tovar`}>
                    Por estas fechas todavia dudaba si me gustabas o si estaba bien que salieramos, ademas
                    que me habia provocado un viaje para un sitio frio como Merida o la Colonia Tovar, pensaba
                    quien me pudiera acompañar y me llegaste a la mente. Ese viaje fue muy especial porque
                    fue el primero y mi regalo de cumpleaños. La pase muy bien contigo y espero que la hayas
                    pasado igual.
                </ImagesLeft>
                <ImagesRight
                img1={'/choroni.jpeg'}
                img2={'/choroni2.jpeg'}
                img3={'/choroni3.jpeg'}
                title={`Choroni`}>
                    Sabia que te llamaba mucho la atencion visitar choroni y que habias planeado un viaje con
                    tus amigas del bachillerato que nunca se dio. Te insisti tanto para ir para que aprovecharas
                    y cumplieras uno de tus sitios por conocer. Quiero decirte ademas que hasta ahora ha sido el
                    segundo mejor viaje de toda mi vida y me alegra mucho el haberlo compartido contigo. Tambien
                    es muy especial para mi ya que gracias a este viaje nos unimos muchisimo y dio paso a que
                    dias despues estuviesemos juntos.
                </ImagesRight>
                <ImagesLeft
                img1={'/morrocoy.jpg'}
                img2={'/morrocoy.gif'}
                img3={'/morrocoy3.jpeg'}
                title={`Morrocoy`}>
                    <h2><span className={styles.color}>Solo puedo decir que es el mejor viaje de mi vida 💗💗💗</span></h2>
                </ImagesLeft>
            </section>
        </main >
    )
}
