/** Extrait l'identifiant d'une vidéo YouTube (watch, youtu.be, embed, shorts). */
export function getYoutubeId(url: string): string | null {
  const value = url.trim();
  if (!value) return null;
  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

/** Lecteur YouTube 16:9, chargement différé, domaine youtube-nocookie. */
export function YoutubeEmbed({
  url,
  title,
  vertical = false,
}: {
  url: string;
  title: string;
  /** Format 9:16 (Short, Reel). */
  vertical?: boolean;
}) {
  const id = getYoutubeId(url);
  if (!id) return null;
  return (
    <div
      className={`relative ${vertical ? "aspect-[9/16]" : "aspect-video"} overflow-hidden rounded-2xl border border-border bg-[#131316]`}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`}
        title={title}
        loading="lazy"
        allow="encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
}
