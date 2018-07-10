import equally from './img/equally_gif.gif'
import snapbook from './img/snapbook_gif.gif'
import game from './img/ninjavszombie_gif.gif'
import magicDB from './img/magic_thedatabase.gif'
const PROJLIST = {
    projects:[
        {
            'name': 'Equally',
            'description' : 'description here',
            'github' : 'http://www.github.com',
            'live' : 'https://equally.herokuapp.com/',
            'img' : equally,
            'tech' : ['tech1', 'tech2', 'tech3']
        },
        {
            'name': 'SnapBook',
            'description' : 'description here',
            'github' : 'http://www.github.com',
            'live' : 'https://snapbooks.herokuapp.com/',
            'img' : snapbook,
            'tech' : ['tech1', 'tech2', 'tech3']
        },
        {
            'name': 'Ninja Vs. Zombies',
            'description' : 'description here',
            'github' : 'http://www.github.com',
            'live' : 'http://heroku.com',
            'img' : game,
            'tech' : ['tech1', 'tech2', 'tech3']
        },
        {
            'name': 'Magic: The Database',
            'description' : 'description here',
            'github' : 'http://www.github.com',
            'live' : 'https://magicthedatabase.herokuapp.com/',
            'img' : magicDB,
            'tech' : ['tech1', 'tech2', 'tech3']
        }
    ]
}

export default PROJLIST;