# 🍰 Cardápio Online - Doceria D'M

Um cardápio digital responsivo feito em Angular, com foco em facilidade de navegação, experiência do cliente e integração com WhatsApp para pedidos. Inspirado no layout criado no Figma.

## 🧁 Funcionalidades (MVP)
- Visualização de produtos por categoria:
  - Pronta entrega
  - Encomendas
  - Produtos do mês
- Sistema de carrinho de compras
- Link de pedido direto pelo WhatsApp
- Layout responsivo com Angular Material
- Separação de componentes reutilizáveis
- Estilo personalizado com SCSS

## 🚀 Tecnologias e Ferramentas
- [Angular 20.1.3](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- SCSS (Sass)
- Git e GitHub
- Figma (Design base)

## 📁 Estrutura do Projeto
```
src/
├── app/
│   ├── components/        # Componentes compartilháveis (header, footer, etc)
│   ├── pages/             # Páginas principais (home, encomendas, carrinho)
│   ├── models/            # Interfaces e tipagens
│   ├── data/              # Dados simulados (mock)
│   └── services/          # Serviços como carrinho, produtos, etc
├── assets/                # Imagens e estilos globais
└── styles.scss            # Estilos globais
```

## 🛠️ Instalação e Execução Local
```bash
git clone https://github.com/seu-usuario/cardapio-doceria.git
cd cardapio-doceria
npm install
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

## 📝 To-Do (Próximas Etapas)
- [ ] Estruturação das rotas e páginas
- [ ] Criação dos componentes (produto-card, header, navbar)
- [ ] Serviço de carrinho
- [ ] Integração com WhatsApp
- [ ] Deploy no Firebase ou Vercel

## 📷 Layout no Figma
[🔗 Acesse o protótipo no Figma](https://www.figma.com/make/9Via2tDZSyduGtLY7JWBfS/Card%C3%A1pio-Online-Doceria-D-M?fullscreen=1)

## 📦 Licença
MIT © 2025 - Projeto pessoal desenvolvido para a doceria **Não Resistir!**
