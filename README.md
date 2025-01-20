# Sistema de Gerenciamento de Tarefas

    Este é um sistema de gerenciamento de tarefas desenvolvido com Vue 3 e Vite, utilizando Vuetify para a interface do usuário e Pinia para o gerenciamento de estado. O sistema oferece funcionalidades para gerenciar usuários, disciplinas, matrículas, tarefas e visualizar um quadro semanal.

    ## Funcionalidades

    - **Autenticação:**
      - Login de usuários com diferentes tipos (Aluno, Professor, Coordenador).
    - **Dashboard:**
      - Visão geral do sistema com informações resumidas e um gráfico de progresso semanal.
    - **Gerenciamento de Usuários:**
      - Listagem de usuários cadastrados.
      - Edição de usuários existentes.
    - **Gerenciamento de Disciplinas:**
      - Listagem de disciplinas.
      - Criação de novas disciplinas.
      - Edição de disciplinas existentes.
      - Exclusão de disciplinas.
    - **Solicitação de Matrícula:**
      - Listagem de disciplinas disponíveis para matrícula.
      - Solicitação de matrícula em disciplinas.
    - **Aprovação de Matrícula:**
      - Listagem de solicitações de matrícula pendentes.
      - Aprovação ou rejeição de solicitações de matrícula.
    - **Gerenciamento de Tarefas:**
      - Listagem de tarefas.
      - Criação de novas tarefas.
      - Entrega de tarefas.
    - **Quadro Semanal:**
      - Visualização das tarefas agendadas para cada dia da semana.

    ## Rotas

    O sistema utiliza o Vue Router para a navegação entre as diferentes páginas. As rotas são definidas no arquivo `src/router/index.js` e incluem:

    - `/login`: Página de login.
    - `/`: Dashboard principal.
    - `/usuarios`: Página de gerenciamento de usuários.
    - `/disciplinas`: Página de gerenciamento de disciplinas.
    - `/solicitar-matricula`: Página para solicitar matrícula em disciplinas.
    - `/aprovar-matricula`: Página para aprovar solicitações de matrícula.
    - `/tarefas`: Página de gerenciamento de tarefas.
    - `/quadro-semanal`: Página com o quadro semanal de tarefas.

    ## Estrutura do Projeto

    - `src/`: Contém o código fonte da aplicação.
      - `components/`: Componentes reutilizáveis da interface do usuário.
      - `stores/`: Arquivos de gerenciamento de estado com Pinia.
      - `router/`: Configuração das rotas da aplicação.
      - `views/`: Componentes que representam as diferentes páginas da aplicação.
      - `main.js`: Ponto de entrada da aplicação.
      - `App.vue`: Componente raiz da aplicação.
    - `public/`: Arquivos estáticos da aplicação.
    - `package.json`: Arquivo de configuração do projeto com as dependências e scripts.
    - `vite.config.js`: Arquivo de configuração do Vite.

    ## Como Executar

    1. Certifique-se de ter o Node.js e o npm instalados.
    2. Clone o repositório do projeto.
    3. Navegue até a pasta do projeto no terminal.
    4. Execute `npm install` para instalar as dependências.
    5. Execute `npm run dev` para iniciar o servidor de desenvolvimento.
    6. Abra o navegador e acesse o endereço exibido no terminal.

    ## Dependências

    - **Vue 3:** Framework JavaScript para construção de interfaces de usuário.
    - **Vite:** Ferramenta de build rápida para desenvolvimento web.
    - **Vuetify:** Framework de componentes para Vue com design Material.
    - **Pinia:** Biblioteca de gerenciamento de estado para Vue.
    - **Vue Router:** Biblioteca para navegação entre páginas em aplicações Vue.
    - **@mdi/font:** Ícones Material Design.
    - **chart.js:** Biblioteca para criação de gráficos.
    - **date-fns:** Biblioteca para manipulação de datas.
    - **firebase:** SDK para integração com o Firebase.

    ## Configuração do Firebase

    Este projeto utiliza o Firebase para autenticação e armazenamento de dados. Para configurar o Firebase:

    1. Crie um projeto no Firebase Console.
    2. Adicione um aplicativo web ao seu projeto.
    3. Copie as configurações do Firebase para um arquivo de configuração (por exemplo, `src/firebase.js`).
    4. Instale o SDK do Firebase com `npm install firebase`.

    ## Notas

    - Este projeto é um ponto de partida e pode ser expandido com novas funcionalidades e melhorias.
    - A autenticação é simulada para fins de demonstração. Em um ambiente de produção, a autenticação deve ser implementada com um backend real.
    - O armazenamento de dados também é simulado. Em um ambiente de produção, os dados devem ser armazenados em um banco de dados.
    - Os componentes de edição e criação de dados (usuários, disciplinas, tarefas) utilizam modais para uma melhor experiência do usuário.
    - O sistema é responsivo e se adapta a diferentes tamanhos de tela, utilizando os breakpoints do Vuetify.
    - O sistema utiliza `localStorage` para persistir o estado de autenticação do usuário.
    - O sistema utiliza `computed` properties para filtrar e exibir dados de forma dinâmica.
    - O sistema utiliza `ref` para criar variáveis reativas.
    - O sistema utiliza `watch` para observar mudanças em propriedades e executar ações.
    - O sistema utiliza `defineProps` para definir as propriedades de um componente.
    - O sistema utiliza `defineEmits` para emitir eventos de um componente.
    - O sistema utiliza `onMounted` para executar ações após o componente ser montado.
    - O sistema utiliza `async/await` para lidar com operações assíncronas.
    - O sistema utiliza `v-model` para criar bindings bidirecionais entre os inputs e as variáveis.
    - O sistema utiliza `v-for` para renderizar listas de elementos.
    - O sistema utiliza `v-if` para renderizar elementos condicionalmente.
    - O sistema utiliza `v-bind` para passar propriedades para os componentes.
    - O sistema utiliza `v-on` para lidar com eventos dos componentes.
    - O sistema utiliza `router-link` para criar links de navegação.
    - O sistema utiliza `router-view` para renderizar o componente da rota atual.
    - O sistema utiliza `pinia` para gerenciar o estado da aplicação.
    - O sistema utiliza `vuetify` para criar a interface do usuário.
    - O sistema utiliza `vite` para criar o build da aplicação.
    - Os componentes de listagem (usuários, disciplinas, tarefas) incluem filtros para facilitar a busca de informações.
    - O componente de quadro semanal exibe as tarefas agendadas para cada dia da semana.
    - O componente de solicitação de matrícula permite que os usuários solicitem matrícula em disciplinas disponíveis.
    - O componente de aprovação de matrícula permite que os coordenadores aprovem ou rejeitem as solicitações de matrícula.
    - O componente de entrega de tarefas permite que os alunos entreguem as tarefas.
    - O sistema utiliza componentes reutilizáveis para criar uma interface consistente e fácil de manter.
    - O sistema utiliza estilos CSS para criar uma interface agradável e responsiva.
