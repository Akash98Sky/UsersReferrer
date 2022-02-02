const User = require('../../models/user');

const listUsers = async () => {
    const users = await User.find({}).populate('referredUser');

    return users;
};

const createUser = async (data) => {
    const userExist = await User.count({ name: data.name });

    if(userExist > 0) {
        throw Error("User already exists");
    } else if(data.referredUser && await User.count({ _id: data.referredUser }) === 0) {
        throw Error("Referred user does not exist");
    }

    const user = new User(data);

    await user.save();

    return "User created successfully";
}

const getUser = async (id) => {
    const user = await User.findById(id).populate('referredUser');

    return user;
};

const userPayemnt = async (userId) => {
    const user = await User.findById(userId);

    if(!user) {
        throw Error("User not found");
    }

    user.isPaymentMade = true;
    
    if(user.referredUser) {
        const referredUser = await User.findById(user.referredUser);
        referredUser.totalEarnings += 10;
        await referredUser.save();
    }

    await user.save();

    return "Payment made successfully";
};

module.exports = {
    listUsers,
    createUser,
    getUser,
    userPayemnt
}