/** Mevzuat detay HTML'inden senkronizasyon kalıntılarını temizler. */
export function sanitizeMevzuatBodyHtml(html) {
  if (!html) return "";

  let out = html;

  out = out.replace(/\s*custom-cursor-[a-z-]+/gi, "");
  out = out.replace(/\s+xss=removed/gi, "");
  out = out.replace(/<a[^>]*class="text-danger"[^>]*href=""[^>]*>[\s\S]*?<\/a>/gi, "");
  out = out.replace(/<p>\s*<br\s*\/?>\s*<\/p>/gi, "");
  out = out.replace(/\sclass="\s*"/gi, "");
  out = out.replace(/\sclass='\s*'/gi, "");

  return out.trim();
}
