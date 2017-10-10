Prior to running these instrcutions please git clone: https://github.com/sechoongkim/lsa-ex1.git OR git@github.com:sechoongkim/lsa-ex1.git (depending on your ssh configurations)

1. Please install all app dependancies with the following prompt on command line: $npm install

2. To run the app from the root directory run: $ node prober.js

3. Input a URL with http:// or https:// prepended -> ex: $ http://facebook.com

4. Input a file to write to -> ex: output.txt

5. At any point if you wish to kill the program hit ctrl-c

6. Output file will show up in the same directory level as where you run the program (root directory)



-----------
Notes:
___________

The output's status code will always be 200, redirects 3xx are reported as 200 

Please note that any errors in the app not pertaining to the site uptime (writing to a file, command line inputs) will be logged out to the console and will not be considered as site downtime