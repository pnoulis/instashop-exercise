#!/usr/bin/env bash

curl -X GET \
     -H "X-Parse-Application-Id: $APP_ID" \
     -d "username=${LOGIN_USERNAME}" \
     -d "password=${LOGIN_PASSWORD}" \
     ${PUBLIC_SERVER_URL}/login
