#!/usr/bin/env bash

Endpoint="https://rtyf4y3woe.execute-api.eu-west-1.amazonaws.com/Prod/inventory"

printf "Adding iPhone X \n"
curl -X PUT \
  $Endpoint \
  -H 'Content-Type: application/json' \
  -d '{
	"product_name": "iPhone X",
	"product_manufacturer": "Apple Inc",
	"initial_stock": 100,
	"sku": "Apple_iPhone_X"
}'

printf "\n Adding iPhone 8 \n"
curl -X PUT \
  $Endpoint \
  -H 'Content-Type: application/json' \
  -d '{
	"product_name": "iPhone 8",
	"product_manufacturer": "Apple Inc",
	"initial_stock": 50,
	"sku": "Apple_iPhone_8"
}'

printf "\n Adding iPhone 7 \n"
curl -X PUT \
  $Endpoint \
  -H 'Content-Type: application/json' \
  -d '{
	"product_name": "iPhone 7",
	"product_manufacturer": "Apple Inc",
	"initial_stock": 25,
	"sku": "Apple_iPhone_7"
}'

printf "\n Adding iPhone 6S \n"
curl -X PUT \
  $Endpoint \
  -H 'Content-Type: application/json' \
  -d '{
	"product_name": "iPhone 6S",
	"product_manufacturer": "Apple Inc",
	"initial_stock": 10,
	"sku": "Apple_iPhone_6S"
}'
