# Use official Nginx base image
FROM nginx:alpine

# Set working directory inside container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx index page
RUN rm -rf ./*

# Copy all your frontend files into the Nginx html directory
COPY . .

# Expose port 3000 to host
EXPOSE 3000
