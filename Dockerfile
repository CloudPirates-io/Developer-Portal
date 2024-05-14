FROM nginx:alpine

COPY /conf/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY /docs/.vitepress/dist /usr/share/nginx/html

# User nginx (gid 101, uid: 101 from base image)
RUN chown -R 101:101 /usr/share/nginx/html
