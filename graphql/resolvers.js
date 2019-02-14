const nicolas = {
  name: "Nicolas",
  age: 18,
  gender: "femail"
};

const resolvers = {
  Query: {
    person: () => nicolas
  }
};

export default resolvers;
