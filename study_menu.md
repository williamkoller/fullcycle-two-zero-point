### Arquitetura de software
 1 Fundamentos da arquitetura de software
  - Pilares
  - Momentos no mundo da arquitetura
  - Guias sobre Arquitetura
  - Sistemas monolíticos
  - Tipos de escalonamentos
  - BFF
 
 1.1 Microsserviços
  - Principais conceitos
  - Vantagens e Desvantagens
  - Quebrando aplicações monolíticas
  - Principais patterns
  - Complexidades
 
 1.2 Domain Driven Design
  - Entendendo DDD
  - Linguagem Ubíqua
  - Domínio e subdomínios
  - Contextos delimitados
  - Mapas de contextos
  - Design patterns

 1.3 Arquitetura Hexagonal
  - Fundamentos
  - Motivações
  - Evoluções
  - Principais camadas
  - Direcionamento único
  - Dependency Inversion

 1.4 Comunicação entre serviços
  - Comunicação síncrona vs assíncrona
  - REST
  - gRPC
  - Filas com RabbitMQ
  - Apache Kafka

 1.5 Apache Kafka
  - Principais conceitos
  - Conceitos básicos a prática
  - Desenvolvendo aplicação
  - Kafka Connect na prática
  - Serviços gerenciados

 1.6 Autenticação entre Microsserviços
  - Formatos de autenticação
  - Saml2
  - OAuth2
  - OpenID Connect
  - Keycloak na prática

 1.7 Service discovery
  - O que é service discovery
  - Exemplos diários
  - Formatos de descoberta de serviço
  - Service discovery na prática com Consul
  - Desenvolvimento de Microsserviços

### Desenvolvimento de Microsserviços

 2 Java com Spring
  - Ambiente Docker
  - API REST
  - Testes automatizados
  - Ecossistema Spring: Data JPA, Web, Test, AMQP
  - Integração com RabbitMQ
  - Autenticação com Keycloak
  - Integração com Object Storage

 2.1 PHP e Laravel
  - Desenvolvimento de APIs REST
  - Testes de unidade e integração
  - Integração RabbitMQ
  - Filtros personalizados
  - Sincronização de dados
  - Laravel Dusk
  - Configuração do ambiente com Docker e Nginx
  - Autenticação com Keycloak


 2.2 Node.js com Loopback e Elasticsearch
  - TypeScript
  - Comunicação com ElasticSearch
  - ES7 Decorators
  - Integraçãom com Mensageria
  - Resiliência e tolerância
  - Autenticação com Keycloak
  - API REST


 2.3 Processamento de vídeos com Golang
  - Introdução a conceitos de computação
  - Memória, Threads e Goroutines
  - Trabalhando com testes
  - Conversão e fragmentação de vídeos
  - Upload Manager
  - Integração com RabbitMQ


 2.4 Python com Django
  - Área administrativa
  - Integração com RabbitMQ
  - Autenticação com Keycloak
  - Django ORM
  - Testes automatizados

 2.5 Frontend com React.js
  - TypeScript
  - React Hooks
  - Material UI
  - Context API
  - Redux e Redux Saga
  - Uploads paralelos de imagens e vídeos


 2.6 Autenticação com Keycloak
  - Introdução ao OAuth 2 e OpenID Connect
  - Iniciando com Keycloak
  - Geração de Access Token e IDToken
  - Atributos de usuário
  - Roles e Grupos
  - Gerenciamento de temas

### DevOps

 3 Docker do básico ao avançado
  - Instalação
  - Gerenciamento básico de containers
  - Volumes
  - Networks
  - Docker-compose
  - Build de imagens
  - Trabalhando com templates
  - Otimizando imagens


 3.1 Gitflow
  - Entendendo Gitflow
  - Gitflow e Pull Requests
  - Trabalhando com Releases
  - Hotfix


 3.2 Práticas avançadas com Github
  - Regras importante para os branches
  - CODEOWNERS
  - Configuração do processo de Code Review
  - Geração de Tags e Releases
  - Bumb versioning
  - Assinatura de commits
  - Semantical versioning
  - Conventional Commits


3.3 Integração contínua
  - Introdução
  - Trabalhando com Github Actions
  - Gerenciamento de Secrets
  - Geração automática de versão
  - Integração com diferente Dockerhub
  - Deploy no Kubernetes

3.4 Qualidade de código com SonarQube
  - Visão geral
  - Instalando SonarQube e sonar-scanner
  - Configuração de projetos
  - Exclusão e inclusões de pastas
  - Trabalhando com SonarCloud
  - SonarCloud no processo de CI


3.5 Kubernetes
  - Introdução ao mundo Kubernetes
  - Configurando Kubernetes local com Kind
  - Pods, ReplicaSets e Deployments
  - Secrets e ConfigMaps
  - Gerenciamento de namespaces
  - Gerenciamento de recursos computacionais
  - Horizontal Pod Autoscaler
  - Kubernetes Lens
  - Instalação de pacotes com Helm


3.6 Service Mesh com Istio
  - Conceitos básicos sobre Service Mesh
  - Instalando Istio
  - Virtual Service e Ingress Gateway
  - Regras para Load Balancer
  - Timeouts e Retries
  - Cirtcuite Breaker
  - Geração de certificados SSL


3.7 Observabilidade
  - Prometheus e Grafana
  - Elastic Stack
  - Tracing distribuído com Jaeger
  - Observabilidade com Kiali


3.8 IaC com Terraform
  - Principais conceitos
  - Variáveis, Outputs e Datasources
  - Recursos na prática
  - Provisionando Cluster Kubernetes
  - Criação de módulos
  - States remoto


3.9 Ansible
  - Entendendo o mundo Ansible
  - Inventário, módulos e argumentos
  - Rodando Ansible com Docker
  - Rodando Ansible na AWS
  - Playbooks
  - Ansible-galaxy