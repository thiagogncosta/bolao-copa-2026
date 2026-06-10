# Bolão Copa 2026 — Família Linda

App de bolão para a Copa do Mundo 2026 (EUA/México/Canadá).

## Deploy no GitHub Pages

### 1. Criar o repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: **`bolao-copa-2026`** (exatamente este nome)
3. Deixe como **Public**
4. **Não** marque nenhuma opção de inicialização (sem README, sem .gitignore)
5. Clique em **Create repository**

### 2. Fazer o push do código

No terminal, dentro desta pasta:

```bash
git init
git add .
git commit -m "primeiro commit — bolão copa 2026"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/bolao-copa-2026.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário do GitHub.

### 3. Ativar o GitHub Pages

1. No seu repositório, vá em **Settings → Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Salve

Pronto. O deploy acontece automaticamente a cada `git push` na branch `main`.
Após o primeiro push, aguarde ~1 minuto e o site estará em:

```
https://SEU_USUARIO.github.io/bolao-copa-2026/
```

## Dados

Os palpites são salvos no `localStorage` do navegador de cada participante.
Como o app é client-side, **todos precisam usar o mesmo dispositivo/navegador**
para que os dados fiquem compartilhados — ou cada um entra do próprio dispositivo
e o admin vê os resultados na tela de ranking.

> Para limpar dados de teste: Admin → Mata-mata → Visibilidade → "Apagar todos os participantes"

## Senha do admin

`copa2026admin`

Altere em `src/App.jsx`, linha com `const ADMIN_CODE`.
