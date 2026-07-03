# ORTUNÇ Yetkilendirilmiş Gümrük Müşavirliği A.Ş. — Kurumsal Web Sitesi

ORTUNÇ YGM için Next.js tabanlı kurumsal web sitesi.

## Teknoloji

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Statik export (`output: 'export'`) veya standalone sunucu modu

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## Paylaşım paketi

Kişisel / yerel dosyalar hariç zip oluşturmak için:

```bash
npm run package:share
```

Üst klasörde `ortunc-site-main-share.zip` oluşur. Zip içinde **yoktur**:

- `.git` (commit geçmişi, yazar bilgileri)
- `node_modules`, `.next`, `out`, `.cache`
- `.cursor`, `.claude`, `.vercel`

Alıcı zip'i açıp `npm install && npm run dev` ile çalıştırabilir.

## Derleme

```bash
npm run build
```

Statik çıktı `out/` klasöründe oluşur.

## Mevzuat senkronizasyonu

```bash
npm run sync:mevzuat
npm run sync:mevzuat:details
```
