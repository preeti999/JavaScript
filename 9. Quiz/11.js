function Company(name) {
    this.name = name;
}
Company.prototype.getName = function getName() {
    return this.name;
};
const gfg = new Company('Geeksforgeeks');
console.log(gfg.getName());