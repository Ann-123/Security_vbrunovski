#!/usr/bin/env bash
mkdir folder1
cd folder12
mkdir folder2
touch folder2/1.txt
touch folder2/2.txt
rm -r folder2
cd
echo "Hello o am from USA" > hello1.txt
nano hello1.txt
I love USA
echo "I love ESTONIA" >> hello1.txt
mv hello1.txt folder1
