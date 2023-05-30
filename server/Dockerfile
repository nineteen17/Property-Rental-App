# Use an official Node runtime as a base image
FROM node:18-alpine

# Set the working directory in the container to /app/server
WORKDIR /app/server

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the docker image
COPY server/ .

# Build the application
RUN npm run build

# Make port 4000 available to the world outside this container
EXPOSE 4000

# Run the app when the container launches
CMD ["node", "build/server.js"]

