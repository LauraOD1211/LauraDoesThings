#!/bin/sh
cd admin
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