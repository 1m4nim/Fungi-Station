FROM node:20-alpine

WORKDIR /app

# 依存関係のキャッシュを利用するため、まずpackage.jsonをコピー
COPY package*.json ./
RUN npm install

# ソースコードをコピー
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]