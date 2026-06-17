import { NextResponse } from "next/server";
import {
  getAccessToken,
  getPlaylistTracks,
  SpotifyPlaylistError,
} from "@/lib/spotify";
import fallbackTracks from "@/data/music.json";

export const dynamic = "force-dynamic";

export async function GET() {
  const playlistId = process.env.SPOTIFY_PLAYLIST_ID;

  if (!playlistId) {
    if (fallbackTracks && fallbackTracks.length > 0) {
      return NextResponse.json({
        playlistId: "fallback",
        playlistUri: "spotify:playlist:fallback",
        tracks: fallbackTracks,
      });
    }
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const accessToken = await getAccessToken();

  if (!accessToken) {
    if (fallbackTracks && fallbackTracks.length > 0) {
      return NextResponse.json({
        playlistId: "fallback",
        playlistUri: "spotify:playlist:fallback",
        tracks: fallbackTracks,
      });
    }
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  try {
    const tracks = await getPlaylistTracks(accessToken, playlistId);

    return NextResponse.json({
      playlistId,
      playlistUri: `spotify:playlist:${playlistId}`,
      tracks,
    });
  } catch (err) {
    if (err instanceof SpotifyPlaylistError) {
      return NextResponse.json(
        {
          error: "playlist_inaccessible",
          playlistId,
          message: err.message,
        },
        { status: err.status }
      );
    }

    return NextResponse.json({ error: "unavailable" }, { status: 502 });
  }
}
