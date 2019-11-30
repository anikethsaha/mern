#!/bin/bash

RETURN_CODE=0

  . ./scripts/funtions.sh
  startserver
  sleep 3
  echo ""
  echo "> Running lighthouse"
  npx lhci autorun
  RETURN_CODE=$?

  stopserver


exit $RETURN_CODE
