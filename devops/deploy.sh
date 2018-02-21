DEPLOY_DIR=/home/ubuntu/CBS/deploy
APP_NAME=RADIOCOM
APP_ROOT=$DEPLOY_DIR/index.js

echo "\n\n\nstarting the app\n\n\n"
pm2 restart $APP_NAME -f

exit 0
