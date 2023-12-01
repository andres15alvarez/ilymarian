import styles from './happyday.module.css'
import Image from 'next/image'
import { AiFillHeart, AiOutlineArrowLeft } from "react-icons/ai"
import Link from 'next/link'

export default function HappiAnni() {
    return (
        <main className={styles.container}>
            <div className={styles.back}>
                <AiOutlineArrowLeft />
                <Link href='/' >
                    atras
                </Link>
            </div>
            <section className={styles.wrapper}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Feliz dia a la niña mas hermosa de este mundo 💓
                    </h2>
                    <div className={styles.para}>
                        Definitivamente eres lo mejor que me ha pasado este año, no solamente desde
                        que empezamos a salir, sino desde que saliamos como amigos. Eres una persona
                        increible y te convertiste en mi persona favorita. Siento que te conozco
                        desde hace muchisimo tiempo por la confianza que te tengo y por lo comodo
                        que me siento contigo. Contigo puedo ser yo sin ningun filtro y siempre
                        estas alli para mi 💓
                    </div>
                    <div className={styles.images}>

                    <Image src='/hellokittykiss.gif' className={styles.image} width={1000} height={800} alt='kitty kiss' />

                    </div>
                    <div className={styles.para}>
                        Te quiero muchisisisismo mi niña preciosa. Muchas gracias por
                        <ul className={styles.list}>
                            <li className={styles.list_item}>

                                <AiFillHeart className={styles.heart} />
                                <i>Estar siempre para mi y apoyarme</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>Darme abrazos por la espalda de sorpresa</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>Sentirme especial y querido a tu lado</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>Entenderme y no aburrirte de mi</i>
                            </li>
                            <li className={styles.list_item}>
                                <AiFillHeart className={styles.heart} />
                                <i>Ser tan buena persona, cariñosa, bondadosa, chistosa, gentil, preciosa y estar bien rica 🤭</i>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.images}>

                    <Image src='/kittyhug.gif' className={styles.image} width={1000} height={400} alt='kitty hug' />

                    </div>
                    <div className={styles.para}>
                        Te quiero muchisimo y no me canso de decirtelo, ni me canso de demostrartelo.
                        Quiero que lo nuestro sea siempre sano y bonito, para que el daño que te hicieron
                        en el pasado solo sea un reacuerdo y no dudes en que puedes ser querida y respetada.
                        Quiero mejorar para darte siempre la mejor version de mi y asi poder hacerte
                        la persona mas feliz. No te mereces menos de eso porque eres demasiado especial
                        y de muy buenos sentimientos.
                    </div>
                    <div className={styles.para}>
                        Deseo con todo mi ser el que podamos estar juntos lo mas pronto posible, se que
                        juntos podemos hacer que funcione y vivir una convivencia con mucho cariño.
                        Se que juntos nos motivamos el uno al otro en ser mejores y que vamos a lograr
                        cosas increibles.
                    </div>
                    <div className={styles.para}>
                    <span className={styles.anni}>Te quiero muchisimo mi vida hermosa, mi unico amor, mi niña preciosa 💓</span>
                    </div>
                    <div className={styles.images}>
                    <Image src='/kittykiss.gif' className={styles.image} width={1000} height={400} alt='kitty kisss' />
                    </div>
                </div>



            </section>

        </main>
    )
}
