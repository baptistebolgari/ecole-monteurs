/** Extrait l'identifiant d'un lien de fichier Google Drive (pas d'un dossier). */
export function getDriveFileId(url: string): string | null {
  const match = url.match(/drive\.google\.com\/file\/d\/([\w-]{10,})/);
  return match ? match[1] : null;
}

/** Lecteur Google Drive 16:9, chargement différé. */
export function DriveEmbed({ url, title }: { url: string; title: string }) {
  const id = getDriveFileId(url);
  if (!id) return null;
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border border-border bg-[#131316]">
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        title={title}
        loading="lazy"
        allow="autoplay; fullscreen"
        allowFullScreen
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
}
