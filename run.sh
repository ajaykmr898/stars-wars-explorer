#!/bin/bash
echo "Old containers running for star-wars-explorer?"
cont=$(docker ps -aqf "name=star-wars-explorer")
if [ -z "$cont" ]
then
	echo "No old containers running to stop..."
else
    echo "Yes, Stopping old containers..."
    docker stop $cont
fi
echo "Building angular image..."
docker build -t star-wars-explorer .
echo "star-wars-explorer image built successfully!"
echo "Running star-wars-explorer image..."
docker run -dit --rm --name star-wars-explorer -v $(pwd):/var/www/html/star-wars-explorer -p 4200:4200 star-wars-explorer
echo "Installing node packages... 0%"
docker exec -d star-wars-explorer npm install
for i in {1..10}; do echo "Installing node packages... $(( 10*i ))%"; sleep 5; done
echo "npm packages installed"
echo "Compiling star-wars-explorer app... 0%"
docker exec -d star-wars-explorer npm start
for i in {1..10}; do echo "Compiling star-wars-explorer app... $(( 10*i ))%"; sleep 5; done
echo "App launched, please go to http://localhost:4200"