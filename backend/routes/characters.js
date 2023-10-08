const express = require("express");
const router = express.Router();
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

        connection.query('select charClassReg.class, levelfrom characters join charClassReg on charClassReg.cid = ' + 3 + ';', (error, result,fields) =>
        {   
            res.json(result);
        }
    )}
);


module.exports = router;

