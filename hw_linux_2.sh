#!/bin/bash
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
sudo grep -rni "Failed password" /var/log/ 2>/dev/null
grep -E -o "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" /etc/passwd
sudo grep "Failed password" /var/log/auth.log | grep -E -o "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" | sort | uniq -c | sort -rn | head -n 10
ls -l script.sh; chmod 744 script.sh; ls -l script.sh; chmod 644 script.sh; ls -l script.sh
echo "--- Кто я ---"; whoami; echo "--- Мой ID и группы ---"; id; echo "--- Кто в системе ---"; who; echo "--- Последние 10 логинов ---"; last -n 10
ps aux | grep -E "apache|nginx"; kill 1234; sudo ss -tulnp | grep ":4444"
ip a; ss -tulnp; ping -c 3 8.8.8.8; curl -I https://example.com
grep -r "error" /tmp/logs/ | wc -l > /tmp/error_count.txt
strings /tmp/malware.bin | grep -E -i -o "password|key|[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}|https?://[^[:space:]\"']+"
