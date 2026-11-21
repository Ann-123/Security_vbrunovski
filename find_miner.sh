#!/bin/bash
ps aux --sort=-%cpu | head -n 2
PID=$(ps aux --sort=-%cpu | awk 'NR==2 {print $2}')
sudo ls -l /proc/$PID/exe
sudo ss -tulnp | grep "pid=$PID,"
timeout 15 nc -lvnp 4444
