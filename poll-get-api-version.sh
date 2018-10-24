#!/usr/bin/env bash

Endpoint="https://rtyf4y3woe.execute-api.eu-west-1.amazonaws.com/Prod/inventory"

while true; do
  curl -s -X GET $Endpoint | jq '."API Version"'
done
