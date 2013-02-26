![simply git](http://diy-visualpedia.s3.amazonaws.com/git-graphic-01.png)

# Git and GitHub

**Git** is software that helps manage your code. It allows you see the changes that you've made, called *diffs*, and undo changes when you've saved mistakes! **GitHub** makes Git even easier and social. With GitHub you can put your code online and share it with others. Users can create new projects and work together on projects -- making something better, together. Like the Petigraffe above!

Lots of places use GitHub for their code and a lot of places open source their code. Here is [DIY's account](https://github.com/diy) - all of our code that runs the website and app is stored on GitHub and we've made 30+ projects open source. The [New York Times](https://github.com/NYTimes), [Facebook](https://github.com/facebook), and [Mojang](https://github.com/Mojang) who make Minecraft are on GitHub, too. 

Oh, and GitHub has a cool mascot, Octocat, check out all the [personalities](http://octodex.GitHub.com/)!

***
# Challenge: Make a GitHub Account and Create a Repo

## Make a GitHub Account
Visit [www.GitHub.com](http://www.GitHub.com) and sign up for a free account (you'll need an email address to create an account). 

### Exploring GitHub
Since you've just joined GitHub, there won't be much on your account page. Let's have a look at DIY's page. Go to [www.GitHub.com/diy](www.GitHub.com/diy). 

*screencast - repository, users, organizations, forks, explore page, octocat.*

![GitHub organization page](http://diy-visualpedia.s3.amazonaws.com/github-org-page-01.png)

Parts of the page:

1. **Users** Everyone on GitHub is a user. Some users belong to organizations.
2. **Organization** Organizations have accounts on GitHub, the users who contribute to their code are called **members** and typically are employees or others close to the organization.
3. **Repository** These are projects on GitHub, they contain all the project's instructions and files. Often people say "repo," short for repository. Public repos are open source! 

On pages that list repos such as an organization's page, you can quickly see the language used in the repo, the number of favorites the repo has and how many people have forked a copy of the repo (we'll talk more about forking later). 

![GitHub repo](http://diy-visualpedia.s3.amazonaws.com/github-repo-01.png)

### Explore the Repo
Go to [GitHub.com/diy](http://github.com/diy) and click the repo called [Open-Sourcerer](http://www.GitHub.com/diy/open-sourcerer). Now you're on the page for this repo. You can see the files inside the repo, the readme.md gives you instructions for using the project and you can see when changes have been made to the files, these are called *commits*.

![diy repo](http://diy-visualpedia.s3.amazonaws.com/git-repo-page-01.png)

##Create a Repo
To create a new repo, from your account page:

![click new repo](http://diy-visualpedia.s3.amazonaws.com/click-repo.png "click new repo icon")

1. Click the new reop button near the top left of your menu
2. Give your repo a name and short description
3. Keep 'Pubic' selected
4. Check to initialize with a README
5. Click `Create Repository`

![readme](http://diy-visualpedia.s3.amazonaws.com/intialize-readme.png)

Awesome! Now you've created your very own repo. 

##Edit a File
You can actually edit files right in GitHub.com! Click the linked blue filename, README.md. Next, click `Edit`.

You've now got a text box that you can type directly into. Once you've made changes, add a short `commit summary` this is your **commit message** that summarizes the changes you've made. Then click `commit changes`! 

***

# Challenge: Fork a Repository

## Forking 
When you create a copy of a repo created by someone else it's called a **fork**. It's a **remote** copy, meaning the files are stored on GitHub.com and it stays linked to the original repo we copied it from. 

1. If you're not already there, go to [GitHub.com/diy](http://github.com/diy) and click on the repo [Open-Sourcerer](https://github.com/diy/open-sourcerer).
2. Near the top right, click `Fork`. Check out that animation! This means we're creating a linked copy of the code onto our account.

![forking](http://diy-visualpedia.s3.amazonaws.com/repo-fork.png)

***

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

***
# Challenge: Clone a Repo in Bash

DIY has a repo with a story in it, we need everyone to help complete the story by adding parts to it.

## Cloning
You need a forked file to clone so make sure you've completed the earlier challenge on forking. The fork we created is a remote (like a far away remote island) copy stored on GitHub.com but we want the files on our computer, so we need to **clone** (aka copy) them onto our computer. Files are on your computer are considered **local** - they're much closer than files stored on servers who-knows-where, right?! Our clone will be linked to our fork which is linked to the DIY original.

### Open Bash
Open a new window in bash, or if all you've done is set up git from earlier, you're fine to use the same window.

### Navigate to Folder
We want to use Bash to move into a folder we want to clone (copy) into. Bash starts us at the root of our computer's files. 

![bash navigation](http://diy-visualpedia.s3.amazonaws.com/bash-nav.png)

To move to another folder, we need to *change directories* or **cd**. 

In Macs type:

    cd Documents
    
In Windows type:

    cd My\ Documents/
    
*The slashes let Bash know that there is a space between 'My' and 'Documents'*

Now we're inside the Documents folder, let's put the DIY repo in it!

### Clone the Repo
We want to tell Git to go to the place where GitHub.com is remotely storing our forked files and clone them to where we are right now inside of the Documents folder. Each repo on GitHub.com has an address for its location. You'll see it following the HTTP and SSH buttons near the top middle of the page. Click on HTTP, this is the address you'll use. 

![HTTP Address](http://diy-visualpedia.s3.amazonaws.com/http-addie.png)

**Pro tip** the http address will look like this: `https://github.com/YOURUSERNAME/open-sourcerer`. If you add your user name and the @ symbol before the word 'github', you won't have to enter it in so much later on. That will make the address look like this: `https://YOURUSERNAME@GitHub.com/YOURUSERNAME/open-sourcerer`. By default our fork's name is *origin* and it is on the *master* branch. 

Type:

    git clone https://github.com/YOURUSERNAME/open-sourcerer.git

Watch as it copies the files! It will also create a folder for you with the name of the repo. When it's done cloning, move into the repo's folder:

    cd open-sourcerer

Now we're inside our very own copy of the files. Let's use **ls** to *list* the contents of this folder to see what we've got!

    ls

You should see a list of filenames that look exactly like the files you see on the website for both DIY and your account page.

![cloned files](http://diy-visualpedia.s3.amazonaws.com/cloned-files.png)

### Connect to Original
We have one last thing to do. Because this is an open project, we can expect that may others will be doing the same as us: forking, cloning and making changes to the files. We want to make sure we're always working with the most up to date files. To ensure this, we'll connect our local copy to the DIY original so that we can **pull** in the most recent changes before we work on ours. If you go back to the DIY page for [Open-Sourcerer](http://www.github.com/diy/open-sourcerer), just like our fork had an address, this repo has an address too. You'll see the HTTP address near the top middle: `https://github.com/diy/open-sourcerer`. We're going to name this connection *upstream* (because this is where updates will come from).

> should they type in their username@ here too?

Type

    git remote add upstream https://github.com/diy/open-sourcerer.git 

### Pull Changes
Before we make any additions, we want to make sure we have the latest files by pulling in any changes from the *master* branch *upstream*.

Type

    git pull upstream master

If it says 'Already up to date' then no changes have been made since you started setting up! If there were changes, it updated your files. In both cases, your files will match the files on DIY's GitHub.com repo.

***
# Challenge: Submit a Pull Request

Now let's add our part to the story! We can also open up a file from Bash.

Type

    open collaborative-story.txt

It should open up the file in your computer's text editor. Add your own portion of the story after the last sentence.

![add to story](http://diy-visualpedia.s3.amazonaws.com/story-addition.png)

When you're done, save the file. Make sure you keep it saved as a .txt file. 

### Push Changes
Now let's add our changes to our forked copy and then submit them to be added to the DIY original file. 

Return to Bash and let's check what changes we've made. Type

    git status
 
![git status](http://diy-visualpedia.s3.amazonaws.com/git-status.png)

This shows you what files you've made changes to - it should say `collaborative-story.txt`. Let's see the *difference* before and after our changes with **diff**. 

    git diff
  
![git diff](http://diy-visualpedia.s3.amazonaws.com/git-diff.png)

You'll see a plus and minus sign showing the before and after. Press `Q` to exit the diff. 

###Add Changes
Let's tell Git what files we want to add, what our message about our changes is, and push those changes to our fork.

![git status add commit push](http://diy-visualpedia.s3.amazonaws.com/git-status-add-commit-push.png)

Start by adding your changed file:

    git add collaborative-story.txt
    
**Pro tip** if you have multiple files and want to add them all, you'll type `git add .` The period means *all*.

### Commit Changes
Now we'll add a *message* describing our changes and attach that to our push.

    git commit -m "your description of changes"

### Push Changes to our Fork
Now, finally, we'll actually push the file and message to our fork on GitHub. Remember our fork's name is origin (it's our *original* file) and the branch is *master*.

    git push origin master    

### Pull Request
Now our computer (local) files and our fork (remote) on GitHub match. Let's submit our changes to DIY to be added to the original. We're **requesting** they **pull** our changes into their files.

You do this part online. If you go to your forked repo on GitHub's website, you'll see a button near the top right `Pull Request`, click this.

![click pull request](http://diy-visualpedia.s3.amazonaws.com/click-pull-request.png)

You'll be taken to a page that shows DIY's original on the left and your fork on the right. Fill out the form to describe to DIY what it is you're suggesting they add and then click `Send pull request`.

Now DIY staff will get an alert of your request, be able to see your changes and merge them into the original. When the next user forks or pulls and update of this repo, they'll get your updates too!

![pull request](http://diy-visualpedia.s3.amazonaws.com/pull-request.png)

WOW! You've just forked, cloned, pulled, pushed and pull requested like an open source programming pro!

This walk through was long, but we did a lot of setting up. Now, if you wake up one day with some story inspiration, all you need to do is use Bash to navigate back to your folder and pull any updates that have been made since you last checked the files:

    git pull upstream master

Then open up the text file and make changes. Save your changes and then:

    git push origin master
    
Next, go to your GitHub page for the repo and select Pull Request. You've done it again!

We've got a couple other files on this repo that need your imput, too. Check them out!