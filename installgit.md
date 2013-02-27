# Challenge: Install Git

## Using Git and Bash
We're going to be copying files from GitHub, putting them our computer, making changes to them and then sending them back to GitHub to store and make available to everyone else. To do this, we'll use **Git**, which keeps track of changes in files, and **Bash**, which allows us to issue commands. With these tools we can talk to our computer, Git and GitHub and tell them what to do with files. 

### Install Git
*A few of the steps may require your computer's password if one is set*

1. Visit [git-scm.com](http://git-scm.com) and download the latest version for your operating system.
* In Mac, you won't notice anything or see the application installed, but it will install on your computer.
* In Windows, hit `Ok` or `Next` for all options, then finish (you don't have to review notes).

### Use Bash 
![terminal and git bash](http://diy-visualpedia.s3.amazonaws.com/terminal-bash-01.png)

In Mac you've already got Bash. If you go to your `Launchpad` and search for `Terminal`, this is the application you'll use.

In Windows you got Bash when you installed Git. Go to `Programs` > `Git` and select `Git Bash`.

We'll refer to both Mac's *Terminal* and Window's *Git Bash* as just *Bash*.

> screenshot of both a terminal and git bash window

Let's check our Git. In the Bash window type:

    git --version

You should have been returned a line with the version number, this means that git was correctly installed and is up and running!

![git --version](http://diy-visualpedia.s3.amazonaws.com/git-version.png)

### Configure Git
We need to tell Git who we are so that when we move files around it knows who is moving them. Type the following lines one at a time into Bash and inside of the quotations add the email you signed up to GitHub with and your GitHub username.

    git config --global user.email "yourGitHub@email.com"
    git config --global user.name "yourGitHubusername"
    
![git config](http://diy-visualpedia.s3.amazonaws.com/git-config.png)
