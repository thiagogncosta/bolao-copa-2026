# Bolão Copa 2026 — Família Linda

## Como fazer o deploy

### 1. Configurar as regras do Firestore

No console do Firebase → **Firestore → Rules**, cole o conteúdo do arquivo `firestore.rules` e clique em **Publish**.

### 2. Push para o GitHub

```bash
git add .
git commit -m "adiciona Firebase"
git push
```

O GitHub Actions faz o deploy automaticamente para:
```
https://thiagogncosta.github.io/bolao-copa-2026/
```

### Senha do admin
`copa2026admin`  
Altere em `src/App.jsx` na constante `ADMIN_CODE`.
