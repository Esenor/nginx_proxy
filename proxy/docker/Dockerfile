FROM nginx

COPY ./nginx/.htpasswd /etc/apache2/.htpasswd

RUN mkdir -p /var/log/nginx/logs

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
