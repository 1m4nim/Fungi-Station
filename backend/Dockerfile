FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# ラッパーと設定ファイルをコピーして、依存関係をキャッシュ
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

# ソースコードをコピーして起動
COPY src ./src

EXPOSE 8080

CMD ["./mvnw", "spring-run"]
# ※もしくは、ビルドしてjarを実行する場合は以下（開発効率を重視するなら上記がおすすめ）
# CMD ["./mvnw", "spring-boot:run"]