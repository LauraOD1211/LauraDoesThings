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
cd ../admin
ng build --prod
wait
rm -r ../core/admin/
wait
mkdir ../core/admin/
wait
mv -f dist/admin/* ../core/admin/
wait
pm2 restart app
wait