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
                    back
                </Link>
            </div>
            <section className={styles.wrap}>
                <h2 className={styles.title}>
                    We have created so many beautiful memories tgt within these <span className={styles.color}>two most priceless years ^^</span>
                </h2>
                <h4 className={styles.subtitle}>
                    Thank u so much for giving me the chance to experience all of these beautiful n precious moments together with u my precious eapm lyy &gt;&lt;. Now lets revisit some of our beautiful moments back tgt :3
                </h4>
            </section>
            <section className={styles.memories}>
                <ImagesLeft img1={'https://dsm01pap007files.storage.live.com/y4m5HuXho4yvVoN-g9JmrJlHlE4HIVzK-XCChP2tVvzrMwL8PRqT8lmA3q_RPDUJ3LtJqUWaow_CgK-3ks9IwtV9eCkoEgzOzQWgUQH5wwW6gVf9ZGGZjwHEayqXZpJ_bhTmJtCiXfA0GGgs448TsLhsYEUHFuTuoDUpZQunTDoejl3j6piMXZXENXt8rZToeuY?width=610&height=1076&cropmode=none'} img2={'https://dsm01pap007files.storage.live.com/y4m7JZm0aT6xt_NDLfdfbk09hCxP-y8pp3uvJIyrH3mJdZnbOai9HUMlXNByIn7CV73dMKrawJBMytl12gRT_yplMCoxxBc3dWcaaQG_gNrEEdqYdEQOqo17DIVCdvLv5PpGhhyHrEsHQ7OTbi-0tIlDrBmv1kHWs7eCOBk9_aXRu5J8_REWuULIUXPktAUdTRi?width=960&height=1280&cropmode=none'} img3={'https://dsm01pap007files.storage.live.com/y4mgkmlT2RvqKtusk-TS-UyvkBEO21UXVvUgjdESeuLLrAeFKguXGINotEGUtIw0Y69CLTmS8dGDMSjsVBzGPK5weYmbIbb-z63QLwLwEj5u034EGChzyL-uQR8R5gXbUPjIN7DWoJrq1l2iTqWQOkZwnJH7Rn26Gq9eaoGd5dBoZwumTtQh_TLdvrgquQA233F?width=720&height=962&cropmode=non'} title={`Dates with you ><`}>
                    Do you know that the best and most beautiful moments I have ever got in my life and i will ever are all the moments spent going on dates with u my precious eapm lyy ^^. Just being around you makes me feel more special than ever. Im obsessed with ur beautiful n perfect face, ur eapmy soft hair with precious bangs, ur elegant hands, ur delicate skin, ur angelic voice, ur sweet scent n everything of u babe. I could admire u all the time forever. I wish i can reexperience all of our dates back but we r gonna date even so much more aren't we my chit sone &gt;&lt;.
                </ImagesLeft>
                <ImagesRight img1={'https://dsm01pap007files.storage.live.com/y4m3HDZ0q5l9U2n0k_H3FyKpLzVpCpiAuy3x0zvBo8WexCIuIR6h-z9ZTwTCKzfpn9s8RI_OJ6FN3nS67Ps-mZiV0aINjmGrR97JpPWlE7Hypv6qIDhNp7-x8agKKtHPXtgHe1Rgg3Pg8tjvN9AZesKIzwKSHK8rnmheDgXj3pVpHCSEtWOE-twgbI5ST_7xpnG?width=1920&height=1920&cropmode=none'} img2={'https://dsm01pap007files.storage.live.com/y4mvwXdDd7c7PRiaj7YuoOSWMX-5jRYHZUaPqGvn0MSn7tTLvGMd7YGCMK_NU8k2LYmIZHATwtIXA6XkejECZ2qut-NdDYusIBvABqxH4WMOFlUdHkDV8DqaL-eJvBnPkzJwV0-k8OaAMmk0ILyk540UFA-hdMjWVYXiph_PY7Ieo1amJmgeQ5rc0IufnBCU06q?width=1288&height=952&cropmode=none'} img3={'https://dsm01pap007files.storage.live.com/y4mTBw_qmPobkQGyUWtlUS51bqH_lkLRCjqNQsWYKDh4vDraK1xZnYXEtxuntIQ0BLbRpVcLe8nMRHBzc6dUTaudI0ONZHnhZvduK_oFwtseBnMOgNEBNOP3m4PQxmxiD2YaNaus7v-2m0mp69y6lw7bV7bdbnGBlcvGPDdD4zQLEb-k6MM5RnTvTuXQRJ0sDj8?width=512&height=512&cropmode=none'} title={`Chatting with you ><`}>
                    Uk i would never get tired of chatting with u cuz it makes me so happi n loved boo boo &gt;&lt;. My day wouldn't be perfect if it doesn't start or end chatting with u. Thank u for giving me ur time my precious eapm lyy thank u so much for being with me through online too :33. To think that we have sent so so sooo many messages between each other is just &gt;&lt;. So many chit sgrs so many care so many funny things too omg i can't even describe thinking abt all those back ^^. Those include so many gossips n teas n scenerios too tho &#128557;. But i enjoy all of them so much boo boo thank u for all :3333.
                </ImagesRight>
                <ImagesLeft img1={'https://dsm01pap007files.storage.live.com/y4mvtBX5ayKXrG2rITRyR5WZ_nvkxP8DJnmFn-Yek_ruhxKiMLF3IUzzPhg6Eci2Y3ZIaLoWLJMQMeNZGQ_xnHzgg6bLVT9V-csMl9EkO5emw3E3i3afkFgkvFOtSMJx5W9N7fnYwhocx9i-bf5XCMeCWRJSBvuh8SllrVwecXTm5CYky55Qbn3j8rj1w0QM4MA?width=1086&height=614&cropmode=none'} img2={'https://dsm01pap007files.storage.live.com/y4mByAjIIdIF8KepYP9e95wc4Usl39bBOV4GFI3bSKP1_mmoIXxYDI2tgDk8hmGoiH5wJvdHQkQaW_VNUOHrWn8xhFVrIZoT5eKckdGhluDRvdxptKIjfAe54kzmw991w8jZSIagS-XdoHi2B_LFFNIpYexY7tL8lFP18y_59ga0l4FlYxi63FMlenmSZm_yAiE?width=1416&height=1212&cropmode=none'} img3={'https://dsm01pap007files.storage.live.com/y4myTrs37XcBjfS-Q9TuenRS1J5C7_ccU4rQgjMdJzneNQSBExpdhREA_pvmDCbsDuAbqZLMLJ4ywCzu3QGQMARRav_PxQQ3Ki6vhzvLoVDJaWpaOPTvgy5zyah47swZ6-1qVVS_lll_qxMz_rT_9Vz-uQSJ6K8vxb1KyeYkUshYRFO4EacJCvxT7-pNZaiqUKX?width=482&height=358&cropmode=none'} title={`Tolking with u ><`}>
                    Soooo we hv had so many late nite tolks havent we boo boo &gt;&lt; We have tolked n stuff so many times haven't we my boo booo ^^. So many times from discord and on our dates as wello ^^. I lob tolking with u so much my precious eapm lyy :3. Pls forgib me if i sometimes sound off:(. But don't ever worry boo boo its never cuz of u ^^. Ure what makes me happi my boo boo ^^. Tolking with u makes me veri happi ^^. Happi happi happi &gt;&lt;. Also i lob it sm when u play piano for me my boo booo :333 n when u show me precious thrr ngl lyy mg charcoal ^^ n also when u open vid vid it makes my heart melt melt smmm &gt;&lt;. And i know u like it when i open vid too dont u babe &#128563; especially the transition between my pfp n my vid hehe. Okok jk babe &#128557;. Anyways we will be able to tolk in peace just the two of us irl even while hugging n cuddling n doing anything n at many beautiful places when we get there nwwwww :333333. I love u so much my precious eapm lyy ^^.
                </ImagesLeft>
            </section>
        </main >
    )
}