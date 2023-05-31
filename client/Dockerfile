# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container to /app/client
WORKDIR /app/client

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY . .

# Build the application
RUN npm run build

# Install serve
RUN npm install -g serve

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "dist", "-l", "3000"]
