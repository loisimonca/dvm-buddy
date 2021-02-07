const db = require('../models');


//define methods for the slotsController
module.exports = {
  findAll: (req, res) => {
    db.Slot.find(req.query)
    .sort({slot_date: 1})
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Slot.create(req.body)
      .then(console.log(req.body))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByDate: (req, res) => {
    const slot_date = req.params.slot_date;
    console.log('slot date: ', slot_date);
    //slot_date = '2017-11-09';

    //Returns all slot with present date
    db.Slot.find({})
        .where('slot_date').equals(slot_date)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
        // .exec((err, slots) => res.json(slots));
  }
};
// const slotController = {
//   all (req, res) {
    
//   },
  // create (req, res) {
  //   const requestBody = req.body;

  //   const newslot = new Slot ({
  //     slot_time: requestBody.slot_time,
  //     slot_date: requestBody.slot_date,
  //     created_at: Date.now()
  //   });
  //   newSlot.save((err, saved) => {
  //     //Returns the new slot
  //     //after a successful save
  //     Slot
  //       .findOne({_id: saved._id})
  //       .exec((err, slot) => res.json(slot));
  //   })
  // },
  // findByDate (req, res) {
  //   const slot_date = req.params.slot_date;
  //   console.log('slot date: ', slot_date);
  //   //slot_date = '2017-11-09';

  //   //Returns all slot with present date
  //   Slot.find({})
  //       .where('slot_date').equals(slot_date)
  //       .exec((err, slots) => res.json(slots));
  // }
// };

// module.exports = slotController;