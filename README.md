# badAssLadiesClub
Welcome to BLC Podcast.

www.badassladiesclub.com
In combination of DOM Javascript, SASS, and You Tube embeds, I am delivering a podcaster's website. 
Live website lives on an Ubuntu VM, and is updated using this repository.

***ALL Likeness, Podcasts and Images are property of Bad Ass Ladies LLC, Fort Worth, TX***

**All poorly coded development, by myself, is open source and free to clone.***

Config Files:
Styles
public > css > "bad_Ass.scss"
Menus and animations 
public > jsFiles > "bad_Ass.js"

Package Dependancies(no doubtedly bloated):
NPM
package.json

Git:
backup and rename logs.ejs before getting a fresh pull to the live instance.

All "EJS" files have no variables and are quite literally html by design.
Future updates will eliminate the majority of .ejs files and pass data through the CLI.

A note about logs.ejs,

logs.ejs was created to practice raw data delivery using nodeJs's "fs".
I worked understanding a very basic delivery using body-parser.
I am moving onto parsing JSON and begin developing schemas so I can move onto database and oauth.
