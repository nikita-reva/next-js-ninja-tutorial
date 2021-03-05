import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
				<meta name="description" content="Ninja List" />
			</Head>
			<div>
				<h1 className={styles.title}>Hompage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Iste eum dicta illum numquam tempora quae! Accusamus soluta
					officiis quos nostrum eaque magni consectetur.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Repudiandae atque adipisci, ad fuga tempore ratione quod
					libero quas, magnam voluptatem incidunt, voluptates ipsam.
					Doloribus officia iste ipsam expedita!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	)
}
