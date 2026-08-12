# Minha Cidade - Joinville / SC

Aplicação web desenvolvida em **React** e **Bootstrap** que apresenta informações turísticas, históricas e a localização geográfica da cidade de Joinville (SC), além de um formulário de contato dinâmico.

👉 **Acesse o site hospedado no Netlify aqui:**

---

## 📌 Funcionalidades e Componentes

### 📄 Página Inicial (`/`)
- **Header (`Header.jsx`)**: Barra de navegação responsiva com logo e links rotados via React Router.
- **Banner (`Banner.jsx`)**: Seção principal de destaque com mensagem de boas-vindas.
- **História (`Historia.jsx`)**: Contexto histórico sobre o casamento da Princesa Dona Francisca com o Príncipe de Joinville (1843) e a chegada dos imigrantes na Colônia Dona Francisca em 1851.
- **Turismo (`Turismo.jsx`)**: Exibição das atrações turísticas em formato de cards utilizando o sistema de grid do Bootstrap:
  - 📍 **Mirante de Joinville**: Vista panorâmica da cidade.
  - 📍 **Museu Nacional de Imigração e Colonização**: História da imigração e artefatos históricos.
  - 📍 **Parque Zoobotânico**: Área verde para passeios em família.
  - 📍 **Rua das Palmeiras**: Alameda histórica e ponto turístico tradicional.
- **Localização (`Localizacao.jsx`)**: Apresentação geográfica do município e mapa interativo integrado via **Google Maps (iframe)**.
- **Footer (`Footer.jsx`)**: Rodapé informativo com dados de direitos autorais.

---

### ✉️ Página de Contato (`/contato`)
- **Contato (`Contato.jsx`)**: Formulário com gerenciamento de estado (`useState`) para captura de Nome, E-mail, Assunto e Mensagem.
- **EnviaContato (`EnviaContato.jsx`)**: Componente que recebe os dados submetidos como *props* e exibe um feedback visual estilizado dos dados enviados.

---
