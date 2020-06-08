#!/bin/sh
cd client
ng build --prod
wait
mkdir ../core/public/
wait
mv -f dist/client/* ../core/public/
wait
pm2 restart app
wait