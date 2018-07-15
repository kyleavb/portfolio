import equally from './img/equally_gif.gif'
import snapbook from './img/snapbook_gif.gif'
import game from './img/ninjavszombie_gif.gif'
import magicDB from './img/magic_thedatabase.gif'
const PROJLIST = {
    projects:[
        {
            'name': 'Equally',
            'description' : 'Equallys main purpose is to bring taboo or under represented subjects to the foreground of discussion.  Providing a place for articles, discussion, and shelter via a chat.',
            'github' : 'https://github.com/kyleavb/EquAlly',
            'live' : 'https://equally.herokuapp.com/',
            'img' : equally,
            'tech' : ['Node.js', 'React', 'MongoDB', 'Express', 'Socket.io', 'Redux']
        },
        {
            'name': 'SnapBook',
            'description' : 'Snapbooks is a fun take on social media.  Coming as a cross between instagram and facebook, SnapBook allows users to upload images and assign them layouts.  This will then publish a SnapBook with the pictures they can share with friends.',
            'github' : 'https://github.com/kyleavb/snapbook',
            'live' : 'https://snapbooks.herokuapp.com/',
            'img' : snapbook,
            'tech' : ['Node.js', 'React', 'PostgreSQL', 'Express']
        },
        {
            'name': 'Ninja Vs. Zombies',
            'description' : 'A programatically generated game.  The system will automatically generate new terrain including pits, platforms, and background. While allowing the user to see how high of a score they can get!',
            'github' : 'https://github.com/kyleavb/game',
            'live' : 'https://kyleavb.github.io/game/',
            'img' : game,
            'tech' : ['HTML', 'CSS', 'JavaScript', 'jQuery']
        },
        {
            'name': 'Magic: The Database',
            'description' : 'This site was developed to provide players of Magic the gathering card game a central site to lookup cards and theorycraft decks they may want to build.  Additionally decks can be posted, up voted/down voted, and discussed all on this site. ',
            'github' : 'https://github.com/kyleavb/project2',
            'live' : 'https://magicthedatabase.herokuapp.com/',
            'img' : magicDB,
            'tech' : ['Node.js', 'Express', 'EJS']
        }
    ]
}

export default PROJLIST;