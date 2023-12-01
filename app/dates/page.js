import styles from './dates.module.css'
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
                    Cada salida contigo es especial
                    <span className={styles.color}> mi vida preciada</span>
                </h2>
                <h4 className={styles.subtitle}>
                    Cuando estamos juntos el tiempo pasa volando pero me siento
                    tan en paz contigo que no me quiero apartar nunca de tu lado,
                    siempre buscaba la forma para seguir compartiendo mas tiempo contigo
                    porque cada minuto valia por horas.
                </h4>
            </section>
            <section className={styles.memories}>
                <ImagesLeft
                img1={'/firstdate.jpeg'}
                img2={'/firstdate2.jpeg'}
                img3={'/firstdate3.jpeg'}
                title={`Compartiendo`}>
                    Puedo tener mala memoria y olvide las cosas que te cuento o algunas cosas que me has contado,
                    pero aun recuerdo con mucho detalle lo que podria ser nuestra primera salida, ese domingo que
                    querias comer torta y termine teniendo uno de los mejores dias de este año. Empezamos merendado
                    un mousse y una torta de chocolate, caminamos por el este como una pareja que recien comienza
                    a salir pero con la confianza de una pareja de muchisimo tiempo, fuimos a comer pepitos y como
                    nunca nos queriamos separar el uno del otro terminamos yendo a tomar unos tragos de tequila con
                    jugo y granadina. Esa noche te reiste, lloraste y bailaste, te notabas tan comoda conmigo.
                    Siendo honesto ese dia no me queria separar de ti y supe que queria algo mas contigo.
                </ImagesLeft>
                <ImagesRight
                img1={'/video1.jpeg'}
                img2={'/video2.png'}
                img3={'/video3.png'}
                title={`...a pesar de la distancia`}>
                    Aunque sabia que tenias planes de irte pronto quise seguir contigo de todas formas
                    porque sabia que preferia mil veces el compartir contigo poco tiempo y luego pasar el
                    duelo, a arrepentirme toda la vida por no atreverme. Aunque estemos a 3623 kilometros
                    siento como si estuvieses cerca, como si nunca te fueses ido del apartamento de la 33 💗
                    Deseo estar contigo pronto mi vida, lo deseo con todo mi ser.
                </ImagesRight>
            </section>
        </main >
    )
}
