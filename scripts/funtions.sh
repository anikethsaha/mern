#!/bin/bash

startserver() {
        echo "starting server"
	node bin/server.js & 
	pid1=$!
	echo "PID is $pid1";

}

stopserver() {
  echo "Killing all node processes"
  kill $pid1;
  echo "Exiting with code $RETURN_CODE"
  exit $RETURN_CODE
}

# Wait for a service to be up Since I don't know how much time it will take
wait_for_service() {
  echo "> Waiting for $1 to be ready... "
  sleep 2
}

wait_for_app_services() {
  echo ""
  wait_for_service Server 127.0.0.1 5000
}
