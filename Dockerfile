FROM maven:3.6.0-jdk-11-slim AS build
 COPY src /home/app/src
 COPY pom.xml /home/app
 RUN mvn -f /home/app/pom.xml clean package

FROM java:8-jdk
COPY ./target/websocket-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app



ENTRYPOINT ["java","-jar","websocket-0.0.1-SNAPSHOT.jar"] 