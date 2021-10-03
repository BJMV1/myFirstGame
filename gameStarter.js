class Room {

    constructor(name, description)
    {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
        this._characters = {};

    }

    get name()
    {
        return this._name
    }

    get description()
    {
        return this._description
    }

    set name(value){
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this._name = value;
    }

    describe(){
        return "I am in " +this._name + " and " + this._description;
    }


    get linkedRooms()
    {
        return this._linkedRooms
    }

    linkRoom(direction,room)
    {
        this._linkedRooms[direction] = room
    }

    move(direction){
        if(direction in this._linkedRooms){
            return this._linkedRooms[direction];
        } else {
            alert("you can't go that way")
            return this;
        }
    }
    // new 
    get characters() {
        return this._characters
    }
    addCharacter(character) {
        this._characters[character.name] = character
    }
    interact(charactername) {
        if (this._characters.hasOwnProperty(charactername)) {
            return this._characters[charactername].talk()
        }


}
}

class Character {

    constructor(name, description)    
    {
        this._name = name;
        this._description = description;
        this._conversation = "";
    }

    get name()
    {
        return this._name;
    }
    
    set name(value){
        this._name = value
    }

    get description()
    {
        return this._description;
    }

    set description(value){
        this._description = value;
    }

    get conversation()
    {
        return this._conversation;
    }

    set conversation(value){
        this._conversation = value;
    }
    

    talk(){
        return this._name + " says " + this._conversation;
    }

}

class Enemy extends Character{
    constructor(name, weakness){
        super(name, "Enemy")
        this._weakness = weakness;
    
    }

    fight(item){
        if(item == this._weakness){
            return true;
        } else {
            return false;
        } 
    }

    attack(){
        alert(this._name + " attacks you!")
    }
}

class Item {
    constructor(name,description){
        this._name = name;
        this._description = description;
        this._linkedItemRooms = {};

    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }

    get description(){
        return this._description;
    }

    set description(value){
        this._description = value;
    }

    get linkedItemRooms() //new
    {
        return this._linkedItemRooms //new
    }

    linkItemRoom(room,item) // new
    {
        this._linkedItemRooms[item] = room // new
    }

    // new code

    thisItem(item){
        if(item in this._linkedItemRooms){
            return this._linkedItemRooms[item];
        } else {
            alert("there is not item")
            return this;
        }
    }



}

// Characters 
const Gary = new Character("Gary", "Love cookies");
Avocato = new Character("Avocato", "A war machine and Gary's best friend");
moonCake = new Character("Mooncake", "A cutie green planet-destroying alien and Gary's best friend");

Gary.conversation = "Get off my cheeks HUE!";
//Gary.conversation = function(){
    //return "Get off my cheeks HUE";
//};


// items
LightSaber = new Item("Lightsaber", "Pure energy that can cut anything, even the hard skin of a friking Space Dragon Whale planet-eater");
//enemy
lordComander = new Enemy("Lord Comander", LightSaber);


