var Profile = /** @class */ (function () {
    function Profile(name, hometown, education, family, birthday, age) {
        var _this = this;
        this.name = name;
        this.hometown = hometown;
        this.education = education;
        this.family = family;
        this.birthday = birthday;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.getHometown = function () {
            return _this.hometown;
        };
        this.getEducation = function () {
            return _this.education;
        };
        this.getFamily = function () {
            return _this.family;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.hometown = hometown;
        this.education = education;
        this.family = family;
        this.birthday = birthday;
        this.age = age;
    }
    return Profile;
}());
var newUser = new Profile("Mr. Ray", "Tez Nagar", "Graduate", undefined, undefined, 23);
console.log(newUser.getName());
console.log(newUser.getAge());
console.log(newUser.getBirthday());
