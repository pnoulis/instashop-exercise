#!/usr/bin/env bash

curl -X GET \
     -H "X-Parse-Application-Id: $APP_ID" \
     ${SERVER_URL}/classes/Landmark