//Galaxy 1 - SpaceShip rooms
const Bridge = new Room("the Bridge", " this is the control room to pilot the Galaxy 1. Take SOUTH to the 'no-gravity elevator'.");
const SouthGravityLadder = new Room("South Gravity Ladder", "this is a sort of no-gravity elevetor where you can move up and down the Galaxy 1. DOWN takes you to the first floor");
const FloorOne = new Room("Floor one", " this is my favourite floor, especially the views from the Resting Area. Go WEST to the first floor corridor or BACK to the South Gravity Ladder");
const FloorOneCorridor = new Room("Floor 1 Corridor", " this is always tidy, apart from the sweaty smell that comes from the gym room. take SOUTH to work that lazy arse, NORTH to the hall, WEST to the supply closet and EASt back to the gravity ladder.");
const Hall = new Room("Hall", " it is very posh, one day the captain room will be mine buahahah. Take NORTH to the resting area, SOUTH to the floor 1 corridor and EAST to the Captain Room.");
const Gym = new Room("The Smelly Gym", "there are loads of gym machinery, but the worst is the sweaty smell mixed with the lavander air freshener. Take NORTH to the Floor 1 corridor");
const SupplyCloset = new Room("Supply Closet", "any object you want is in this room. Take EAST to be back in Floor one corridor");
const WeaponRoom = new Room("Weapon Room", " in this room you can get any weapon from the galaxy, ask Jack the Blade and he will sort you out! though I am still waiting for 'my special delievery'.");
const CaptainRoom = new Room("The Captain Room", "Better to sneak out really quick before the Cap finds out, or I will be send out the ship to be eaten by space sharks. BACK to get ou.");
const RestingRoom = new Room("Resting Area", " After a long day in the Bridge, there is nothing better than to grab a Planet Rebel Dog Beer and watch Galaxy detectives. ");
const NorthGravityLadder = new Room("North Gravity Ladder", " no big deal! another no-gravity ladder that takes you down the Engineering room and Hangar.");
const Library = new Room("Library", " Who reads book in the 2600 AWD (after warp drive)?");
const Kitchen = new Room("Kitchen", " hell yeah!! I am finanlly getting a cookie!!!");


// linking rooms
Bridge.linkRoom("south", SouthGravityLadder)
SouthGravityLadder.linkRoom("north", Bridge)
SouthGravityLadder.linkRoom("down", FloorOne)
FloorOne.linkRoom("back", SouthGravityLadder)
FloorOne.linkRoom("west", FloorOneCorridor)
FloorOneCorridor.linkRoom("east", SouthGravityLadder)
SouthGravityLadder.linkRoom("up", Bridge)
FloorOneCorridor.linkRoom("north", Hall)
Hall.linkRoom("south", FloorOneCorridor)
FloorOneCorridor.linkRoom("south", Gym)
Gym.linkRoom("north", FloorOneCorridor)
FloorOneCorridor.linkRoom("west", SupplyCloset)
SupplyCloset.linkRoom("east", FloorOneCorridor)
Hall.linkRoom("west", WeaponRoom)
WeaponRoom.linkRoom("east", Hall)
Hall.linkRoom("east", CaptainRoom)
CaptainRoom.linkRoom("back", Hall)
Hall.linkRoom("north", RestingRoom)
RestingRoom.linkRoom("south", Hall)
RestingRoom.linkRoom("north", Library)
Library.linkRoom("south", RestingRoom)
RestingRoom.linkRoom("east", Kitchen)
Kitchen.linkRoom("west", RestingRoom)
RestingRoom.linkRoom("west", NorthGravityLadder)
NorthGravityLadder.linkRoom("east", RestingRoom) // you pass the game in this room - you find a emergency ship in the hangar and get the hell out of this infected ship 
LightSaber.linkedRooms = "This item is in the Weapon Room" // new

SouthGravityLadder.addCharacter(Gary)

// current location in the Spaceship
let currentRoom = Bridge

document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector('#start-button')
    var input = document.querySelector('#command')
    var content = document.querySelector('#game')
    content.style.display = 'none';
});
function startStory() {
    var button = document.querySelector('#start-button')
    var input = document.querySelector('#command')
    var content = document.querySelector('#game')
    content.style.display = 'block';
    button.style.display = 'none'
    alert('The adventure has started, This is a real raw promise ;)')
}
window.onload = () => {
    
    
    document.getElementById('game').innerHTML = currentRoom.describe();

    document.addEventListener("keydown", function(event){
        if(event.key === "Enter") {
            command = document.getElementById("command").value;

            const directions = ["north", "south", "east", "west", "up", "down", "back"]
            if(directions.includes (command)){
                currentRoom = currentRoom.move(command);
                document.getElementById('game').innerHTML = currentRoom.describe()
            //add else ifs to add further commands later    
            }else if (command == "talk") {
                if (currentRoom.name == "SouthGravityLadder") {
                    document.getElementById('game').innerHTML = currentRoom.interact("Gary");
           
            } else {
                alert("invalid command")
            }
        }
    } 

})

}
