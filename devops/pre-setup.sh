#!/bin/bash/
set -e

#CODE DEPLOY SCRIPTS
 
DEPLOY_DIR=/home/ubuntu/CBS/deploy

sudo apt-get update
sudo rm -rf /opt/codedeploy-agent/deployment-root/deployment-instructions/*
sudo rm -rf $DEPLOY_DIR

mkdir $DEPLOY_DIR

exit 0
