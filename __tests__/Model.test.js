const Model = require('../lib/Model');

const dogSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  }
});


describe('Model', () => {
  it('builds a data model based on the schema provided', () => {
    // const schema = new Schema({
    //   name: {
    //     type: String,
    //     required: true
    //   },
    //   age: {
    //     type: Number
    //   },
    //   weight: {
    //     type: String
    //   }
    // });

    // const dog = {
    //   name: 'spot',
    //   age: 5,
    //   weight: '20 lbs'
    // };

    // expect(schema.validate(dog)).toEqual({
    //   name: 'spot',
    //   age: 5,
    //   weight: '20 lbs'
    // });
  });
});
