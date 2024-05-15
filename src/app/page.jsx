import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
	return (
		<main className={styles.newbg}>
			<div className={styles.content}>
				<div className={styles.contentContainer}>
					<Link
						href={"/anime"}
						title="Click here to get redirected to the anime webpage"
					>
						<div className={styles.anime}>
							<h2>Anime</h2>
							<p>Here You Can Find All kind Of Anime </p>
						</div>
					</Link>
				
					<Link
						href={"/movies"}
						title="Click here to get redirected to the kdrama webpage"
					>
						<div className={styles.movies}>
							<h2>Movies & TV-Shows</h2>
							<p>Here You Can Find All kind Of Movies & TV-Shows</p>
						</div>
					</Link>
					<Link
						href={"/kdrama"}
						title="Click here to get redirected to the kdrama webpage"
					>
						<div className={styles.kdrama}>
							<h2>K-Dramas</h2>
							<p>Here You Can Find All kind Of Korean Dramas</p>
						</div>
					</Link>
					<Link
						href={"/manga"}
						title="Click here to get redirected to the manga webpage"
					>
						<div className={styles.manga}>
							<h2>Comics</h2>
							<p>Here You Can Find All kind Of Comics & Mangas</p>
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}

// Test push
