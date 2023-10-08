const express = require("express");
const router = express.Router();
const dictionary = require("../definitions.js");
//character functions:
//  retrieve list of characters

//retrieve list of characters related to account
//input:
//  accountID
//output: list of
//  characterID, name, race,

router.get('/characterBrief', (req, res) =>
    {
        if(req.body == null){
            res.send("Invalid account");
        }

        connection.query( 'select cid, name, race from characters where characters.aid = ' + req.body.accountID + ';', 
            (error, result, fields) =>
            {
                res.json(result);
            }

        )}
);

//retrieve list of classes/levels for a character
//input:
//  characterID
//output:
//  arr of dict<class, levels>
router.get('/characterLevels', (req, res) =>
    {
        if(req.body == null){
            res.send("Invalid character");
        }

        connection.query('select classes.class, level from characters join classes on classes.cid = ' + 3 + ';', (error, result,fields) =>
        {   
            res.json(result);
        }
    )}
);

//update database with character information... post request with
//input:
//  character name
//  race
//  class(es)
//  base_str
//  base_dex
//  base_con
//  base_int
//  base_wis
//  base_cha
router.get('/createCharacter', (req, res) =>
    {
        //incoming json should be:
        //{
        //  const body = {
        //      'name' : <string>
        //      'race' : <string>
        //      'base_str' : <string>
        //      ...
        //      'class_set' :
        //          [{
        //            class : <string>,
        //            level : <string>
        //            },
        //              ...
        //            {
        //             class : <string>,
        //             level : <string>
        //            }
        //           ]
        //}
        //name, race, and base stats go in
        //disregard background, disregard
        queryString1 = "insert into characters (aid, name, race, background, alignment, size, hp, hp_counter, ac, armor, strength, dexterity, constitution, intelligence, wisdom, charisma, wspeed, sspeed, fspeed, cspeed) values (" +
            req.body.accountID + ', ' +
            req.body.name + ', ' +
            req.body.race + ', ' +
            null + ', ' +
            null + ', ' +
            dictionary.races[req.body.race].size+ ', ' +
            req.body.hp + ', ' +
            req.body.hp + ', ' +
            req.body.ac + ', ' +
            req.body.armor + ', ' +
            req.body.base_str + ', ' +
            req.body.base_dex + ', ' +
            req.body.base_con + ', ' +
            req.body.base_int + ', ' +
            req.body.base_wis + ', ' +
            req.body.base_cha + ', ' +
            dictionary.races[req.body.race].wspeed + ', ' +
            dictionary.races[req.body.race].sspeed + ', ' +
            dictionary.races[req.body.race].fspeed + ', ' +
            dictionary.races[req.body.race].cspeed + ');'

        connection.query(queryString1, (error, results, fields) =>
            {
                connection.query('select cid from characters where aid = ' + req.body.accountID + ' and name =' + req.body.name + ' and race = ' + req.body.race + ';', (error2, results2, fields2) =>
                {
                    for(var i = 0; i < req.body.class_set.length; i++){
                        //add classes
                        queryString2 = 'insert into classes values (' + results2.cid + ', ' + req.body.class_set[i].class + ', ' + req.body.class_set[i].level + ',' + req.body.class_set[i].level + ');';
                        connection.query(queryString1, (error, result, fields) =>  {if(error) throw error})
                    };
                }
                )
            }
        );

        //classes should go in here
        //class notation format should be:
        //  {};
        res.send("success");
    }
);

//returns a character's base table given an id
router.get('/retrieveCharacter', 
    (req, res) => 
    {
        connection.query('select * from characters where cid = ' + req.body.accountID + ';');
    }
);


module.exports = router;

