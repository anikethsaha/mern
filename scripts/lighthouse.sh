#!/bin/bash

RETURN_CODE=0

  . ./scripts/funtions.sh
  startserver
  wait_for_app_services
  echo ""
  echo "> Running lighthouse"
  npx lhci autorun
  RETURN_CODE=$?

  stopserver


exit $RETURN_CODE
