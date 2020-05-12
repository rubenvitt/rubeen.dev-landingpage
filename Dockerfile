FROM nginx:stable

COPY ./build/ /var/www
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
