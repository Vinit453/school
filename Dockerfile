FROM nginx:1.11-alpine
COPY dist/schoolManagement /usr/share/nginx/html/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
