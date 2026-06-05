# Spotify Release Preview Workflow

When the Spotify release monitor finds a new Daniel Edokpayi release, prepare a local preview only.

1. Update `release-data.js`.
2. Put the newest single, EP, or album in `siteReleaseData.latestRelease`.
3. Add the release to the correct catalog folder: `albums`, `eps`, or `singles`.
4. Add a timeline entry with the Spotify release date.
5. If the release has tracks, add clean local track links only after matching track pages exist.
6. Add or update Spotify compact embed IDs in `featured-rotation.js` only for spotlight tracks.
7. Do not push, publish, or deploy. Report the detected release, changed files, and the local preview URL.

For a new cover image, use the Spotify artwork URL for preview notes unless a local image asset has already been added.
