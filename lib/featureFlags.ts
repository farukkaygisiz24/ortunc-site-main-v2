/**
 * Site özellik anahtarları.
 *
 * Mevzuat güncellemeleri modülünü yayına almak için:
 *   MEVZUAT_GUNCELLEMELERI_ENABLED = true
 */
export const MEVZUAT_GUNCELLEMELERI_ENABLED = false;

export function isMevzuatGuncellemeleriEnabled(): boolean {
  return MEVZUAT_GUNCELLEMELERI_ENABLED;
}
