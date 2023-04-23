# Specify the base image with the version of node you need
FROM node:19

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application will be running on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
