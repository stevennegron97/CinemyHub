HubHubimport Link from "next/link";
import styles from "../../page.module.css";

export default async function Header() {
	return (
		<main className={styles.main}>
			<div className={styles.header}>
				<div className={styles.left}>
					<Link
						href={"/"}
						style={{ textDecoration: "none", color: "white" }}
					>
						<p>Cinemyhub</p>
					</Link>
				</div>
				<div className={styles.right}>
					<Link href="/anime">Anime</Link>
					<Link href="/movies">Movies</Link>
					<Link href="/movies">TV Shows</Link>
					<Link href="/kdrama">K-Dramas</Link>
					<Link href="/manga">Comics</Link>
					
				</div>
			</div>
		</main>
	);
}
