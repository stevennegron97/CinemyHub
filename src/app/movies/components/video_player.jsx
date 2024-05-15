"use client";

import styles from "../styles/video_player.module.css";
import { useState, useEffect } from "react";

export default function VIDEO_PLAYER({ id: id }) {
	const [frame, setFrame] = useState(null);

	useEffect(() => {
		make_player(`https://player.autoembed.cc/embed/movie/${id}`);
	}, []);

	function make_player(url) {
		setFrame(
			<iframe
				src={url}
				referrerPolicy="origin"
				allowFullScreen
				className={styles.VideoPlayer}
			></iframe>
		);
	}

	return (
		<section className={styles.VideoContainer}>
			<div>
				<button
					onClick={() =>
						make_player(`https://player.autoembed.cc/embed/movie/${id}`)
					}
				>
					Dubbed Server 
				</button>
				<button
					onClick={() =>
						make_player(`https://vidsrc.icu/embed/movie/${id}`)
					}
				>
					Premium S1
				</button>
				<button
					onClick={() =>
						make_player(`https://play2.123embed.net/movie/${id}`)
					}
				>
					Premium S2
				</button>
				<button
					onClick={() =>
						make_player(`https://vidsrc.to/embed/movie/${id}`)
					}
				>
					Premium S3
				</button>
				<button
					onClick={() =>
						make_player(
							`https://www.2embed.cc/embed/${id}`)
					}
				>
					Multi Server
				</button>
			</div>
			{frame}
		</section>
	);
}
