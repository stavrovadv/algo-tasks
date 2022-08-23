/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
const ParkingSystem = function(big, medium, small) {
    this.freeBig = big;
    this.freeMedium = medium;
    this.freeSmall = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    switch (carType) {
        case 1:
            if(this.freeBig) {
                this.freeBig--;
                return true;
            }
            return false;
        case 2:
            if(this.freeMedium) {
                this.freeMedium--;
                return true;
            }
            return false;
        case 3:
            if(this.freeSmall) {
                this.freeSmall--;
                return true;
            }
            return false;
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */