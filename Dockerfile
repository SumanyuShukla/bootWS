FROM java:8-jdk
COPY ./target/BootWS-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app



ENTRYPOINT ["java","-jar","BootWS-0.0.1-SNAPSHOT.jar"] 