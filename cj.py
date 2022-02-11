#!/usr/bin/python3
#coding=utf-8

import requests, json
eed = requests.get("http://cj.liuxiaohai.xyz/index.php?s=/Admin/Index/caiji")
print(eed.text)
