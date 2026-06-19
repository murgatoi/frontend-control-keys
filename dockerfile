FROM node:20-alpine

WORKDIR /app

# Copia o arquivo de configuração de dependências
COPY package.json ./

# Otimizações para evitar quedas de conexão no Alpine Linux
RUN yarn config set network-timeout 300000 && \
    yarn config set child-concurrency 5

# Instala as dependências de forma estável
RUN yarn install

# Copia todo o restante dos arquivos do projeto
COPY . .

EXPOSE 5173

# Executa o servidor do Vite expondo a porta para fora do container
CMD ["yarn", "dev", "--host"]