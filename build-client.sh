#!/bin/sh
cd client
ng build --prod
wait
rm -r ../core/public/
wait
mkdir ../core/public/
wait
mv -f dist/client/* ../core/public/
wait
pm2 restart app
wait