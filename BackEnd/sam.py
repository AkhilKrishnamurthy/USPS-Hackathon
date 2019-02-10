#!/usr/bin/env python
# coding: utf-8

# In[1]:


import subprocess
import sys

script_choice = sys.argv[1]
function_choice = sys.argv[2]

call_script = 'R_Scripts/' + script_choice + '.R'
cmd = ['Rscript', call_script] + [function_choice]
result = subprocess.check_output(cmd, universal_newlines=True)

print(result)
sys.stdout.flush()


# In[ ]:




