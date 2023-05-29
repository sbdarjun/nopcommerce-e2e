# Build the docker image using the following command:

- docker build -t nopcommerce .

# Run the following command to run the built docker image:

- docker run --name cypress -v ${PWD}:/app -d nopcommerce

# Run the following command to remove cypress image if already in running selectRandomProductName

- docker rm cypress
