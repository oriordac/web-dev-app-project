const Liquid = [
    {
        UserId: 0,
        Water: 0
    },
    {
        UserId: 1,
        Water: 0
    },
    {
        UserId: 2,
        Water: 0
    },
    {
        UserId: 3,
        Water: 0
    }
];

function add8(userid) {
    const user = Liquid.find(x => x.UserId == userid);
    user.Water += 8;
    return true;
};

function add16(userid) {
    const user = Liquid.find(x => x.UserId == userid);
    user.Water += 16;
    return true;
};

function add32(userid) {
    const user = Liquid.find(x => x.UserId == userid);
    user.Water += 32;
    return true;
};

function getUser(token) {
    //we want to use the bearer token to find the corresponding userId
    return Liquid.findIndex(x=> x.UserId == token)
};

module.exports = {
    Liquid,
    add8, add16, add32, getUser
};
