FROM node:alpine
MAINTAINER Kurota <kyjita@gmail.com>

RUN apk add --update \
    supervisor \
  && rm -rf /var/cache/apk/*

ADD supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN /bin/mkdir -p /srv/logs

WORKDIR /srv

RUN npm install socket.io express ioredis -s

RUN npm dedupe


EXPOSE 3000

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
