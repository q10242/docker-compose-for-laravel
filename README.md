# docker-compose-for-laravel

the docker-compose yaml file for laravel env

這是laravel 用的docker 環境

如果是使用mysql 8以上的版本 需要進入mysql的container

docker exec -it mysql /bin/bash

 #for mysql 8.0 above

 mysql -u root -p

輸入密碼

 secret

改變預設的密碼認證方式


 ALTER USER 'homestead'@'%' IDENTIFIED WITH mysql_native_password BY 'secret';

其餘密碼部分請自行在檔案內設定
