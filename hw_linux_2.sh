pwd; la -la; du -sh
mkdir -p labs/task2/a/b/c
cd /labs/task2/a/b/c
touch test.txt
cd ..
cd /tmp/labs
cp -r task2 task2_backup
rm -r task2
tail -n 50 /var/log/auth.log
tail -f /var/log/auth.log
head -n 20 /var/log/auth.log
find / -type f -name "*.log" 2>/dev/null

