const homes = require('./db.json')
let globalId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(homes)
    },
    deleteHouse: (req, res) => {
        let index = homes.findIndex((ele) => ele.id === +req.params.id)
        homes.splice(index, 1)
        res.status(200).send(homes)
    },
    createHouse: (req, res) => {
        let {address, price, imageURL} = req.body;
        let newHouse = {
            id: globalId,
            address,
            price,
            imageURL
        }
        homes.push(newHouse)
        res.status(200).send(homes)
    },
    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        let index = homes.findIndex((ele) => ele.id === +id)

        if (type === 'minus') {
            homes[index].price--;
            res.status(200).send(homes)
        } else if (type === 'plus') {
            homes[index].price++;
            res.status(200).send(homes)
        }
    }

}