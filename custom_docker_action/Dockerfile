# Use an official lightweight Python runtime as a parent image
FROM python:3.9-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Makes your code file executable
RUN chmod +x /entrypoint.sh

# Code file to execute when the docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
