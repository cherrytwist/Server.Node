#!/bin/sh

mysql --user=root --host=${DATABASE_HOST} --password=${MYSQL_ROOT_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE};"
mysql --user=root --host=${DATABASE_HOST} --password=${MYSQL_ROOT_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${JOLOCOM_MYSQL_DATABASE};"
mysql --user=root --host=${DATABASE_HOST} --password=${MYSQL_ROOT_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS kratos;"
