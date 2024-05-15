## Dramalama

CinemyHub is an online service where you can watch Movies,kdramas and Anime and read Mangas for free.



## Description

This web application, built with the Next.js framework, relies on data fetched from the Consumet API. The anime section benefits from server-side rendering, ensuring efficient performance. To maintain uniformity, both the kdrama and manga sections have been updated to utilize server-side rendering (SSR), aligning them with the architecture of the anime section.

## Features

#### Kdrama

-   Users can search for dramas by their title.
-   The platform is designed to be responsive, ensuring compatibility with all screen sizes.
-   HLS streams, meaning the quality will adapt to your network conditions automatically.

#### Anime

-   The homepage displays top airing anime and recent episode releases.
-   Users have the option to search for anime titles.
-   Due to server-side rendering, requests are cached. This means that if a user visits a specific episode of an anime and then tries to revisit it, the page will load instantly. This caching benefits other users who are attempting to watch the same anime.
-   Vidstack serves as the video player.

#### Manga

-   Users can search for mangas/manhwa by their title
-   A good looking info page

## Content Guidelines

CinemyHub doesn't stores any data. It fetches it data through  API which in turns scrapes other websites to get that stream. If you have any problem, then try contacting the owner of those websites.


