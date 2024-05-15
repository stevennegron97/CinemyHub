"use server";
export default async function getVideoLink(epiId, mediaId) {
	let videoLink;
	const res = await fetch(
		`https://consumet-jade.vercel.app/movies/dramacool/watch?episodeId=${epiId}&mediaId=${mediaId}`,
		{ cache: "force-cache" }
	);
	const data = await res.json();
	videoLink = data.sources[0].url;
	return videoLink;
}
