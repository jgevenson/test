import Chance from 'chance'

const chance = Chance();


const createPlayer = () => ({
    id: chance.guid(),
    name: chance.first(),
    // score: chance.d10(),
    hdcp: chance.d30()
});

const players = chance.n(createPlayer, chance.d4());
  export default players