# GitHub'a Push Etme Talimatları

## 1. GitHub'da Repository Oluşturun
- https://github.com/new adresine gidin
- Repository adı: `react-dashboard-ui`
- Public veya Private seçin
- "Initialize this repository with a README" seçeneğini işaretlemeyin (zaten README var)
- "Create repository" butonuna tıklayın

## 2. Remote'u Ekleyin ve Push Edin

GitHub kullanıcı adınızı `YOUR_USERNAME` ile değiştirin:

```bash
git remote add origin https://github.com/YOUR_USERNAME/react-dashboard-ui.git
git branch -M main
git push -u origin main
```

Veya SSH kullanıyorsanız:

```bash
git remote add origin git@github.com:YOUR_USERNAME/react-dashboard-ui.git
git branch -M main
git push -u origin main
```

## 3. Sonraki Push'lar İçin

Sadece şu komutu kullanın:
```bash
git push
```
